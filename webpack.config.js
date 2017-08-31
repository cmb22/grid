const webpack = require("webpack");
const path = require("path");
const ExtractPlugin = require('extract-text-webpack-plugin');
const EXP =  new ExtractPlugin({
    filename: 'main.css'
});

const DEV = path.resolve(__dirname, 'dev');
const OUTPUT = path.resolve(__dirname, 'output');

module.exports = {
    entry: DEV + '/js/app.js',
    output: {
        path: OUTPUT,
        filename: "bundle.js",
        publicPath: "/output/"
    },

    module: {
        rules: [
            {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ['react','es2015']
                }
            }]
        },
            {
                test:  /\.scss$/,
                use: EXP.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'file-loader'
            }

        ]
    },
    plugins: [
        EXP
    ]
};


