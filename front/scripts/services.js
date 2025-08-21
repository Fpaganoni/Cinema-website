const renderFilms = require("./modules/renderFilms");

const backURL = process.env.NEXT_PUBLIC_BASE_URL;

// Use AXIOS and Promises or Asynch/Await Functions to Make API Calls and Handle Errors

const axios = require("axios");

export const fetchMovies = async () => {
  try {
    const data = await axios.get(`${backURL}/movies`);
    renderFilms(data.data);
  } catch (error) {
    alert(
      "Ha ocurrido un error al cargar las peliculas, porfavor vuelva a intentarlo mas tarde"
    );
  }
};

export const postNewMovie = async (movieData) => {
  // pass the movieData object with axios to the DB
  try {
    return await axios.post(`${backURL}/movies`, movieData);
  } catch (error) {
    alert("There was an error adding the movie");
  }
};
