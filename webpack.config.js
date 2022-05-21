const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        index: './src/index.js',
        // example: './src/example.js',
    },
    output: {
        filename: 'main.js',
        // filename: 'bundle.js',
        // filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: 'dropdownMenu',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNameDefine: true,
        // publicPath: '/',
    },
    // optimization: {
    //     runtimeChunk: 'single',
    // },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname),
            watch: true,
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ],
    },
}
