const trackSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
  genre: {
    type: String,
  },
  duration: {
    type: Number,
  },
  fileId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  uploadDate: {
    type: Date,
    default: Date.now,
  },
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;