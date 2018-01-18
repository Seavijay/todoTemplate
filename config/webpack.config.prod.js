const CompressionPlugin = require('compression-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const postcssConfig = require('./postcss.config.prod')
const babelConfig = require('./babel.config.prod')
const path = require('path')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, '../src'),
            use: [{ loader: 'babel-loader', options: { ...babelConfig, cacheDirectory: true, } }]
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{ loader: 'css-loader' }]
            })
        }, {
            test: /\.(jpg|png|svg)$/,
            use: [{ loader: 'file-loader', options: { name: 'static/media/[name].[hash:8].[ext]' } }]
        }]
    },
    plugins: [
        new MinifyPlugin({}, { comments: false }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: true,
            minChunks: 3,
        }),
        new ExtractTextPlugin({
            filename: 'static/css/[name].[hash:8].css'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, '../public/index'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            chunksSortMode: (chunk1, chunk2) => {
                const list = ['polyfills', 'vendor', 'app']
                var index1 = list.indexOf(chunk1.names[0])
                var index2 = list.indexOf(chunk2.names[0])
                if (index2 === -1 || index1 < index2) return -1
                if (index1 === -1 || index1 > index2) return 1
                return 0
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz',
            algorithm: 'gzip',
            test: /\.js$|\.html|\.css$/,
            minRatio: 0.8
        })
    ]
}
