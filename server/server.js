const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./config/connection");

const PORT = 3002;
const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
}


// Serve index.html for all routes in production
//app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, '../opt/render/project/src/server.js'));
//});

// Register API routes
app.use(routes);

// Connect to the database
db.once("open", () => {
  // Start the server
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
