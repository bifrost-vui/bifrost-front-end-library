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

    let currentValue = $quantityInput.val() ;

    const increment = function(){
      currentValue ++
      checkLimitValues(currentValue)
      $quantityInput.val(currentValue)
    }

    const decrement = function(){
      currentValue --
      checkLimitValues(currentValue)
      $quantityInput.val(currentValue)
    }

  if ($this.hasClass('disabled')){
    $plusButton.prop('disabled', true)
    $plusButton.addClass('disabled')
    $minusButton.prop('disabled', true)
    $minusButton.addClass('disabled')
  }

    const checkLimitValues = function(quantity){

      if (quantity == $maxValue){
        $plusButton.prop('disabled', true)
        $plusButton.addClass('disabled')
      } else {
        $plusButton.prop('disabled', false)
        $plusButton.removeClass('disabled')
      }
      if (quantity == $minValue){
        $minusButton.prop('disabled', true)
        $minusButton.addClass('disabled')
      } else {
        $minusButton.prop('disabled', false)
        $minusButton.removeClass('disabled')
      }
    }

    $plusButton.click(function(){
      increment()
    })

    $minusButton.click(function(){
      decrement()
    })

    $quantityInput.keyup(function(){
      currentValue = $quantityInput.val()
      checkLimitValues(currentValue)

    })
  })

})
