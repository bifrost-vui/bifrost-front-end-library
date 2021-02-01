import $ from 'jquery';

$(function () {
  const demoItemEquipment = '.js-DEMO-item-equipment';

  const isStickyPriceBarActive = function () {
    let isActive = false;

    // add equipment
    $('.js-DEMO-item-equipment').each(function () {
      if($(this).hasClass('active')){
        isActive = true;
      }
    });

    return isActive;
  };

  const updateNavStickyPriceBar = function () {
    const isStickyNavBarActive = isStickyPriceBarActive();
    const priceBar = $('#stickyNavPrice');

    if (isStickyNavBarActive) {
      $('#stickyNavContinuBtn', priceBar).removeClass('disabled');
      $('#stickyNavOneTimeFeeBlock', priceBar).fadeIn();
    } else {
      $('#stickyNavContinuBtn', priceBar).addClass('disabled');
      $('#stickyNavOneTimeFeeBlock', priceBar).fadeOut();
    }
  };

  $('.js-DEMO-unselect-equipment-item', demoItemEquipment).on('click', function (e) {
    e.preventDefault();
    const $containerItemEquipment = $(this).parents(demoItemEquipment);
    $containerItemEquipment.removeClass('active');
    updateNavStickyPriceBar();

    if($containerItemEquipment.hasClass('item-equipment--replace')) {
      $(demoItemEquipment).removeClass('item-equipment--desactivated');
    }
  });

  // Add equipment
  // -----------------------------------------------
  $('.js-input-increment__input', demoItemEquipment).on('input', function () {
    ($(this).val() > 0)
      ? $(this).parents(demoItemEquipment).addClass('active')
      : $(this).parents(demoItemEquipment).removeClass('active');

    updateNavStickyPriceBar();
  });

  // remove equipment
  // -----------------------------------------------
  $('.js-DEMO-select-equipment-item', demoItemEquipment).on('click', function () {
    const $containerItemEquipment = $(this).parents(demoItemEquipment);
    $containerItemEquipment.addClass('active');
    $('.js-tooltip-custom__close', $containerItemEquipment).trigger('click');
    updateNavStickyPriceBar();

    // replace
    if($containerItemEquipment.hasClass('item-equipment--replace')) {
      $('.js-DEMO-item-equipment:not(.active)').addClass('item-equipment--desactivated');
    }
  });

  $('.js-DEMO-custom-select', demoItemEquipment).on('change', function(){
    const selectValue = $(this).val();
    const btnSelectEquipment = $(this).parents(demoItemEquipment).find('.js-DEMO-select-equipment-item');

    btnSelectEquipment.hide();

    if(selectValue != '-'){
      btnSelectEquipment.fadeIn();
    }
  });
});