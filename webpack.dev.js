const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    compress: true,
    ...(!process.env.WEBPACK_SERVE && {
      devtool: "eval-cheap-module-source-ma",
    }),
    hot: true,
    port: 4000,
    static: false,
    client: {
      logging: "none",
    },
    static: false,
  },
});
