/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost:27017/reddit-db";
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true }
);
console.log("Database Successfully Connected")
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
    // db.close(); turn on for testing
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
