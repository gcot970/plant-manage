const { Schema } = require('mongoose');
const { Date } = require('mongoose');

const userEventsSchema = new Schema({
  userId: {
    type: Number,
    ref: 'User', // Reference to the User model for associating events with users
    required: true,
  },
  start: {
    type: Date, 
    required: true,
  },
  end: {
    type: Date, 
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = userEventsSchema;