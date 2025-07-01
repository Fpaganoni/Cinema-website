const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validateMovieData = require("../middlewares/validateMovieData");

const moviesRouter = Router();

// moviesRouter se encargara de guiar todas las peticiones CRUD relacionadas con las movies.
moviesRouter.get("/movies", moviesController.getMoviesController);

// VALIDATE DATA ES EL MIDDLWARE QUE VALIDA LOS DATOS ANTES DE ENVIARLOS A LA BD
moviesRouter.post(
  "/movies",
  validateMovieData,
  moviesController.createMovieController
);

module.exports = moviesRouter;
