//const fs = require("fs"); //Core modules

// const random = Math.random(); // core variable

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// fs.readFile("sample.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log("Fayl malumoti =>", data);
// });

// Reja Application
const express = require("express");
const nodeApp = express();
const fs = require("fs");
const http = require("http");

let user;
fs.readFile("./database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

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

//author route

nodeApp.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// get function
nodeApp.get("/", function (req, res) {
  res.render("shopping");
});

const server = http.createServer(nodeApp);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port : ${PORT}`);
});
