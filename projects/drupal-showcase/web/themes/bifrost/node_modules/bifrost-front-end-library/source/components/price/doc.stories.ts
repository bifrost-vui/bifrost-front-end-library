import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Price Box'
};

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { 
    component: 'price',
    class: '',
    priceBoxSubInfosLabel: '',
    priceBoxSubInfosClass: '',
};