const createMovie = require("./createMovie");

const renderFilms = (data) => {
  const containerFilms = document.getElementById("rootFilms");

  if (!containerFilms) {
    return;
  }

  // Usamos un fragmento para evitar reflows múltiples
  const fragment = document.createDocumentFragment();

  data.forEach((movie) => {
    const movieCreated = createMovie(movie);
    fragment.appendChild(movieCreated);
  });

  // Finalmente, agregamos el fragmento al DOM
  containerFilms.appendChild(fragment);
};

module.exports = renderFilms;
