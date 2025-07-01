const app = require("./src/services/server");
const DBconect = require("./config/DBconect");

DBconect().then((res) => {
  try {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
});
