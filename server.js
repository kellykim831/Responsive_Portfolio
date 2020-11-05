// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Routes
// =============================================================


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/html/portfolio.html"));
});


app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/html/contact.html"));
});



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});