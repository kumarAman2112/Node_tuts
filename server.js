const express = require("express"); //import express package
const app = express(); //put all functionalities in app variable
const db = require("./db"); //import db object from db.js file;

const bodyParser = require("body-parser"); //import body-parser package
const passport = require("./Auth");
app.use(bodyParser.json()); //use body-parser package
const personRoutes = require("./Routes/personRoutes"); //import personRoutes object from personRoutes.js file
const menuItemRoutes = require("./Routes/menuItemRoutes"); //import menuItemRoutes object from menuItemRoutes.js file
const orderRoutes = require("./Routes/orderRoutes"); //import orderRoutes object from orderRoutes.js file
require("dotenv").config();
const PORT = process.env.PORT || 3000;
//middleware function
const logRequest = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleString()}] Request Made to:${req.originalUrl}`
  );
  next(); //move to next phase;
};
app.use(logRequest);
app.use(passport.initialize());
const localAuth = passport.authenticate("local", { session: false });
app.get("/", localAuth, (req, res) => {
  res.send("hello My name is Aman kumar");
});

app.use("/person", localAuth, personRoutes); //use personRoutes object;
app.use("/menu", menuItemRoutes); //use menuItemRoutes object;
app.use("/order", orderRoutes); //use orderRoutes object;

app.listen(PORT); //make the server live on localhost 3000;
