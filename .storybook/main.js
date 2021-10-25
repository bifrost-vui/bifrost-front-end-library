const path      = require('path');
// const custom    = require('../webpack.config.js');

module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        'storybook-addon-designs',
    ],
  core: {
    builder: 'webpack5',
  },
    // webpackFinal: (config) => {
    //     return { ...config, module: { ...config.module, rules: custom.module.rules } };
    // },
};
