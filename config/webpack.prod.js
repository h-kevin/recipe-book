const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require("./webpack.base");
const { merge } = require("webpack-merge");

const prodConfig = {
  mode: "production",
  output: {
    filename: "app.[contenthash].js",
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
    ],
  },
};

module.exports = merge(base, prodConfig);
