const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: "[name].bundle.js?v=[hash:6]",
    path: path.resolve(__dirname, "/build")
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: "ts-loader"
      }
    ]
  }
};
