const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            chunksSortMode: 'auto',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ],
    output: {
        filename: '[name].bundle.js?v=[hash:6]',
        path: path.resolve(__dirname, '/build'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['ts-loader', 'stylelint-custom-processor-loader'],
                exclude: '/node_modules',
            },
            {
                test: /\.(png|jpg|woff|woff2|ico)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
        ],
    },
};
