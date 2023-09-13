const mongoose = require('mongoose'); // Import the Mongoose library

// Define the SignUpSchema using the Mongoose Schema class
const SignUpSchema = new mongoose.Schema({
  name: {
    type: String, // Field type: String
    required: true, // This field is required
  },
  email: {
    type: String, // Field type: String
    required: true, // This field is required
  },
  password1: {
    type: String, // Field type: String
    required: true, // This field is required
  },
  password2: {
    type: String, // Field type: String
    required: true, // This field is required
  },
});

// Create a model using the defined schema, named 'SignUp'
const SignUpModel = mongoose.model('SignUpData', SignUpSchema);

// Export the SignUpModel so it can be used in other parts of the application
module.exports = SignUpModel;
