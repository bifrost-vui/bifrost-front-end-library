import $ from "jquery";

$(function () {
  // Quantity Button Items
  //const quantityComponent = '.js-bf-quantity-button';
  const quantityInput = '.js-bf-quantity-button__input';
  const plusButton = '.js-bf-quantity-button__plus';
  const minusButton = '.js-bf-quantity-button__minus';

  const maxValue = $(quantityInput).attr('max');
  const minValue = $(quantityInput).attr('min');
  let currentValue = $(quantityInput).val()


  const increment = function(){
    currentValue ++;
    $(quantityInput).val(currentValue);
    checkLimitValues(currentValue)
  }
  const decrement = function(){
    currentValue --;
    $(quantityInput).val(currentValue);
    checkLimitValues(currentValue)
  }
  const checkLimitValues = function(quantity){
    if (quantity >= maxValue){
      $(plusButton).prop('disabled', true)
    }
    else {
      $(plusButton).prop('disabled', false)
    }

    if (quantity <= minValue){
      $(minusButton).prop('disabled', true)
    }
    else {
      $(minusButton).prop('disabled', false)
    }

  }

  $(plusButton).click(function(){
    increment();
  })
  $(minusButton).click(function(){
    decrement();
  })
})