import "../styles/reset.css";
import "../styles/style.css";
import "../styles/createMovie.css";
import "../styles/historyCinema.css";

// index.js
const app = require("./src/services/server");
const DBconect = require("./config/DBconect");

const PORT = process.env.PORT || 3000;

DBconect()
  .then(() => {
    // Escuchar solo si la conexión a la DB es exitosa
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // Si la conexión falla, no inicies el servidor
    console.error(
      "Failed to connect to the database, server not started:",
      err
    );
  });
