var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
		extensions: [ '.js', '.jsx', 'png' ]
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
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
        template: './src/index.html'
    })],
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