// Dependencies
// NPM Packages to give our server useful functionality
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS CONFIGURATION
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

// Sets up bodyParser makes it possible for our server to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER
// THE BELOW POINTS OUR SERVER TO A SERIES OF "ROUTE" FILES
// These routes give our server a "map" of how to respond to various URLS
// =============================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
// app listens to start our server.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
