const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  bio: {
    type: String,
  },
  tracks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Track',
    },
  ],
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
