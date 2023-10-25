const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const tersarWebpackPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new tersarWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [new CSSMinimizerPlugin()],
});
