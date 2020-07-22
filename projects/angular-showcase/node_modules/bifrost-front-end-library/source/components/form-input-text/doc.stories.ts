import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Form/Input Text'
};

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { 
    component: 'form-input-text',
    class: '',
    label: 'Label',
    labelClass: '',
    labelExtraAttribute: '',
    labelTooltipTxt: '',
    inputId: '',
    inputClass: '',
    inputType: '',
    inputValue: 'Value',
    inputPlaceholder: 'Placeholder',
    inputName: '',
    extraAttribute: '',
    iconName: '',
    invalidMsg: 'This is an invalid error message',
    subInfos: 'subInfos',
};