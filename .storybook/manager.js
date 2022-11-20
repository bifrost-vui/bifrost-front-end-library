import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  showRoots: true,
  theme: create({
    base: 'light',
    brandTitle: 'Bifröst',
    // brandUrl: 'https://zeroheight.com/79f1d3365/p/96b52b-vidotron---systme-de-design',
    brandImage: '/logo/bifrost-logo.png',
  })
});