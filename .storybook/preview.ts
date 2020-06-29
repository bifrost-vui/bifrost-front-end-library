import { addParameters, addDecorator } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';

// @ts-ignore
// eslint-disable-next-line import/extensions, import/no-unresolved
import docJson from '../documentation.json';

setCompodocJson(docJson);

addParameters({
  docs: {
    // inlineStories: true,
    iframeHeight: '60px',
  },
});
