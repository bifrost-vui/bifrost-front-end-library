import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Tag'
};

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { 
    component: 'tag',
    label: 'Here is a simple <strong>badge to showcase what can be done.</strong>',
    class: '',
    color: '',
    padding: '',
};

// I renamed tag-badge.twig to tag.twig.
// I format the file for readability.
// Questions:
// Should we remove the default text from the component?