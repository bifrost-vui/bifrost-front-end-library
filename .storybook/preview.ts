import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

import '../public/js/core.js';
import '../public/js/vendors~bifrost-components.js';
import '../public/js/bifrost-components.js';
import '../public/js/bifrost-demo.js';

//---------------------------------------------------------------
// Twig.js
Twig.extendFilter('price_one_line', function(value) {
    return value;
});

Twig.twig({
    debug               : false,
    allow_async         : false, // Allow asynchronous compiling
    strict_variables    : false,
    allowInlineIncludes : true,
    rethrow             : true,
});

twigDrupal(Twig);

//---------------------------------------------------------------
// CompoDoc
setCompodocJson(docJson);

export const argTypes = {
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