const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  link: String,
  label: String,
});

module.exports = mongoose.model("Photo", photoSchema);
