import { ButtonComponent } from './angular/button.component';
import { TwigContainer2Component } from '../../../utils/twig-container2/twig-container.component';

export default {
  title: 'Twig Test',
  component: TwigContainer2Component,
};

const ButtonStory = (args) => ({
  component: TwigContainer2Component,
  props: args,
});

export const Basic = ButtonStory.bind({});
Basic.args = { label: 'Basic', };

