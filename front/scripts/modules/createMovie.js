const createMovie = (movie) => {
  const { poster, title, director, year, genre, duration, rate } = movie;

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  // create movie card
  cardContainer.innerHTML = `
      <img class="img-films " src=${poster} alt="${title}">
      <div class="d-flex align-items-center justify-content-center flex-column gap-3 info-film-container">
        <h4 class="title-film mb-4">${title}</h4>
        <h5 class="director-film">Director: ${director}</h5>
        <p class="other-info-films">Year: ${year}</p>
        <p class="other-info-films">${genre.join(", ")}</p>
        <p class="other-info-films">Duration: ${duration}</p>
        <p class="other-info-films">Rate: ${rate}</p>
        <button class="play-button">
          <i class="fas fa-play"></i> Reproducir
        </button>
      </div>
    `;

  return cardContainer;
};

module.exports = createMovie;
