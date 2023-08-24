const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // Add any other email validation logic you want
  },
  password: {
    type: String,
    required: true,
    // You might want to include additional validation or security measures for password
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
