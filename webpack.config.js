const path                  = require('path')
const webpack               = require('webpack')
const globImporter          = require('node-sass-glob-importer');
const ExtractTextPlugin     = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

const devMode               = process.env.NODE_ENV !== 'production';


module.exports = (env) => {
    return [{
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
                /*chunks(chunk) {
                    return chunk.name !== 'bifrost-components';
                },*/
              chunks: 'async',
              minSize: 20000,
              minRemainingSize: 0,
              minChunks: 1,
              maxAsyncRequests: 30,
              maxInitialRequests: 30,
              enforceSizeThreshold: 50000,
              cacheGroups: {
                defaultVendors: {
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10,
                  reuseExistingChunk: true,
                },
                default: {
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true,
                },
              },

            },
        },
        resolve: {
            extensions: ['.js', '.scss'],
            alias: {
                'pickerdate': 'pickadate/lib/picker.date'
            },
        },
        plugins: [
            require('autoprefixer'),
            require('postcss-color-rebeccapurple'),

            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '../css/bifrost.css' : '../css/bifrost.[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: [{loader:'babel-loader'}]
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
        }
    }]
}
