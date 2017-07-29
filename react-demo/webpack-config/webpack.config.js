var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: "source-map",
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/build/",
		filename: "bundle.js",
	},
	devServer: {
		contentBase: './public',
		port: 9000,
		inline: true,
		historyApiFallback: true,
		hot: true
	},
	module: {
		loaders: [{
			test: /\.json$/,
			loader: "json-loader",
		}, {
			test: /\.js$/,
			loader: "babel-loader",
			exclude: "/node_modules/",
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
	        fallback: "style-loader",
	        use: "css-loader?postcss-loader"
	    })
		}, {
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
	        fallback: "style-loader",
	        use: "css-loader?sass-loader!postcss-loader"
	    })
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html" //new一个插件的实例，并传入相关的参数
		}),
		new webpack.HotModuleReplacementPlugin(), //热加载插件
		new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("style.css")
	]
}