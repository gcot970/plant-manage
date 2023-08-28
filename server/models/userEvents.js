const { Schema, model } = require('mongoose');

const userEventsSchema = new Schema({
  userId: {
    type: Number,
    ref: 'User', // Reference to the User model for associating events with users
    required: true,
  },
  date: {
    type: String, 
    required: true,
  },
  time: {
    type: String, 
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
});

const UserEvent = model('UserEvent', userEventsSchema);

module.exports = UserEvent;