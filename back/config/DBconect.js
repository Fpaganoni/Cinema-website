const mongoose = require("mongoose");

// Create a function to call the database with Mongoose
const DBconect = async () => {
  try {
    await mongoose.connect(process.env.DBMovies);
  } catch (error) {
    throw error; // Rethrow the error to be handled in the application
  }
};

module.exports = DBconect;
