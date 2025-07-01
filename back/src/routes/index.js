// Aca se definen las rutas a las cuales se pueden comunicar
// Ej. get/users

const { Router } = require("express");
const { homeController } = require("../controllers/index");
// const moviesController = require("../controllers/moviesController");
const movieRouter = require("./moviesRouter");

const router = Router();

router.get("/", homeController);

// Cada CRUD que se realice en relacion a las peliculas, el ruter enviara a movie ruter donde se encuentran el ruter encargado de direccionar estas peticiones.
router.use("/", movieRouter);

module.exports = router;
