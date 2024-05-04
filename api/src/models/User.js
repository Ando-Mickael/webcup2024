const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nickname: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  isVeteran: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userSchema);
