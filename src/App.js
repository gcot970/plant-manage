const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to the database');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})
.catch((error) => {
  console.error('Error connecting to the database:', error);
});
