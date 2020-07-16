const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    mode: 'production',
   devtool : 'source-map',
   entry :'./src/index.jsx',
   output : {
	filename: 'main.js',
	path : path.resolve(__dirname, 'dist')
    },



performance: { hints: false,
 maxEntrypointSize: 1000000,
 maxAssetSize: 1000000
},






    resolve: {
		extensions: [ '.js', '.jsx', 'png','css' ]
	},
	module: {

		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {compact: false}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {compact: false},
				exclude:path.resolve(__dirname, "node_modules")
	
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|jpg||svg)(\?[a-z0-9=.]+)?$/,
				loader: 'url-loader?limit=10000000000'
			}
		]
	},
    plugins: [new HtmlWebpackPlugin({
	filename : 'index.html',
	inject : true,
        template: path.resolve(__dirname, 'src' , 'index.html')
    }),
	new  CopyWebpackPlugin({
	patterns :[
	{from :'./src/ttech.png'}]
	}),
	new  CleanWebpackPlugin()
]
,

    devServer: {
        historyApiFallback: true,
        port: 9000
    },
    externals: {
        // global app config object
	    
        config: JSON.stringify({
            apiUrl: '/api'
        })
    }
}
