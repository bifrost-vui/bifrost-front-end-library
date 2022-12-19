const path = require('path');
const globImporter = require('node-sass-glob-importer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = () => {
    return [
        {
            entry: {
                'bifrost-components': './projects/front-end-library/src/lib/js/bifrost-components.js',
                'bifrost-demo': './projects/front-end-library/src/lib/js/demo/bifrost/carousel.js',
                core: './projects/front-end-library/src/lib/js/index.js',
            },
            output: {
                path: path.join(__dirname, 'public/js'),
                filename: '[name].js',
                publicPath: '/public/',
            },
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        commons: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors~bifrost-components',
                            chunks: 'all',
                        },
                    },
                },
                minimize: true,
                minimizer: [
                    new HtmlMinimizerPlugin(),
                ]
            },
            resolve: {
                extensions: ['.js', '.scss'],
                alias: {
                    pickerdate: 'pickadate/lib/picker.date',
                },
            },
            plugins: [
                new MiniCssExtractPlugin({
                    // Options similar to the same options in webpackOptions.output
                    // both options are optional
                    filename: devMode ? '../css/bifrost.css' : '../css/bifrost.[hash].css',
                    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
                }),
                new HtmlWebpackPlugin({
                    // https://github.com/storybookjs/storybook/issues/17709
                    title: 'Bifröst',
                }),
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                    },
                    {
                        test: /\.(png|woff|jpg|woff2|eot|ttf|svg)$/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 1000,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.(scss|css)$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false,
                                    // modules: true,
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sassOptions: {
                                        importer: globImporter(),
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
    ];
};
