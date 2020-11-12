//imports
require("dotenv").config();
const express = require("express");
const server = express();

//special import for connection to mongodb
require("./lib/connection");

//middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.set("view engine", "ejs");
server.use(require("express-ejs-layouts"));

//middleware for routes
server.get("/", (req, res) => {
    res.redirect("/carparks");
  });
server.use("/carparks", require("./routes/carparks.routes"));
server.use("/show", require("./routes/show.routes"));

//listening
server.listen(process.env.PORT, () =>
  console.log(`listening on ${process.env.PORT}`)
);
