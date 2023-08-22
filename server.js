import React from 'react';
import SignupForm from './SignupForm';

const App = () => {
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); 

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});

// Set up your routes, middleware, etc.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Connect to the database
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});

//  other server setup code


  const handleSignup = async (userData) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();

      } else {
        const errorData = await response.json();
        // Handle signup error
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <SignupForm onSubmit={handleSignup} />
    </div>
  );
};

export default App;
