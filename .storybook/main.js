
const path      = require('path');
// const custom    = require('../webpack.config.js');

module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
        '@storybook/addon-links',
        'storybook-addon-designs',
    ],
    // webpackFinal: (config) => {
    //     return { ...config, module: { ...config.module, rules: custom.module.rules } };
    // },
};
