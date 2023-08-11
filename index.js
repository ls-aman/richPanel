//jshint esversion: 6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const rpCollection = require("./mongodb");
//
// require("dotenv").config();
// var http = require('http').Server(app);
// const paymentRoute = require('./routes/paymentRoute');


// app.use('/',paymentRoute);
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.set("view engine", 'ejs');

var details =  ["Mobile", "Basic", "Standard", "Premium"];
var monthPay =  ["Rs.100", "Rs.200", "Rs.500", "Rs.700"];
var yearPay = ["Rs.1000", "Rs.2000", "Rs.5000", "Rs.7000"];

app.get("/", (req, res) => {
  res.render("index");
})

app.get("/index", function(req, res){
  res.render("index");
});

app.post("/index", async function(req, res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.pass;

  const data = {
    name: name,
    email: email,
    password: password
  }
  await rpCollection.insertMany([data]);

  res.render("login");
  console.log(name);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login",async (req, res) => {
  // try{
  //   const check = await collection.findOne({name:req.body.name})
  //   if(check.pass === req.body.pass){
  //     res.render("home")
  //   }
  //   else{
  //     res.send("Wrong Password")
  //   }
  // }
  // catch{
  //   res.send("Wrong Details")
  // }

  var logEmail = req.body.email;
  var logPass = req.body.pass;
  res.render("home");
})

app.get("/home", (req, res) => {
    res.render('home');
})

app.post("/home", (req, res) => {
  res.render("buy");
})

app.get("/buy", (req, res) =>{
  res.render("buy");
})

app.post("/buy", (req, res) => {

})

app.listen(process.env.PORT || 3000, function(){
  console.log("Running");
});
