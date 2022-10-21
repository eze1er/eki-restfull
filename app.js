const express = require("express");

const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

// Middleware ( a function who is execute when the route is execute)

// app.use('/posts', () => {
//   console.log('This is a middleware used in post')
// })

// for the authentication every time any rout is execute, he gonna check the authentication
// app.use(auth)

//  Import routes
const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");

app.use("/posts", postsRoute);
app.use("/users", usersRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// app.get("/posts", (req, res) => {
//   res.send("We are on posts");
// });

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});
//How do we start listening to the server
app.listen(3000);
