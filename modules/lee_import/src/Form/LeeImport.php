<?php

/**
 * @file
 * Contains \Drupal\contentimport\Form\ContentImport.
 */

namespace Drupal\lee_import\Form;

use Drupal\contentimport\Controller\ContentImportController;
use Drupal\Core\Database\Database;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Form\Form;
use Drupal\file\Entity\File;
use Drupal\file\FileInterface;
use Drupal\lee_import\Controller\LeeImportController;
use Drupal\migrate\Plugin\migrate\process\ArrayBuild;
use function GuzzleHttp\default_ca_bundle;


/**
 * Configure Content Import settings for this site.
**/

class LeeImport extends ConfigFormBase {

  public function getFormID() {
    return 'lee_import';
  }

  /**
   * {@inheritdoc}
  */

  protected function getEditableConfigNames() {
    return [
      'lee_import.settings',
    ];
  }

  /**
   * Content Import Form.
  */

  public function buildForm(array $form, FormStateInterface $form_state) {
  //  $ContentTypes = LeeImportController::getAllContentTypes();
    $selected = 0;
    $form['lee_import_contenttype'] = [
      '#type' => 'select',
      '#title' => $this->t('Select Content to upload'),
//      '#options' => array(t('--- SELECT ---'), t('Spring Data'), t('Price Slab')),
      '#options' => array(

        'product' => t('Spring Data'),
        'price' => t('Price Slab')
      ),

      '#default_value' => $selected,
    ];

    $form['file_upload'] = [
      '#type' => 'managed_file',
      '#title' => t('Import CSV File'),
      '#size' => 40,
      '#description' => t('Select the CSV file to be imported. '),
      '#required' => FALSE,
      '#autoupload' => TRUE,
      '#upload_validators' => array('file_validate_extensions' => array('csv'))
    ];

    $form['submit'] = [
    '#type' => 'submit', 
    '#value' => t('Import'),
    '#button_type' => 'primary',
    ];

    return parent::buildForm($form, $form_state);
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $contentType= $form_state->getValue('lee_import_contenttype');

        $form_state_values = $form_state->getValues();
        $csvFile = $form_state->getValue('file_upload');
        $file = File::load($csvFile[0]);
        $file->setPermanent();
        $file->save();
        LeeImport::saveData($contentType);

//    $this->test();

  }

  /**
   * To import data as Content type nodes.
  */

  public function saveData($contentType){
    global $base_url;  
    $loc = db_query('SELECT file_managed.uri FROM file_managed ORDER BY file_managed.fid DESC limit 1', array());
    foreach($loc as $val){
      $location = $val->uri; // To get location of the csv file imported
    }
    $mimetype = mime_content_type($location);


    switch ($contentType) {
      case "product": {
        $fields = LeeImport::getFields($contentType);        
        array_push($fields,'title');
        
        //$nodeArray=$this->populateBlankValueForEmptyFields($nodeArray);
      }
        break;
      case "price": {
        $fields = LeeImport::getFieldsOfATable("lee_pricing");
      }
        break;
      default:
        return;
    }


    $files = glob('sites/default/files/'.$contentType.'/images/*.*');
    $images = [];
    foreach ($files as $file_name) {
      file_unmanaged_copy($file_name, 'sites/default/files/'.$contentType.'/images/' .basename($file_name));
      $image = File::create(array('uri' => 'sites/default/files/'.$contentType.'/images/' .basename($file_name)));
      $image->save();
      $images[basename($file_name)] = $image;
    }



    if($mimetype == "text/plain"){ //Code for import csv file
      if (($handle = fopen($location, "r")) !== FALSE) {
          $nodeData = [];
          $keyIndex = [];
          $index = 0;


          while (($data = fgetcsv($handle)) !== FALSE) { 
            $index++;
            if ($index < 2) {
              $keyIndex=$this->getIndexOfMatchingFields($fields,$data);
              continue;
            }
            foreach($fields AS $fieldValues){
              $pos = strpos($fieldValues, 'image');
              $pos1 = strpos($fieldValues, 'img');
              if ($pos === false && $pos1 ==  false) {
                $nodeArray[$fieldValues] = $data[$keyIndex[$fieldValues]];
              }else{
                if (!empty($images[$data[$keyIndex[$fieldValues]]])) {
                  $nodeArray[$fieldValues] = array(array('target_id' => $images[$data[$keyIndex[$fieldValues]]]->id()));
                }
              }
            }

            
            switch ($contentType) {
              case "product": {
                $this->saveNode($contentType,$nodeArray);
              }
                break;
              case "price": {
                $this->savePricingTable($contentType,$nodeArray);
              }
                break;
              default:
                return;
            }
      }
      fclose($handle);
      $url = $base_url."/admin/content";
      header('Location:'.$url);
      exit;
    }
    }
  }
  public function populateBlankValueForEmptyFields($nodeArray){


//      $nodeArray['model']= 'KG';

//       $notNullStringFields=['weight_units'];

//       foreach($notNullStringFields AS $notNullField){
//           $nodeArray[$notNullField]= ' ';
//       }
//
      $notNullIntFields=['cost','price','weight','default_qty','pkg_qty','dimensions','width'];
      foreach($notNullIntFields AS $notNullField){
          $nodeArray[$notNullField]= 0;
      }
//
//      $notNullBoolFields=['shippable'];
//      foreach($notNullBoolFields AS $notNullField){
//          $nodeArray[$notNullBoolFields]= FALSE;
//      }
//      $nodeArray['weight_units']= 'KG';

      return $nodeArray;

  }

  public function saveNode($contentType,$nodeArray){

    $nodeArray['type'] = strtolower($contentType);
//    $nodeArray['nid'] = 1;
//    $nodeArray['vid'] = 1;
    $node = \Drupal\node\Entity\Node::create($nodeArray);
    $node->cost=0;
    $node->price=0;
    $node->default_qty=1;
    $node->pkg_qty =1;
    $node->weight = 0;
    $node->weight->units='lb';
    $node->dimensions->length=0;
    $node->dimensions->width=0;
    $node->dimensions->height=0;
    $node->dimensions->units='in';

//    $node->get('weight_units');
    $node->save();

//    uc_product_node_insert($node);

  }

   public function savePricingTable($contentType,$nodeArray){
    echo $nodeArray;

    $connection = Database::getConnection();
    $executed=$connection->select('uc_products', 'x')
      ->fields('x', array())
      ->condition('x.model', $nodeArray['stock_code'], '=')
      ->execute();

    $results = $executed->fetchAll(\PDO::FETCH_OBJ);

if($results!= NULL)
{
    $nodeArray['nid']= $results[0]->nid;
    $nodeArray['vid']= $results[0]->vid;
    $keys = array_keys($nodeArray);
    
    \Drupal::database()
    ->delete('lee_pricing')
    ->condition('min', $nodeArray['min'])
    ->condition('nid', $nodeArray['nid'])
    ->execute();

    $insertedProducts = $connection->insert('lee_pricing')
      ->fields(
        ($keys)
      )
      ->values(
        ($nodeArray)
      )
      ->execute();
    }
    else
    {
     db_insert('missing_price')
          ->fields(array(
            'stockcode','min','price_code','price','display_price_range','currency'
            
          ))
          ->values(array(
            'stockcode' => $nodeArray['stock_code'],
            'min' => $nodeArray['min'],
            'price_code' => $nodeArray['price_code'],
            'price' => $nodeArray['price'],
            'display_price_range' => $nodeArray['display_price_range'],
            'currency' => $nodeArray['currency'],
          ))
          ->execute();  
    }
  }


  /**
   * To get all Content Type Fields.
   */

  public function getFields($contentType) {
    $entityManager = \Drupal::service('entity.manager');
    $fields = [];
    foreach (\Drupal::entityManager()
               ->getFieldDefinitions('node', $contentType) as $field_name => $field_definition) {
      if (!empty($field_definition->getTargetBundle())) {
        $fields[] = $field_definition->getName();
      }
    }
    return $fields;
  }

  public function getIndexOfMatchingFields($fields, $data){
    $keyIndex = [];
    array_push($fields,'title');
    foreach($fields AS $fieldValues){
      $i = 0;
      foreach($data AS $dataValues){
        if($fieldValues == $dataValues){
          $keyIndex[$fieldValues] = $i;
        }
        $i++;
      }
    }
    return $keyIndex;

  }

  public function getFieldsOfATable($tableName){
//    $connection = Database::getConnection();
//    $result = $connection->prepareQuery('SHOW COLUMNS FROM {lee_pricing}')
//      ->execute();

    $fields = [];
    $result=db_query("SHOW COLUMNS FROM ".$tableName);
    foreach($result as $val){
      $fields[]= $val->Field;
    }
    return $fields;

  }

  public function test(){
//    //  The machine name of the field can contain only lowercase alphanumeric characters and underscores.
//    $field_name = 'vishnu_field';
//
//    //  Verify the field does not already exist.
////    if ( field_info_field( $field_name ) ) {
////      return;
////    }
//
//    //  Create the field definition array.
//    $field = array(
//      'field_name' => $field_name,
//      'type' => 'text',
//    );
//    //  Create the field.
//    $field = field_create_field( $field );
//
//    //  Create the field instance definition array.
//    $instance = array(
//      'field_name' => $field[ 'field_name' ],
//      'entity_type' => 'node',
//      'bundle' => 'article',
//      'description' => 'A field for testing the programmatic creation of new fields.',
//      'label' => 'New Field',
//      'widget' => array(
//        'type' => 'textfield',
//      ),
//    );
//
//    //  Create an instance of the field and bind it to the bundle.
//    field_create_instance($instance);



  }





 
}