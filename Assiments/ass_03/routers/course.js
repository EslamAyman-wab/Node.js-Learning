const way = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/way");

router.get("/", (req, res) => {
  res.sendFile(way.join(rootDir, "views", "course.html"));
});

module.exports = router;
