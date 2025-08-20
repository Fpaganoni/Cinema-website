const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./scripts/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, ".env"), // Asegura que apunta a tu archivo .env
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // Ruta a tu archivo index.html original
      filename: "index.html", // Nombre del archivo de salida
    }),
  ],
};
