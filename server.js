const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const overview = require('./routes/overview');
const signup = require('./routes/signup.js');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const host = '127.0.0.1';

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/UserData', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB', error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', overview);
app.use('/signup', signup);

app.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`); 
});
