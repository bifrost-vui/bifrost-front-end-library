const { resolve } = require("path");
const SassGlobImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    'style': resolve(__dirname, "projects/front-end-library/src/lib/styles/scss/style.scss"),
  },
  output: {
    path: resolve(__dirname, "public/styles"),
    // filename: "style.css",
  },

  devtool: devMode ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.scss']
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
    //   filename: devMode ? '../css/[name].css' : '../css/[name].[hash].css',
    //   chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
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
                  'browsers': ['> 1%', 'last 10 versions']
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
            //   includePaths: ["styles/"],
            //   importer: SassGlobImporter()
            }
          }
        ],
      }
    ]
  }
};