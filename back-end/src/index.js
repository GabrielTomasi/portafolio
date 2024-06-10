const server = require("./app.js");

const { conn } = require("./database.js");
require("dotenv").config();

conn.sync().then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`server listening on port: ${process.env.PORT}`);
  });
});
