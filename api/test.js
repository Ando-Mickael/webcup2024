const mongoose = require("mongoose");
const { uri } = require("./src/libs/db");
const User = require("./src/models/User");
const { capitalize } = require("./src/libs/utils");
const Photo = require("./src/models/Photo");

mongoose.connect(uri);

Photo.create([
  {
    link: "http://localhost:1234/public/winners/2021.jpg",
    label: "Winner 2021",
  },
  {
    link: "http://localhost:1234/public/winners/2022.jpg",
    label: "Winner 2022",
  },
  {
    link: "http://localhost:1234/public/winners/2023.jpg",
    label: "Winner 2023",
  },
]).then((data) => {
  console.log(data);
});
