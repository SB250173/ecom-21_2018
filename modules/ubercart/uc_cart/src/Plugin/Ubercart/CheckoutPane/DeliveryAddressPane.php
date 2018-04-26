<?php

namespace Drupal\uc_cart\Plugin\Ubercart\CheckoutPane;

/**
 * Gets the user's delivery information.
 *
 * @CheckoutPane(
 *   id = "delivery",
 *   title = @Translation("Delivery information"),
 *   weight = 3,
 *   shippable = TRUE
 * )
 */
class DeliveryAddressPane extends AddressPaneBase {

  /**
   * {@inheritdoc}
   */
  protected function getDescription() {
    return $this->t('<p class="step-shipping-info">Step 2: Shipping information</p><br><p class="text-shipping-address">Shipping Address</p><br>Please fill out the <b>required(*)</b> information below.');
  }

  /**
   * {@inheritdoc}
   */
  protected function getCopyAddressText() {
    return $this->t('My delivery information is the same as my billing information.');
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'delivery_not_shippable' => TRUE,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm() {
    $form['delivery_not_shippable'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Hide delivery information when carts have no shippable items.'),
      '#default_value' => $this->configuration['delivery_not_shippable'],
    );
    return $form;
  }

}
