import { addParameters, addDecorator } from '@storybook/angular';
import { prepareForInline } from '@storybook/addon-docs/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

addParameters({
    // Docs
    docs: {
        inlineStories: true,
        prepareForInline,
        // prepareForInline: (storyFn, { args }) => {
        //     const Story = toReact(storyFn());
        //     return <Story {...args} />;
        // },
         iframeHeight: 600,
    },
    layout: 'centered',

    // Backgrounds
    backgrounds: {
      default: 'Ground',
      values: [
        { name: 'Ground', value: '#fff' },
        { name: 'Underground', value: '#f2f2f0' },
        { name: 'Ground Reversed', value: '#050504' },
        { name: 'Underground Reversed', value: '#2a2a27' },
      ],
    },

    // Controls
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        sort: 'alpha',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    argTypes: {
        elementPath     : { table: { disable: true } },
        iframeUrl       : { table: { disable: true } },
        props           : { table: { disable: true } },
    },

    actions: { argTypesRegex: "^on[A-Z].*" }

    // // Hide addons
    // storySource: { disable: true },
    // knobs: { disable: true },
    // actions: { disable: true },
    // design: { disable: true },
    // 'design-assets': { disable: true },
});
