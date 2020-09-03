import { addParameters, addDecorator } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

addParameters({
    // Docs
    docs: {
        // inlineStories: true,
        // iframeHeight: '100px',
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
        hideNoControlsWarning: true
    },
    argTypes: {
        elementPath: { table: { disable: true } }
    },
    
    // Hide addons
    storySource: { disable: true },
    knobs: { disable: true },
    actions: { disable: true },
    design: { disable: true },
    'design-assets': { disable: true },
});