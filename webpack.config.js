const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './source/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'My App',
    template: 'source/index.html'
	})],
	devServer: {
		 contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'postcss-loader'
				]
			}
		]
	}
};