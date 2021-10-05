const mongoose = require('mongoose');
const { Schema } = mongoose;

const musicSchema = new Schema({
  title: {
    type: String,
    require: [true, 'Music must have a title'],
  },
  composer: {
    type: String,
  },
  arranger: {
    type: String,
  },
  genre: {
    type: String,
  },
  year: {
    type: String,
  },
});

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;
