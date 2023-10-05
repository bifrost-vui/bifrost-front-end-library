import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { themes } from '@storybook/theming/';
import { brandBifrost } from './brandBifrost';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const argTypes = {
    iframeUrl: { table: { disable: true } },
    elementPath: { table: { disable: true } },
    props: { table: { disable: true } },
    ngClasses: { table: { disable: true } },
    computetNgClasses: { table: { disable: true } },
    ngOnInit: { table: { disable: true } },
    ngOnChanges: { table: { disable: true } },
    _theme: {
        control: { type: 'select', options: ['videotron', 'business'] },
        description: '**Storybook only**<br> Apply a `data-theme` attribute on the `<body>`.',
        table: {
            category: 'Container (Not in the component)',
            defaultValue: { summary: 'videotron' },
        },
    },
    _reversed: {
        control: { type: 'boolean' },
        description:
            "**Storybook only**<br> Apply a `reversed` class on a component's parent to simulate a `reversed` state.",
        table: {
            category: 'Container (Not in the component)',
            defaultValue: { summary: false },
        },
    },
};

addParameters({
    options: {
        storySort: {
            order: ['*', 'UI-Kit', 'Deprecated'],
        },
        showPanel: true,
    },

    darkMode: {
        stylePreview: true,
        light: {
            ...themes.light,
            ...brandBifrost.light,
        },
        dark: {
            ...themes.dark,
            ...brandBifrost.dark,
        },
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
        argTypesRegex: '^on[A-Z].*',
    },
});
