const path = require("path"); // built in NodeJS path
const router = require("express").Router(); // points the files or directories
const apiRoutes = require("./api"); // Defining API folder
const userRoutes = require("./api/auth"); // Defining Auth folder
const aboutRoutes = require("./api/about"); // Defining about folder

// API Routes - part of the server
router.use("/api", apiRoutes); // points to api/index.js
router.use("/user", userRoutes); // points to api/auth.js
router.use("/aboutus", aboutRoutes) // points to api/about.js

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
