import { Meta, Story, moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import Button from '../twig/button.twig';
import { ButtonComponent } from '../angular/button.component';

export default {
  title: 'Example/Button',
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
    argTypes: {
        label: { control: 'text' },
    }
} as Meta;

export const Drupal = (args) => ({    
    template: Button({ ...args }),
    props: args,
});


export const Angular = (args) => ({    
    component: ButtonComponent,
    props: args,
});
