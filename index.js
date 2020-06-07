const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser({ extended: false }));
app.set("view engine", "ejs");

//const authRoute = require("./routes/auth");
//const blogRoute = require("./routes/blogRoute");
//const dbRoute = require("./routes/directory");

//dotenv.config();

mongoose.connect(
  "mongodb+srv://victor_eyo:test123@team031-5rrit.mongodb.net/userDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

mongoose.connect(
  "mongodb+srv://victor_eyo:test123@team031-5rrit.mongodb.net/farmerDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB!")
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/enrol", (req, res) => {
  res.sendFile(__dirname + "/enrol.html");
});

app.use("/", require("./routes/auth"));
app.use("/", require("./routes/blogRoute"));
//app.use("/", require("./routes/directory"));

let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => {
  console.log("server is running successfully!");
});
