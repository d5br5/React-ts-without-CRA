const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = (env, argv) => {
	const prod = argv.mode === "production";

	return {
		mode: prod ? "production" : "development",
		devtool: prod ? "hidden-source-map" : "eval",
		devServer: {
			port: 3001,
			hot: true,
			open: true,
			historyApiFallback: true,
		},
		entry: "./src/index.tsx",
		output: {
			path: path.join(__dirname, "/dist"),
			filename: "bundle.js",
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx"],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: ["babel-loader", "ts-loader"],
				},
			],
		},

		plugins: [
			new webpack.ProvidePlugin({
				React: "react",
			}),
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
			new webpack.HotModuleReplacementPlugin(),
		],
	};
};
