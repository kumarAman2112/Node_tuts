// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user);
// fs.appendFile('greetingtxt',`Hello Mr.  ${user.username} ` + '\n',()=>{console.log("jhingalala hu hu")});
// var _=require('lodash');
// var data=["person","person","name",1,1,1,2,2,3,4,"45","aman"];
// var uniquData=_.uniq(data);
// console.log(uniquData);

// const jsonString='{"name":"aman","age":"21"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.name);
// console.log(typeof(jsonObject.age),jsonObject.age);
// const x=jsonObject.age;
// const Age=parseInt(x);
// console.log(typeof(Age),Age);
const express = require("express"); //import express package
const db=require('./db');//import db object from db.js file;
const bodyParser=require('body-parser');//import body-parser package
const app = express(); //put all functionalities in app variable
app.use(bodyParser.json());//use body-parser package
const personRoutes=require('./Routes/personRoutes');//import personRoutes object from personRoutes.js file
const menuItemRoutes=require('./Routes/menuItemRoutes');//import menuItemRoutes object from menuItemRoutes.js file
const orderRoutes=require('./Routes/orderRoutes');//import orderRoutes object from orderRoutes.js file
require('dotenv').config();
const PORT=process.env.PORT||3000
app.use('/person',personRoutes);//use personRoutes object
app.use('/menu',menuItemRoutes)
app.use('/order',orderRoutes)

app.get("/", (req, res) => {
  res.send("hello My name is Aman kumar");
}); //prepare menu card item 1

app.listen(PORT); //make the srver live on localhost 3000
