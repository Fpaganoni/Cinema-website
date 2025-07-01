const renderFilms = require("./modules/renderFilms");

// USAR AXIOS Y PROMESAS O FUNCIONES ASTNC/AWAIT PARA HACER LA LLAMADA A LA API Y MANEJAR ERRORES

const axios = require("axios");

export const fetchMovies = async () => {
  try {
    const data = await axios.get("http://localhost:3000/movies");
    renderFilms(data.data);
  } catch (error) {
    alert(
      "Ha ocurrido un error al cargar las peliculas, porfavor vuelva a intentarlo mas tarde"
    );
  }
};

export const postNewMovie = async (movieData) => {
  // pasare el objeto movieData con axios a la DB
  try {
    return await axios.post("http://localhost:3000/movies", movieData);
  } catch (error) {
    console.error("Error adding movie:", error);
    alert("There was an error adding the movie");
  }
};
