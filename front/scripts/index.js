import "../styles/reset.css";
import "../styles/style.css";
import "../styles/createMovie.css";
import "../styles/historyCinema.css";

require("./modules/form");

import { fetchMovies } from "./services";

fetchMovies();
