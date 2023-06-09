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

const mongodb = require("mongodb");

let user;
fs.readFile("./database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});
//MongoDB call

const db = require("./server").db();
// console.log(db);

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
  console.log("user entered /create-item");
  console.log(req.body);
  const new_plan = req.body.item;
  db.collection("plans").insertOne({ item: new_plan }, (err, data) => {
    // if (err) {
    //   console.log(err);
    //   res.end("something went wrong");
    // } else {
    //   res.end("successfully added");
    // }
    console.log(data.ops);
    res.json(data.ops[0]);
  });
});

//delete function

nodeApp.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// EDIT FUNCTION
nodeApp.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    { _id: new mongodb.ObjectId(data.id) },
    { $set: { item: data.new_input } },
    function (err, data) {
      res.json({ state: "succes" });
    }
  );
});

// DELETE ALL

nodeApp.post("/delete-all", (req, res) => {
  if (req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "All Plans Deleted" });
    });
  }
});
//author route

nodeApp.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// get function
nodeApp.get("/", function (req, res) {
  console.log("data arrived");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = nodeApp;
