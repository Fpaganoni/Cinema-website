const Dotenv = require("dotenv-webpack");
const path = require("path");

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
  ],
};
