const way = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routers/admin");
const courseRoutes = require("./routers/course");
const path = require("../../chapter_01/ch_03/util/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(way.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(courseRoutes);

const app = express();

app.listen(4000);
