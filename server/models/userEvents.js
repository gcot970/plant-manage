const { Schema } = require('mongoose');

const userEventsSchema = new Schema({
  userId: {
    type: Number,
    ref: 'User', // Reference to the User model for associating events with users
    required: true,
  },
  start: {
    type: String, 
    required: true,
  },
  end: {
    type: String, 
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = userEventsSchema;