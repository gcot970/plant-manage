const { Schema, model } = require('mongoose');

const userEventsSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for associating events with users
    required: true,
  },
  date: {
    type: Date, // Assuming you want to store dates as actual Date objects
    required: true,
  },
  time: {
    type: String, // You can use a string to store time, or a separate Date field for full datetime
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
});

const UserEvent = model('UserEvent', userEventsSchema);

module.exports = UserEvent;