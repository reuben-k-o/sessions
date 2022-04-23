const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/user");
const { MONGODB_URI } = require(".config");

const verifyCallback = (username, password, done);

const strategy = new LocalStrategy();

passport.use();
