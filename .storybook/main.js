module.exports = {
  stories: ['../projects/front-end-library/**/*.stories.@(ts|mdx)'],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    // '@storybook/addon-design-assets',
    // '@storybook/addon-knobs',
    '@storybook/addon-links',
    // '@storybook/addon-storysource',
    'storybook-addon-designs',
  ],
};
