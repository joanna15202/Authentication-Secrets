// *****************
// Basic Setup
// *****************
//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/userDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userSchema = {
  email: String,
  password: String
};

const User = mongoose.model('User', userSchema);

// *****************
// Home Route
// *****************
app.get("/", function(req, res) {
  res.render("home");
});

// *****************
// Login Route
// *****************
app.get("/login", function(req, res) {
  res.render("login");
});

app.post("/login", function(req, res) {
  const inputUserName = req.body.username;
  const inputPassword = req.body.password;
  User.findOne({
    email: inputUserName,
  }, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === inputPassword) {
          res.render("secrets");
        } else {
          res.send("Please check your email and passwords again.")
        }
      } else {
        res.send("Please check your email and passwords again.")
      }
    }
  });
});

// *****************
// Register Route
// *****************
app.get("/register", function(req, res) {
  res.render("register");
});

app.post("/register", function(req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err) {
    if (err) {
      console.log(err);
    } else {
      // We only want to render this secrets page when the user is registered or logged in.
      res.render("secrets");
    }
  });
});







// *****************
// listen
// *****************
app.listen(process.env.PORT || 3000, function() {
  console.log("The server is running on port 3000");
});
