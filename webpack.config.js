const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // starting point
  output: {
    path: path.resolve(__dirname, "dist"), // output folder
    filename: "bundle.js",                 // bundle name
    clean: true                            // clears old files in dist
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,         // support for .js and .jsx
        exclude: /node_modules/,
        use: "babel-loader",         // transpile React & JS
      },
      {
        test: /\.css$/i,             // support for .css files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,     // <-- THIS IS REQUIRED
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],     // so you can import without file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",  // your custom HTML
      inject: "body",                   // injects <script> at bottom
    }),
  ],
  devServer: {
    static: "./dist",         // serve from dist folder
    port: 3000,               // local URL: http://localhost:3000
    open: true,               // auto-opens browser
  },
};