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
                chunks(chunk) {
                    return chunk.name === 'bifrost-components';
                },
            },
        },
        resolve: {
            extensions: ['.js', '.scss'],
            alias: {
                'pickerdate': 'pickadate/lib/picker.date'
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: devMode ? '../css/bifrost.css' : '../css/bifrost.[hash].css',
                chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            })
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(png|woff|jpg|woff2|eot|ttf|svg)$/,
                    loader: 'url-loader?limit=100000'
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
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                    require('postcss-flexbugs-fixes'),
                                    // require('cssnano')()
                                ]
                            }
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