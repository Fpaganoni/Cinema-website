// Funciones que establecen las logica de negocio de cada ruta
// Ej. cuando se reciba X solicitud, el controlador indica QUE HACER con esa solicitud
// para eso vamos a ir a la base de datos a pedir la info de los usuarios y responder al cliente con la info obtenida (2 pasos).

const homeController = (req, res) => {
  res.status(200).send("Recibiendo solicitud desde la ruta home");
};

module.exports = {
  homeController,
};
