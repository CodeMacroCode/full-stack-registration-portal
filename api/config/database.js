const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB_URI;

const dbConnect = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("CONNECTED TO DATABASE");
    })
    .catch((error) => {
      console.log("ERROR WHILE CONNECTING TO DATABASE");
      console.log(error.message);
    });
};

module.exports = dbConnect;
