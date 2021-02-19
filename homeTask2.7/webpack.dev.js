const path = require('path');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge( common, {
    mode : "development",
    devServer : {
        contentBase : './build',
        port : 4000
    },
    
    output : {
        filename : "[name].main.js",
        path : path.resolve(__dirname, "build")
    },

    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader" , "css-loader"]
            }
        ]
    }

});