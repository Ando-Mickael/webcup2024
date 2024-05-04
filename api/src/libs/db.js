require("dotenv").config();
const mongoose = require("mongoose");
const { capitalize } = require("./utils");

const uri = process.env.MONGODB_URI;

function getModel(documentName) {
  return mongoose.model(capitalize(documentName));
}

module.exports = {
  uri,
  getModel,
};
