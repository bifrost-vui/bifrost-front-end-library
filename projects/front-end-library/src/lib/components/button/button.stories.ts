import { ButtonComponent } from './angular/button.component';

export default {
  title: 'Components/Controls',
  component: ButtonComponent,
  parameters: { docs: { iframeHeight: 120 } },
};

const ButtonStory = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Basic = ButtonStory.bind({});
Basic.args = { label: 'Label', disabled: false };

export const Disabled = ButtonStory.bind({});
Disabled.args = { label: 'Disabled', disabled: true };