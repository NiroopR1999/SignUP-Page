const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const signUpModel = require('../src/mongoDb');

// Define the file path to the 'signUp.html' file in the 'public' directory
const signupFilePath = path.join(__dirname, '..', 'public', 'signUp.html');

// Read the content of 'signUp.html' and store it in the 'signupFileContent' variable
const signupFileContent = fs.readFileSync(signupFilePath, 'utf8');

// Route handler for GET requests to '/signup'
router.get('/', (req, res) => {
  // Send a response with a 200 OK status and the content of 'signUp.html'
  res.status(200).send(signupFileContent);
});

// Route handler for POST requests to '/signup'
router.post('/', async (req, res) => {
  console.log(req.body); // Log the received request body

  // Extract data from the request body and structure it for MongoDB insertion
  const data = {
    name: req.body.userName,
    email: req.body.userEmail,
    password1: req.body.userPassword1,
    password2: req.body.userPassword2,
  };

  // Check if the passwords match
  if (data.password1 === data.password2) {
    try {
      // Insert the extracted data into the MongoDB using the signUpModel
      await signUpModel.insertMany([data]);

      // Send a response with a 201 Created status and a JSON object indicating success
      res.status(201).json({
        status: 'success',
        message: 'Registration successful!',
        data:data
      });
    } catch (error) {
      console.error('Error:', error);

      // Send a response with a 500 Internal Server Error status and an error message
      res.status(500).json({
        status: 'error',
        message: 'Registration failed. Please try again later.',
      });
    }
  } else {
    // Send a response with a 400 Bad Request status and an error message
    res.setHeader('Content-Type', 'text/html');
    res.status(400).send(`
      <script>
        alert('Passwords do not match. Please check your passwords and try again.');
      </script>
    `);
  }
});

module.exports = router;
