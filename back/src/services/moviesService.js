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
  // Servicio para obtener peliculas de la base de datos
  getMovies: async () => {
    try {
      // console.log("Fetching movies from the database...");
      const movies = await Movie.find();
      // console.log("Movies fetched:", movies);

      return convertToMovie(movies);
    } catch (error) {
      throw new Error(`Error fetching movies: ${error.message}`);
    }
  },

  // Servicio para crear una nueva pelicula
  postMovie: async (movie) => {
    try {
      const newMovie = new Movie(movie); // se crea una nueva instancia de la clase Movie
      await newMovie.save(); // se guarda la nueva pelicula en la base de datos

      console.log("Movie post:", newMovie);
    } catch (error) {
      throw new Error(`Error creating movie: ${error.message}`);
    }
  },
};
