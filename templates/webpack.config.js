var webpack = require("webpack");

module.exports = {
    entry: {
        'app': './src/js/app.js'
    },
    output: {
        path: '/dist/js/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
};