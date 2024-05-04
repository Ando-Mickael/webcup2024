// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { uri } = require("./src/libs/db");

// variables
const app = express();
const port = process.env.PORT;

// connect to DB
mongoose.connect(uri);

// middlewares
app.use(require("cors")());
app.use(express.json());

// routes
app.use("/", require("./src/routes"));
app.use("/auth", require("./src/routes/auth.route"));

// run server
if (port) {
  app.listen(port, () => console.log(`http://localhost:${port}`));
}

module.exports = app;
