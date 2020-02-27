const MiniCssExtractPlugin = require('mini-css-extract');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        historyApiFallback: true,
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
};
