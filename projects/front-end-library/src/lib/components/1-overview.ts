import { Story, Meta, Preview, Props } from '@storybook/addon-docs/blocks';
import { linkTo } from '@storybook/addon-links';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button/angular/button.component';
import { TileComponent } from '../../utils/tile/tile.component';


export default {
    title: 'Components/All Components TS',
    parameters: {
        layout: 'padded',
        viewMode: 'docs',
        previewTabs: { canvas: { hidden: true } }
    },
    decorators: [
        moduleMetadata({ declarations: [ButtonComponent, TileComponent]})
    ]
}

const ButtonStory = (args) => ({
  component: ButtonComponent,
  props: args,
});

export const Basic = ButtonStory.bind({});
Basic.args = { label: 'Basic', };