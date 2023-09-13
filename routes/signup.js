// Import required modules
const express = require('express'); // Express framework for routing
const router = express.Router(); // Create an instance of an Express router
const fs = require('fs'); // File System module for reading files
const path = require('path'); // Path module for constructing file paths
const signUpModel = require('../src/mongoDb'); // Import the MongoDB model for Sign Up data

// Define the file path to the 'signUp.html' file in the 'public' directory
const signupFilePath = path.join(__dirname, '..', 'public', 'signUp.html');

// Read the content of 'signUp.html' and store it in the 'signupFileContent' variable
const signupFileContent = fs.readFileSync(signupFilePath, 'utf8');

// Define a route handler for the root URL ('/') using the GET method
router.get('/', (req, res) => {
  // Send a response with a 200 OK status and the content of 'signUp.html'
  res.status(200).send(signupFileContent);
});

// Define a route handler for the root URL ('/') using the POST method
router.post('/', async (req, res) => {
  console.log(req.body); // Log the received request body

  // Extract data from the request body and structure it for MongoDB insertion
  const data = {
    name: req.body.userName,
    email: req.body.userEmail,
    password1: req.body.userPassword1,
    password2: req.body.userPassword2,
    
  };

  // Insert the extracted data into the MongoDB using the signUpModel
  await signUpModel.insertMany([data]);

  // Send a response with a 201 Created status and a JSON object indicating success
  res.status(201).json({
    status: data,
  });
});

// Export the router so it can be used in other parts of the application
module.exports = router;
