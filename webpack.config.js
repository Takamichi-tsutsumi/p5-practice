const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    experiment: "./src/experiment.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html", chunks: ["index"] }),
    new HtmlWebpackPlugin({
      filename: "experiment.html",
      template: "src/experiment.html",
      chunks: ["experiment"]
    })
  ]
};
