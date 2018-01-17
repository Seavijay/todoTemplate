const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App'
        }),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'

    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['babel-plugin-transform-object-rest-spread']
                    }
                }
            }
        ]
    }
}