const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const babelConfig = require('./babel.config.dev')
const postcssConfig = require('./postcss.config.dev')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'static/js/[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    stats: 'none',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /-worker\.js$/,
            include: path.resolve(__dirname, '../src'),
            use: [{ loader: 'babel-loader', options: { ...babelConfig, cacheDirectory: true, } }]
        }, {
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }, {
            test: /\.(jpg|png|svg)$/,
            use: [{ loader: 'file-loader', options: { name: 'static/media/[name].[hash:8].[ext]' } }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../public/index.html'),
            chunksSortMode: (chunk1, chunk2) => {
                const list = ['polyfills', 'vendor', 'app']
                var index1 = list.indexOf(chunk1.names[0])
                var index2 = list.indexOf(chunk2.names[0])
                if (index2 === -1 || index1 < index2) return -1
                if (index1 === -1 || index1 > index2) return 1
                return 0
            }
        })
    ],
    devtool: 'cheap-module-source-map'
}
