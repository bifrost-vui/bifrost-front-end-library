module.exports = {
    stories: ['../projects/front-end-library/src/lib/components/badge/**/*.stories.@(ts|mdx)'],
    logLevel: 'debug',
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@storybook/addon-links',
        'storybook-addon-designs',
    ],
};