import $ from 'jquery';

$(function(){
  $('.js-anim-jauge').each(function(index, elem){
    const maxValue = Number($(elem).data('max-value'));
    const value = Number($(elem).data('value'));
    const strokeArray = Number($(elem).attr('stroke-dasharray'));

    const jaugeOffsetValue = (value/maxValue * strokeArray);
    let calculatedJaugeValue = strokeArray + jaugeOffsetValue;

    // if full jauge
    calculatedJaugeValue = (jaugeOffsetValue >= strokeArray) ? (strokeArray * 2) : calculatedJaugeValue;

    $(this).attr('stroke-dashoffset', calculatedJaugeValue );
  });
});