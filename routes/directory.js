const express = require("express");
const router = express.Router();

router.get("/enrol", (req, res) => {
  res.sendFile(__dirname + "/enrol.html");
});
