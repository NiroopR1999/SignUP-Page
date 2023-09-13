// Import required modules
const express = require('express'); // Express framework for routing
const router = express.Router(); // Create an instance of an Express router
const fs = require('fs'); // File System module for reading files
const path = require('path'); // Path module for constructing file paths

// Define the file path to the 'index.html' file in the 'public' directory
const overviewFilePath = path.join(__dirname, '..', 'public', 'index.html');

// Read the content of 'index.html' and store it in the 'overviewFileContent' variable
const overviewFileContent = fs.readFileSync(overviewFilePath, 'utf8');

// Define a route handler for the root URL ('/')
router.get('/', (req, res) => {
  // Send a response with a 200 OK status and the content of 'index.html'
  res.status(200).send(overviewFileContent);
});

// Export the router so it can be used in other parts of the application
module.exports = router;
