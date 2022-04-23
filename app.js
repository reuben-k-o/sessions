const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const crypto = require("crypto");
require("dotenv").config();

const { MONGODB_URI } = require("./config");
const authRoutes = require("./routes/auth");
const User = require("./models/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: MONGODB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(authRoutes);

mongoose.connect(MONGODB_URI).then(() => {
  app.listen(5000);
});
