const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const waitlistSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  socialLink: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  }
});

const Waitlist = mongoose.model('Waitlist', waitlistSchema);
module.exports = Waitlist;