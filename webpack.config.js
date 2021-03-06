let webpack=require('webpack');
module.exports = {
	entry:		 {
		index: './app/src/index-react.js',
		add: './app/src/add-react.js'
	},
	output: {
		path: __dirname + '/app/public/js',
		filename: '[name]-build.js',
		publicPath: "js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query:{
								"presets":["react", "env"]
						}
			}
		]
	}
};
