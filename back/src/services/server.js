/// Esta funcion se comunica con la base de datos para pedir la info de los usuarios y dar la informacion.

// redpondera con => {user ej. id: name: email: etc..}

const express = require("express");
const router = require("../routes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use(router);

module.exports = app;
