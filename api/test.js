const mongoose = require("mongoose");
const { uri } = require("./src/libs/db");
const User = require("./src/models/User");
const { capitalize } = require("./src/libs/utils");

mongoose.connect(uri);

// const documentName = "user";

// const Model = mongoose.model(capitalize(documentName));
// Model.find().then((data) => {
//   console.log(data);
// });

// User.deleteOne({ nickname: "jeanne" }).then((data) => {
//   console.log(data);
// });

User.find({ nickname: "jeanne" }).then((data) => {
  console.log(data);
});
