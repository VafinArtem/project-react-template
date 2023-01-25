const path = require('path');
const svgLoader = require("./wp-config/svg-loader");
const tsLoader = require("./wp-config/ts-loader");
const styleLoader = require("./wp-config/style-loader");

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
			tsLoader,
			svgLoader,
			styleLoader.sassModules,
			styleLoader.sassDefault,
			styleLoader.cssModules,
			styleLoader.cssDefault
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
