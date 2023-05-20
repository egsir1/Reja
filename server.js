const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://sam:DKjk9m9CuKeJfaTE@cluster0.wyfd8jw.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("Successfully connected to MongoDB");
      //   console.log(client);
      module.exports = client;

      const nodeApp = require("./app");

      const server = http.createServer(nodeApp);
      let PORT = 3018;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port : ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
