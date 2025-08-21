const axios = require("axios");
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

const form = document.getElementById("form-add-movie");

const createMovie = async (movieData) => {
  try {
    await axios.post(`${baseUrl}/movies`, movieData);
    alert("La película se ha añadido correctamente.");
  } catch (error) {
    throw new Error("Error al añadir la película: " + error.message);
  }
};

const handlerSubmit = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  const title = formData.get("title");
  const director = formData.get("director");
  const year = formData.get("year");
  const duration = formData.get("duration");
  const rate = formData.get("rate");
  const poster = formData.get("poster");

  const genre = [];

  const genreCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  genreCheckboxes.forEach((checkbox) => {
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    if (label) {
      genre.push(label.textContent.trim());
    }
  });

  if (title === "") {
    alert("El título no puede estar vacío.");
    return;
  }

  if (director === "") {
    alert("El director no puede estar vacío.");
    return;
  }

  if (
    year === "" ||
    isNaN(year) ||
    parseInt(year) <= 1900 ||
    parseInt(year) > 2025
  ) {
    alert("El año debe ser un número válido mayor que 1900 y menor que 2025.");
    return;
  }

  const durationRegex = /^\d+h(\s\d+min)?$/;
  if (duration === "" || !durationRegex.test(duration)) {
    alert(
      "La pelicula tiene que tener una duracion en el formato '2h 30min' o '2h'."
    );
    return;
  }

  if (
    rate === "" ||
    isNaN(rate) ||
    parseFloat(rate) < 1 ||
    parseFloat(rate) > 10
  ) {
    alert("La calificación debe ser un número entre 1 y 10.");
    return;
  }

  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

  if (poster === "" || !urlRegex.test(poster)) {
    alert("La pelicula tiene que tener una URL válida.");
    return;
  }

  if (genre.length === 0) {
    return alert("debes seleccionar al menos un genero.");
  }

  const movieData = {
    title,
    year,
    director,
    duration,
    rate: parseFloat(rate),
    poster,
    genre,
  };

  createMovie(movieData);
  form.reset();
};

const formReset = (event) => {
  event.preventDefault();

  const confirmacion = confirm(
    "¿Estás seguro de que quieres limpiar el formulario?"
  );
  if (confirmacion) form.reset();
};

if (form) {
  form.addEventListener("submit", handlerSubmit);

  const resetButton = document.getElementById("cleanForm");

  resetButton.addEventListener("click", formReset());
}
