const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");

const { MONGODB_URI } = require("./config");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(MONGODB_URI).then(() => {
  app.listen(5000);
});
