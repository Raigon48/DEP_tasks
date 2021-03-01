const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    entry : ["@babel/polyfill", "whatwg-fetch", "./src/index.js"],

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    },

    plugins : [
        new HtmlWebpackPlugin(
        {
            template : './src/template.html'
        }
    )
    ],

    target : ['web', 'es5']

}