// controller de get movies, aca vamos a crear la funcion
// Ruta para obtener peliculas
const { postMovie, getMovies } = require("../services/moviesService");

/** SE RELALIZA LA LLAMADA, PERO NO LLEGAN LOS DATOS(PELICULAS)  */

module.exports = {
  getMoviesController: async (req, res) => {
    try {
      const movies = await getMovies();
      res.status(200).json(movies);

      if (!movies || movies.length === 0) {
        return res.status(404).json({
          status: 404,
          message: "No movies found",
        });
      }

      return movies;
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  },

  createMovieController: async (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;

      const newMovie = {
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster,
      };

      await postMovie(newMovie);
      res.status(201).json({
        status: 201,
        message: "Movie created successfully",
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        error: error.message,
      });
    }
  },
};
