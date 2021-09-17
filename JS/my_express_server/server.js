

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact Me: someemail@gmail.moc");
});

app.get("/about", function(req, res) {
  res.send("This is my site working in the server");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Coffee</li><li>Coding</li><li>Cycling</li></ul>");
});

app.listen(port, function(){
  console.log("Server started on port 3000");
});
