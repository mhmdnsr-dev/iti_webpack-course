const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtratePlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [MiniCssExtratePlugin.loader, "css-loader", "sass-loader"],
      },

      // old ways to handel assets
      //   1) resolves a file into a url and emits the file into the output directory.
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: ["file-loader"],
      // },

      //  2) A loader for webpack which transforms files into base64 URIs.
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: ["url-loader"],
      // },

      // 3) A loader for webpack that allows importing files as a String
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: ["raw-loader"],
      // },

      // Modern ways to handel assets
      //  1) emits a separate file and exports the URL. Previously achievable by using file-loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },

      //  2)  exports a data URI of the asset. Previously achievable by using url-loader
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/inline",
      // },

      //  3)
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/source",
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      template: "./index.html",
    }),
    new MiniCssExtratePlugin({
      filename: "assets/style/main.css",
    }),
  ],
};
