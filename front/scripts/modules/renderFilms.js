const createMovie = require("./createMovie");

const renderFilms = (data) => {
  const containerFilms = document.getElementById("rootFilms");

  if (!containerFilms) {
    return;
  }

  // We use a fragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();

  data.forEach((movie) => {
    const movieCreated = createMovie(movie);
    fragment.appendChild(movieCreated);
  });

  // Finally we add the fragment to the container
  containerFilms.appendChild(fragment);
};

module.exports = renderFilms;
