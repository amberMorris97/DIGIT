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
  streams: {
    type: Number,
    required: true,
    default: 0
  }
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;