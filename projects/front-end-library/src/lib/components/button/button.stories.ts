import { ButtonComponent } from './angular/button.component';
import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Button TS',
  component: ButtonComponent,
  parameters: { docs: { iframeHeight: 100 } },
};

const ButtonStory = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const DrupalStory = (args) => ({
  component: TwigContainerComponent,
  props: args,
});
DrupalStory.args = { componentName: 'button', label: 'Drupal' };

export const Basic = ButtonStory.bind({});
Basic.args = { label: 'Basic', };

export const Secondary = ButtonStory.bind({});
Secondary.args = { label: 'Secondary', color: 'secondary' };

export const Disabled = ButtonStory.bind({});
Disabled.args = { label: 'Disabled', disabled: true };