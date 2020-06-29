const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            //添加一个规则：
            // 从entry point出发，
            // 对依赖关系中，所有不在node_modules里面的js文件
            // 都利用babel-loader装载器来预处理
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
