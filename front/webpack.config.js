const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");

module.exports = {
  // El punto de entrada principal de tu aplicación, donde se importan otros archivos.
  entry: "./scripts/index.js",

  // Configuración de la salida. Aquí es donde Webpack creará los archivos 'bundleados'.
  output: {
    // El directorio de salida debe ser `front/public`
    path: path.resolve(__dirname, "public"),
    // El nombre del archivo principal. [contenthash] asegura que el navegador no lo cachee.
    filename: "bundle.[contenthash].js",
    // Limpia la carpeta de salida antes de cada build.
    clean: true,
  },

  // Reglas para procesar diferentes tipos de archivos
  module: {
    rules: [
      {
        // Esta regla procesa los archivos .css
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // Esta regla procesa los archivos de imagen.
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          // Mantén los nombres de archivo originales para las imágenes.
          filename: "assets/images/[name][ext]",
        },
      },
      {
        // Esta regla procesa los archivos de fuentes.
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    // Plugin para cargar las variables de entorno desde .env
    new Dotenv({
      path: path.resolve(__dirname, "..", ".env"),
    }),

    // Plugin para definir NEXT_PUBLIC_BASE_URL
    new webpack.DefinePlugin({
      "process.env.NEXT_PUBLIC_BASE_URL": JSON.stringify(
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      ),
    }),

    // Plugin para generar el archivo index.html.
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),

    // Plugin para el HTML de createMovie.html.
    new HtmlWebpackPlugin({
      template: "./createMovie.html",
      filename: "createMovie.html",
    }),

    // Plugin para el HTML de historyCinema.html.
    new HtmlWebpackPlugin({
      template: "./historyCinema.html",
      filename: "historyCinema.html",
    }),
  ],
};
