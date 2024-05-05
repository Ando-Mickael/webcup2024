// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { uri } = require("./src/libs/db");
const http = require("http");
const initSocket = require("./src/socket");

// variables
const app = express();
const port = process.env.PORT;
const server = http.createServer(app);

mongoose.connect(uri);
initSocket(server);

// middlewares
app.use(require("cors")());
app.use(express.json());

// routes
app.use("/", require("./src/routes"));
app.use("/auth", require("./src/routes/auth.route"));
app.use("/crud", require("./src/routes/crud.route"));
app.use("/veteran-asking", require("./src/routes/veteranAsking.route"));

// run server
if (port) {
  server.listen(port, () => console.log(`http://localhost:${port}`));
}

module.exports = server;
