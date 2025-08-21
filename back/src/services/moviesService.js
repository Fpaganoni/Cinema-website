// Traer al model Movie hecho con el Schema mongoose
const Movie = require("../models/Movie");

class MovieClass {
  constructor({ title, year, director, duration, genre, rate, poster }) {
    if (!title || !poster || !director) {
      throw Error(
        "Title, poster o director no estan siendo recibidas adecuandamente."
      );
    }

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}

const convertToMovie = (movies) => {
  return movies.map((item) => {
    return new MovieClass(item); // Return the postd instance
  });
};

module.exports = {
  // Service to get movies from DB
  getMovies: async () => {
    try {
      const movies = await Movie.find();

      return convertToMovie(movies);
    } catch (error) {
      throw new Error(`Error fetching movies: ${error.message}`);
    }
  },

  // Service to create the movie
  postMovie: async (movie) => {
    try {
      const newMovie = new Movie(movie); // Create new instance of Movie with the provided data
      await newMovie.save(); // Save the new movie to the database
    } catch (error) {
      throw new Error(`Error creating movie: ${error.message}`);
    }
  },
};
