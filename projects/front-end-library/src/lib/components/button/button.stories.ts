import { ButtonComponent } from './angular/button.component';
import { TwigContainerComponent } from '../../../utils/twig-container/twig-container.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: { docs: { iframeHeight: 100 } },
  assets: [
      'https://via.placeholder.com/300/09f/fff.png', // link to an external image
      'https://www.example.com', // link to a webpage
      'https://www.example.com?id={id}', // link to a webpage with the current story's id in the url
    ],
};

const ButtonStory = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Basic = ButtonStory.bind({});
Basic.args = { label: 'Basic', };

export const Secondary = ButtonStory.bind({});
Secondary.args = { label: 'Secondary', color: 'secondary' };

export const Disabled = ButtonStory.bind({});
Disabled.args = { label: 'Disabled', disabled: true };

export const Drupal = (args) => ({
  component: TwigContainerComponent,
  props: args
});
Drupal.args = { componentName: 'button', label: 'Drupal' };
Drupal.parameters = { docs: { iframeHeight: 200 } };