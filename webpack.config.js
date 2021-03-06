const HtmlWebPackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.css$/,
      //   loader: combineLoaders([
      //     {
      //       loader: "style-loader"
      //     },
      //     {
      //       loader: "css-loader",
      //       query: {
      //         modules: true,
      //         localIdentName: "[name]__[local]___[hash:base64:5]"
      //       }
      //     }
      //   ])
      // },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    // configuration options
    alias: {
      j: path.resolve(__dirname, "src/js"),
      c: path.resolve(__dirname, "src/c")
      // Templates: path.resolve(__dirname, "src/templates/")
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};