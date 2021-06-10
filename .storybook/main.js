
const path      = require('path');
// const custom    = require('../webpack.config.js');

module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    // webpackFinal: (config) => {
    //     return { ...config, module: { ...config.module, rules: custom.module.rules } };
    // },
};
