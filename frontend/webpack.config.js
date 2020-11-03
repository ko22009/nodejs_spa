const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin, ProvidePlugin } = require('webpack')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                        loader: 'file-loader'
                    }]
            }
        ]
    },
    resolve: {
        alias: {
            '~app': path.resolve(__dirname, "src/"),
            '~common': path.resolve(__dirname, "../common/")
        },
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
        new DefinePlugin({
            process: {
                env: JSON.stringify(require('dotenv').config().parsed)
            }
        }),
        new ProvidePlugin({
            webix: 'webix'
        }),
    ],
}
