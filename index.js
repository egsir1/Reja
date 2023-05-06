//const fs = require("fs"); //Core modules

// const random = Math.random(); // core variable

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// fs.readFile("sample.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log("Fayl malumoti =>", data);
// });

// // externel
// const moment = require("moment");

// const time = moment().format("HH:mm:ss");
// console.log(time);
// const Account = require("./account");

// const myAccount = new Account("Sam", 500000, 4571302458);
// console.log(myAccount);
// myAccount.checkBalance();
// Account.tellTheTime();
// Account.tellAboutClass();
// myAccount.withdrawMoney(45000);
// myAccount.giveDetails();
// myAccount.makeDeposit(200000);
// myAccount.withdrawMoney(700000);

//1. init

// nodeApp.use(express.static("public"));
// nodeApp.use(express.json());
// nodeApp.use(express.urlencoded({ extended: true }));

// //2 session

// //3

// nodeApp.set("views", "views");
// nodeApp.set("view engine", "ejs");

// //4
// nodeApp.get("/", function (req, res) {
//   res.send("<h1>Our First Express App!</h1>");
// });

// nodeApp.get("/hello", function (req, res) {
//   res.end("<h1>Hello World!</h1>");
// });
// nodeApp.get("/gift", function (req, res) {
//   res.end("<h1>Gifts Page </h1>");
// });

// const server = http.createServer(nodeApp);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log("The server is running successfully on port ", PORT);
// });

// Reja Application
const express = require("express");
const nodeApp = express();

const http = require("http");

// Kirish code

nodeApp.use(express.static("public"));
nodeApp.use(express.json());
nodeApp.use(express.urlencoded({ extended: true }));

// Views code

nodeApp.set("views", "views");
nodeApp.set("view engine", "ejs");

// Routing code

// post function
nodeApp.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

// get function
nodeApp.get("/", function (req, res) {
  res.render("shopping");
});

const server = http.createServer(nodeApp);
let PORT = 3001;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port : ${PORT}`);
});

//////////////////////////////////////

const schedule = require("node-schedule");

schedule.scheduleJob("*/5 34 * * * ", function () {
  console.log("The answer to life, the universe, and everything!");
  // ringtone.play();
  // alarnOn = true;
});

// setTimeout(() => {
//   if (alarnOn) {
//     ringtone.pause();
//   }
// }, 9000);
