const express = require("express");
const router = express.Router();
const data = require("../models/data");

router.get("/enrol", (req, res) => {
  res.sendFile(__dirname + "/enrol.html");
});
