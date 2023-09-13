```markdown
# SignUp Page

A simple web application for user registration with MongoDB integration.

## Author

- Author Name: Niroop R

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

SignUp Page is a basic web application that allows users to sign up by providing their name, email, and password. The user data is stored in a MongoDB database. This project serves as a starting point for building a user registration system within a web application.

## Features

- User registration with name, email, and password.
- MongoDB integration for storing user data.
- Minimalistic and responsive web design.
- Code organized into modular components for easy maintenance.
- Configurable environment variables using dotenv.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed.
- [MongoDB](https://www.mongodb.com/) installed and running.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/signup-page.git
```

2. Navigate to the project directory:

```bash
cd signup-page
```

3. Install the project dependencies:

```bash
npm install
```

## Usage

1. Configure Environment Variables:
- Create a `.env` file in the root directory of the project.
- Add the following variables to the `.env` file:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/UserData
```

- Replace `mongodb://localhost:27017/UserData` with your MongoDB connection URI.

2. Start the server:

```bash
npm start
```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

4. Click on the "Sign Up" link to register a new user.

5. Fill in the registration form and click the "Register" button.

6. User data will be stored in the MongoDB database.

## File Structure

The project's file structure is organized as follows:

```
signup-page/
│
├── public/
│ ├── index.html
│ ├── signUp.html
│ │
│ ├── img/
│ │ └── img.svg
│ │
│ └── styles/
│ ├── index.css
│ └── signUp.css
│
├── routes/
│ ├── overview.js
│ └── signup.js
│
├── src/
│ └── mongoDb.js
│
├── .env
├── package-lock.json
├── package.json
└── server.js
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

## License

This project is licensed under the [ISC License](LICENSE).

```
