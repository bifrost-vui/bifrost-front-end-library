import { addParameters, addDecorator } from '@storybook/angular';
import { prepareForInline } from '@storybook/addon-docs/angular/inline';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { configure } from '@storybook/html';

import Twig from 'twig';
// import twigDrupal from 'twig-drupal-filters';
// twigDrupal(Twig);

configure(require.context('../projects/front-end-library', true, /\.stories\.ts$/), module);

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

// Import global SCSS styles.
// Warning: For Angular only! Because Drupal components are served in an iFrame with `style-drupal.css` imported.
// import '!babel-loader!url-loader!style-loader!css-loader!resolve-url-loader!postcss-loader!sass-loader!../projects/front-end-library/src/lib/styles/scss/style.scss';
// import '../public/styles/test.css';
// import '!babel-loader!style-loader!css-loader!resolve-url-loader!postcss-loader!sass-loader!../projects/front-end-library/src/lib/styles/scss/style.scss';

// import '../projects/front-end-library/src/lib/scss/style.scss';


setCompodocJson(docJson);

addParameters({
    // Docs
    docs: {
        // inlineStories: true,
        // prepareForInline,
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
        elementPath: { table: { disable: true } },
        iframeUrl: { table: { disable: true } },
        props: { table: { disable: true } },
        ngOnInit: { table: { disable: true } },
        ngDoCheck: { table: { disable: true } },
        ngOnChanges: { table: { disable: true } },
        updateIframeUrl: { table: { disable: true } },
    },
    
    // // Hide addons
    // storySource: { disable: true },
    // knobs: { disable: true },
    // actions: { disable: true },
    // design: { disable: true },
    // 'design-assets': { disable: true },
});