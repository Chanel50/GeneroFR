require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log("Could not connect to database", err));

  return connection;
};