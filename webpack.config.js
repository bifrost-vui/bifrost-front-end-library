const path                  = require('path');
const globImporter          = require('node-sass-glob-importer');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const devMode               = process.env.NODE_ENV !== 'production';


module.exports = () => {
    return [{
        //devtool: "cheap-source-map",
        entry: {
            'bifrost-components': './projects/front-end-library/src/lib/js/bifrost-components.js',
            'bifrost-demo'      : './projects/front-end-library/src/lib/js/demo/bifrost/carousel.js',
            core                : './projects/front-end-library/src/lib/js/index.js'
        },
        output: {
            path: path.join(__dirname, 'public/js'),
            filename: '[name].js',
            publicPath: '/public/'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors~bifrost-components',
                        chunks: 'all',
                    },
                }
            },
        },
        resolve: {
            extensions: ['.js', '.scss'],
            alias: {
                'pickerdate': 'pickadate/lib/picker.date'
            },
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '../css/bifrost.css' : '../css/bifrost.[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
        ],
        module: {
            rules: [
                /** {
                    test: /\.twig$/,
                    loader: 'twig-loader-x',
                    options: {
                        namespaces: {
                            '@bf-components': path.resolve(__dirname, '/', 'projects/front-end-library/src/lib/components'),
                            '@bf-utils'     : path.resolve(__dirname, '/', 'projects/front-end-library/src/lib/utils')
                        }
                    }
                },*/
                {
                    test: /\.js$/,
                    loader:'babel-loader'
                },
                {
                    test: /\.(png|woff|jpg|woff2|eot|ttf|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                              limit: 1000
                            }
                        }
                    ]
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
                                importLoaders: 1
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions : {
                                    importer: globImporter()
                                }
                            }
                        }
                    ],
                },
            ]
        },
        node: {
            global: 'warn'
        }
    }]
}