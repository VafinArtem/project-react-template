const path = require('path');
const getCSSModuleLocalIdent = require("./getLocalIdent");

const cssRegex = /\.css$/
const cssModuleRegex = /\.module\.css$/
const sassRegex = /\.(scss|sass)$/
const sassModuleRegex = /\.module\.(scss|sass)$/

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: sassRegex,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							esModule: true,
							sourceMap: true,
							importLoaders: 1,
							modules: {
								namedExport: true,
								localIdentName: "[name]__[local]--[hash:base64:5]",
								getLocalIdent: getCSSModuleLocalIdent
							}
						}
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										"autoprefixer",
									],
								],
							},
						},
					},
					{
						loader: "sass-loader"
					}
				],
				include: sassModuleRegex
			},
			{
				test: cssRegex,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							esModule: true,
							sourceMap: true,
							importLoaders: 1,
							modules: {
								namedExport: true,
								localIdentName: "[name]__[local]--[hash:base64:5]",
								getLocalIdent:getCSSModuleLocalIdent
							}
						}
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-preset-env",
										"autoprefixer",
									],
								],
							},
						},
					}
				],
				include: cssModuleRegex
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			"@app": path.resolve(__dirname, "src/app"),
			"@entities": path.resolve(__dirname, "src/entities"),
			"@features": path.resolve(__dirname, "src/features"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@processes": path.resolve(__dirname, "src/processes"),
			"@shared": path.resolve(__dirname, "src/shared"),
			"@widgets": path.resolve(__dirname, "src/widgets"),
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
