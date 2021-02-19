const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge( common, {
    mode : "production",
    
    output : {
        filename : "[name].main.[contenthash].js",
        path : path.resolve(__dirname, "build")
    },

    plugins : [new MiniCssExtractPlugin({filename : "[name].[contenthash].css"})],

    module : {
        rules : [
            {
                test : /\.css$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }

});