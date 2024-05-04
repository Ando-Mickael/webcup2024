const mongoose = require("mongoose");
const { uri } = require("./src/libs/db");
const User = require("./src/models/User");

mongoose.connect(uri);

User.find().then((data) => {
  console.log(data);
});
