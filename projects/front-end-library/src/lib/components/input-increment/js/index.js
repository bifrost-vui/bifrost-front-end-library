/**
 *  Script for the Bifrost Input increment
 **/
import $ from 'jquery';

$(function () {

  const container = $('.js-bf-input-increment')

  container.each(function (i, el) {
    const $this = $(el),
          $quantityInput = $this.find('.js-bf-input-increment__input'),
          $plusButton = $this.find('.js-bf-input-increment__plus'),
          $minusButton = $this.find('.js-bf-input-increment__minus'),
          $maxValue = $quantityInput.attr('max'),
          $minValue = $quantityInput.attr('min');

    let currentValue = $quantityInput.val();

    if( currentValue < $minValue  ){
      $quantityInput.val($minValue);
      currentValue = $minValue;
    }

    const increment = function(){
      currentValue ++
      $quantityInput.val(currentValue)
      checkLimitValues(currentValue)
    }

    const decrement = function(){
      currentValue --
      $quantityInput.val(currentValue)
      checkLimitValues(currentValue)
    }

    const checkLimitValues = function(quantity){

      if (quantity >= $maxValue){
        $plusButton.prop('disabled', true)
      } else {
        $plusButton.prop('disabled', false)
      }

      if (quantity <= $minValue){
        $minusButton.prop('disabled', true)
      } else {
        $minusButton.prop('disabled', false)
      }
    }

    $plusButton.click(function(){
      increment()
    })

    $minusButton.click(function(){
      decrement()
    })

  })

})














