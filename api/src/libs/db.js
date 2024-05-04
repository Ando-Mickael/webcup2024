require("dotenv").config();

const uri = process.env.MONGODB_URI;

module.exports = {
  uri,
};
