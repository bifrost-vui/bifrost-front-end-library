import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

import { addParameters, addDecorator } from '@storybook/angular';
import { prepareForInline } from '@storybook/addon-docs/angular';
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

// Storybook Decorators
/*
export const decorators = [
    componentWrapperDecorator((story) => (`
        <div class='videotron-ui'>
            <script>
                async function load() {
                    await import('/js/core.js');
                    await import('/js/vendors~bifrost-components.js');
                    await import('/js/bifrost-components.js');
                    await import('/js/bifrost-demo.js');
                }
                load();
            </script>
            ${story}
        </div>
    `)
    ),
];
*/
//---------------------------------------------------------------
// Storybook Paramaters

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
        elementPath         : { table: { disable: true } },
        iframeUrl           : { table: { disable: true } },
        props               : { table: { disable: true } },
        ngClasses           : { table: { disable: true } },
        computetNgClasses   : { table: { disable: true } },
        ngOnInit            : { table: { disable: true } },
        ngOnChanges         : { table: { disable: true } },
    },

    actions: { argTypesRegex: "^on[A-Z].*" }
});