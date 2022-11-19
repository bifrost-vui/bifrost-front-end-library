import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const argTypes = {
    iframeUrl: { table: { disable: true } },
    props: { table: { disable: true } },
    ngClasses: { table: { disable: true } },
    computetNgClasses: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    ngOnChanges: { table: { disable: true } },
    _theme: {
        table: { defaultValue: { summary: 'videotron' } },
        control: { type: 'select', options: [ 'videotron', 'business' ] }
    }
};

addParameters({

    options: {
        storySort: {
            order: ['*', 'UI-Kit']
        },
        showPanel: true
    },

    docs: {
        inlineStories: false,
        iframeHeight: 600,
    },

    layout: 'centered',

    backgrounds: {
        default: 'Ground',
        values: [
            { name: 'Ground', value: '#fff' },
            { name: 'Underground', value: '#f2f2f0' },
            { name: 'Ground Reversed', value: '#050504' },
            { name: 'Underground Reversed', value: '#2a2a27' },
        ],
    },
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        sort: 'alpha',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },

    actions: {
        argTypesRegex: "^on[A-Z].*"
    }
});