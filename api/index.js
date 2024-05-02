// imports
require("dotenv").config();
const express = require("express");

// variables
const app = express();
const port = process.env.PORT;

// middlewares
app.use(require("cors")());
app.use(express.json());

// routes
app.use("/", require("./src/routes"));

// run server
if (port) {
  app.listen(port, () => console.log(`http://localhost:${port}`));
}

module.exports = app;
