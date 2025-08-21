// index.js
const app = require("./src/services/server");
const DBconect = require("./config/DBconect");

const PORT = process.env.PORT || 3000;

DBconect()
  .then(() => {
    // Listen only if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // If the connection fails, do not start the server.
    throw new Error(`Database connection failed: ${err.message}`);
  });
