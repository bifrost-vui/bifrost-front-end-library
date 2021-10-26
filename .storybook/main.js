module.exports = {
    stories: ['../projects/front-end-library/**/*.stories.@(ts|js|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        'storybook-addon-designs',
        '@storybook/addon-docs',
        '@storybook/angular',
    ],
  core: {
    builder: 'webpack5',
  },
};
