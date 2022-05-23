module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        'storybook-addon-designs',
        '@storybook/addon-postcss',
        {
            name: '@storybook/addon-postcss',
              options: {
               postcssLoaderOptions: {
                  implementation: require('postcss'),
             },
          },
        },
        'storycap'
    ],
  core: {
    builder: 'webpack5',
  },
};
