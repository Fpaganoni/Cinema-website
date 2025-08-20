const Dotenv = require("dotenv-webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./scripts/index.js",

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  rules: [
    {
      test: /\.css$/, // Expresión regular para archivos .css
      use: ["style-loader", "css-loader"], // Usa estos loaders
    },
  ],
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, ".env"), // Asegura que apunta a tu archivo .env
    }),
    new HtmlWebpackPlugin({
      template: "./index.html", // Ruta a tu archivo index.html original
      filename: "index.html", // Nombre del archivo de salida
    }),
    // Plugin para createMovie.html
    new HtmlWebpackPlugin({
      template: "./createMovie.html",
      filename: "createMovie.html",
    }),
    // Plugin para historyCinema.html
    new HtmlWebpackPlugin({
      template: "./historyCinema.html",
      filename: "historyCinema.html",
    }),
  ],
};
