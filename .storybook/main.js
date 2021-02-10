
const path      = require('path');
// const custom    = require('../webpack.config.js');

module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts|mdx)'],
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


// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.twig$/,
        use: [
        {
            loader: 'twig-loader',
            options: {
            twigOptions: {
            },
            },
        },
        ],
    });

    // Return the altered config
    return config;
  },
};