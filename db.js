//import the mongoose module//
const mongoose = require("mongoose");
//define the databade url//
// const mongoURL = 'mongodb://localhost:27017/hotels';
require('dotenv').config();
const DB_URL=process.env.DB_URL;
const mongoURL = DB_URL
// setup the db connection//
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
//define default connection//
const db = mongoose.connection;
// define event listeners//
db.on("connected", () => {
  console.log("connected to MongoDB server");
});
db.on("error", (err) => {
  console.log(err.message);
});
db.on("disconnected", () => {
  console.log("disconnected from MongoDB server");
});
//export database connection//
module.exports = db;
