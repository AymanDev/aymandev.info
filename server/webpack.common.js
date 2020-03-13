const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader'],
                exclude: '/node_modules',
            },
        ],
    },
};
