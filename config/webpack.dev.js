const base = require("./webpack.base");
const { merge } = require("webpack-merge");

const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: true,
    hot: true,
  },
};

module.exports = merge(base, devConfig);
