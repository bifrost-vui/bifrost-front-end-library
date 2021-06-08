import React from 'react';
import { configure } from '@storybook/html';
import { addParameters, componentWrapperDecorator } from '@storybook/angular';
import { prepareForInline } from '@storybook/addon-docs/angular';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
// Add the filters to Twig instance.

Twig.extendFilter('format_price', function(price, options) {
    
    const language = (options && options[0]) || 'en';
    if (language === 'fr') {
        return price + ' $';
    } else {
        return '$' + price;
    }
});

// Twig.twig({
//     namespaces: {
//         '@components' : 'projects/front-end-library/src/lib/components'
//     }
// });

twigDrupal(Twig);

// configure(require.context('../projects', true, /\.stories\.ts$/), module);

export const decorators = [
  componentWrapperDecorator((story) => `<div style="margin: 3em">lala${story}</div>`),
];

addParameters({
    // Docs
    docs: {
        inlineStories: true,
        prepareForInline: function prepareForInline(storyFn) {
            var html = storyFn();

            console.log('----Twig', Twig);

            if (typeof html.template === 'string') {
                // eslint-disable-next-line react/no-danger
                return /*#__PURE__*/React.createElement("div", {
                dangerouslySetInnerHTML: {
                    __html: html.template
                }
                });
            }
            
            return /*#__PURE__*/React.createElement("div", {
                ref: function ref(node) {
                return node ? node.appendChild(html) : null;
                }
            });
        }
    }
});

// import { addParameters, addDecorator } from '@storybook/angular';
// import { prepareForInline } from '@storybook/addon-docs/angular';
// import { setCompodocJson } from '@storybook/addon-docs/angular';

// // @ts-ignore
// // eslint-disable-next-line import/extensions, import/no-unresolved
// import docJson from '../documentation.json';

// setCompodocJson(docJson);

// addParameters({
//     // Docs
//     docs: {
//         inlineStories: true,
//         prepareForInline,
//         // prepareForInline: (storyFn, { args }) => {
//         //     const Story = toReact(storyFn());
//         //     return <Story {...args} />;
//         // },
//         // iframeHeight: '100px',
//     },
//     layout: 'centered',

//     // Backgrounds
//     backgrounds: {
//       default: 'Ground',
//       values: [
//         { name: 'Ground', value: '#fff' },
//         { name: 'Underground', value: '#f2f2f0' },
//         { name: 'Ground Reversed', value: '#050504' },
//         { name: 'Underground Reversed', value: '#2a2a27' },
//       ],
//     },

//     // Controls
//     controls: { 
//         expanded: true, 
//         hideNoControlsWarning: true
//     },
//     argTypes: {
//         elementPath     : { table: { disable: true } },
//         iframeUrl       : { table: { disable: true } },
//         props           : { table: { disable: true } },
//     },
    
//     // // Hide addons
//     // storySource: { disable: true },
//     // knobs: { disable: true },
//     // actions: { disable: true },
//     // design: { disable: true },
//     // 'design-assets': { disable: true },
// });
