const path = require('path');

module.exports = {

	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

	entry: ['./projects/front-end-library/src/lib/styles/scss/style.scss'],

	output: {
		path: path.resolve(__dirname, 'public/styles'),
		filename: 'style.js',
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	}
};