// const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    //development,production

    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: '[name].bundle.min.js'
    // }
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [miniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [new miniCssExtractPlugin()]
};
