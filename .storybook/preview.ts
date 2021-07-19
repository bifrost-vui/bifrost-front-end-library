import { addParameters, addDecorator, componentWrapperDecorator } from '@storybook/angular';
import { setCompodocJson, prepareForInline } from '@storybook/addon-docs/angular';

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

const path = require('path');

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

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

//---------------------------------------------------------------
// Storybook Decorators

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
        ngOnInit        : { table: { disable: true } },
        ngOnChanges     : { table: { disable: true } },
    },
});
