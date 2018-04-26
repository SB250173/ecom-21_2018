<?php

/**
 * @file
 * Views hooks for Ubercart volume pricing.
 */

/**
 * Implements hook_views_data().
 */
function lee_pricing_views_data() {

  $data['lee_pricing']['table']['group'] = t('Volume Pricing');

  $data['lee_pricing']['table']['join'] = array(
    'node_field_data' => array(
      'left_field' => 'nid',
      'field' => 'nid',
    ),
  // @todo: get revisions to work
  /*
    'node_revisions' => array(
     'left_field' => 'vid',
     'field' => 'vid',
    ),
    */
  );

  $data['lee_pricing']['min'] = array(
    'title' => t('Minimum Quantity'),
    'help' => t('The min setting before price can be met.'),
    'field' => array(
      'id' => 'numeric',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'id' => 'standard',
    ),
    'filter' => array(
      'id' => 'numeric',
    ),
  );

  $data['lee_pricing']['display_price_range'] = array(
    'title' => t('Display Price Range'),
    'help' => t('The Price Range between Minimum and Maximum'),
    'field' => array(
      'id' => 'standard',
      
    ),
    'sort' => array(
      'id' => 'standard',
    ),
    'filter' => array(
      'id' => 'string',
    ),
  );

  $data['lee_pricing']['price'] = array(
    'title' => t('Volume price'),
    'help' => t("The price when bought with minimum quantity."),
    'field' => array(
      'id' => 'uc_price',
      'click sortable' => TRUE,
    ),
    'sort' => array(
      'id' => 'standard',
    ),
    'filter' => array(
      'id' => 'numeric',
    ),
  );

  return $data;
}
