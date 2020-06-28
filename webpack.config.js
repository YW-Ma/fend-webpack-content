const path = require("path")
const webpack = require("webpack")
module.exports = {
    entry: "./src/client/index.js",
    // 并没有这js，我要创建一个

    module: {
        rules: [
                {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
                }
        ]
    }
}

