const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  devtool: "source-map",
};
