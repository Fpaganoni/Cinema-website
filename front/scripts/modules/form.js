const axios = require("axios");

const form = document.getElementById("form-add-movie");

// if (!form) {
//   console.error("El formulario no se encontró en el DOM.");
//   return;
// }

const createMovie = async (movieData) => {
  // Hacer la solicitud POST con Axios
  try {
    await axios.post("http://localhost:3000/movies", movieData);
    alert("La película se ha añadido correctamente.");
  } catch (error) {
    console.error("Error adding movie:", error);
  }
};

const handlerSubmit = async (event) => {
  event.preventDefault();

  // La funcion FormData() permite crear un objeto FormData a partir de un formulario HTML.
  const formData = new FormData(event.target);

  //  Elementos llamados con el formData
  const title = formData.get("title");
  const director = formData.get("director");
  const year = formData.get("year");
  const duration = formData.get("duration");
  const rate = formData.get("rate");
  const poster = formData.get("poster");
  // Inicializa un array vacío para guardar los géneros seleccionados
  const genre = [];

  // Obtener todos los checkboxes que están seleccionados
  const genreCheckboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  // Iterar sobre todos los checkboxes seleccionados
  genreCheckboxes.forEach((checkbox) => {
    // Obtener el label correspondiente al checkbox utilizando el 'id' del checkbox
    const label = document.querySelector(`label[for="${checkbox.id}"]`);
    if (label) {
      genre.push(label.textContent.trim()); // Agregar el texto del label al array
    }
  });

  // Validación de 'title' (cadena no vacía)
  if (title === "") {
    alert("El título no puede estar vacío.");
    return; // Detener la ejecución si el error ocurre
  }

  // Validación de 'director' (cadena no vacía)
  if (director === "") {
    alert("El director no puede estar vacío.");
    return; // Detener la ejecución si el error ocurre
  }

  // Validación de 'year' (debe ser un número válido y mayor que 1900)
  if (
    year === "" ||
    isNaN(year) ||
    parseInt(year) <= 1900 ||
    parseInt(year) > 2025
  ) {
    alert("El año debe ser un número válido mayor que 1900 y menor que 2025.");
    return; // Detener la ejecución si el error ocurre
  }

  // Validación de 'duration' (debe ser un número válido mayor que 0)
  const durationRegex = /^\d+h(\s\d+min)?$/; // Expresión regular para validar el formato de duración
  if (duration === "" || !durationRegex.test(duration)) {
    alert(
      "La pelicula tiene que tener una duracion en el formato '2h 30min' o '2h'."
    );
    return; // Detener la ejecución si el error ocurre
  }

  // Validacion de rate (debe ser un número válido entre 1 y 10)
  if (
    rate === "" ||
    isNaN(rate) ||
    parseFloat(rate) < 1 ||
    parseFloat(rate) > 10
  ) {
    // Validación de 'rate' (debe ser un número válido entre 1 y 10)
    alert("La calificación debe ser un número entre 1 y 10.");
    return; // Detener la ejecución si el error ocurre
  }

  // Validación de 'poster' (debe ser una URL válida)
  // Expresión regular para validar la URL
  const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

  if (poster === "" || !urlRegex.test(poster)) {
    alert("La pelicula tiene que tener una URL válida.");
    return; // Detener la ejecución si el error ocurre
  }

  ///  VALIDAR QUE AL MENOR UN INPUT ESTE SELECCIONADO
  if (genre.length === 0) {
    // console.log("generos vacios");

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

  console.log("log del submit", movieData);
  createMovie(movieData);
  form.reset(); // Limpiar el formulario después de enviar
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
