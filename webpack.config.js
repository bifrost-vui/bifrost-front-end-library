const { resolve } = require("path");

// To continue using node-sass-glob-importer, we need to use sass-loader@7.X.X:
// See issue: https://github.com/material-components/material-components-web/issues/5135
const SassGlobImporter = require('node-sass-glob-importer');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    'uikit-marvel': resolve(__dirname, "projects/front-end-library/src/lib/js/index.js"),
    'uikit-marvel-livechat': resolve(__dirname, "projects/front-end-library/src/lib/js/widgets/genesys-live-chat/styles.js"),
    // 'uikit-marvel-demo-etiya': resolve(__dirname, "projects/front-end-library/src/lib/js/demo/etiya/index.js"),
  },
  output: {
    path: resolve(__dirname, "public/js/"),
    filename: "[name].js",
  },

  devtool: devMode ? 'source-map' : false,
  
  watch: true,

  resolve: {
    extensions: ['.js', '.scss']
  },

  resolve: {
    alias: {
      'pickerdate': 'pickadate/lib/picker.date'
    }
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          ecma: 5,
        },
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    })
  ],

  module: {
    rules: [
      // Javascript configuration
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // Sass configuration
      {
        test: /\.(png|woff|jpg|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: (loader) => [
                // eslint-disable-line no-unused-vars
                require("autoprefixer")({
                //   'browsers': ['> 1%', 'last 10 versions']
                }),
                require("postcss-flexbugs-fixes"),
                require('cssnano')()
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ["styles/"],
              importer: SassGlobImporter()
            }
          }
        ],
      }
    ]
  }
};