const { body, validationResult } = require("express-validator");

// Middleware de validación
const validateMovieData = [
  // Validar que el campo 'title' esté presente y sea una cadena no vacía
  body("title")
    .isString()
    .withMessage("Title must be a string")
    .notEmpty()
    .withMessage("Title is required"),

  // Validar que el campo 'year' sea un número válido
  body("year")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage(
      "Year must be a valid integer between 1900 and the current year"
    ),

  // Validar que 'genre' sea un arreglo con al menos un género
  body("genre")
    .isArray()
    .withMessage("Genre must be an array")
    .custom((value) => value.length > 0)
    .withMessage("Genre must contain at least one genre"),

  // Validar que 'rate' sea un número entre 1 y 10
  body("rate")
    .isFloat({ min: 1, max: 10 })
    .withMessage("Rate must be a number between 1 and 10"),

  // Validar que 'poster' sea una URL válida
  body("poster").isURL().withMessage("Poster must be a valid URL"),

  // Validación de director
  body("director")
    .isString()
    .withMessage("Director must be a string")
    .notEmpty()
    .withMessage("Director is required"),

  // Validación de duración (duración debe estar en formato "Xh Ymin" o "Xh")
  body("duration")
    .isString()
    .withMessage("Duration must be a string")
    .matches(/^(\d+h\s?\d+min|\d+h)$/) // Valida formatos como "2h 30min" o "2h"
    .withMessage('Duration must be in the format "Xh Ymin" or "Xh"'),

  // Middleware para comprobar si hay errores de validación
  (req, res, next) => {
    const errors = validationResult(req); // Obtener los errores de validación
    if (!errors.isEmpty()) {
      // Si hay errores, devolverlos al cliente
      return res.status(400).json({ errors: errors.array() });
    }
    next(); // Si no hay errores, continuar al siguiente middleware/controlador
  },
];

module.exports = validateMovieData;
