const mongoose = require("mongoose");
require("dotenv").config();

//Crear funcion para llamar a la base de datoscon mongoose
const DBconect = async () => {
  try {
    await mongoose.connect(process.env.DBMovies);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    throw error; // Rethrow the error to be handled in the application
  }
};

module.exports = DBconect;
