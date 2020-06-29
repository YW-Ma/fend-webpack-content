const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/client/index.js",
    // 并没有这js，我要创建一个

    mode: "production",
    module: {
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "index.html"
        })
    ]
}

