const express = require("express");

const way = require("path")

const router = express.Router();

const rootDir = require("../util/way")

router.get("/course", (req, res) => {
  res.sendFile(way.join(rootDir, "views", "course.html"));
});

router.post("/course", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
