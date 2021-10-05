const mongoose = require('mongoose');
const { Schema } = mongoose;

const instrumentSchema = new Schema({
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  type: {
    type: String,
    required: [true, 'Instrument must have a type'],
  },
  serialNumber: {
    type: String,
  },
  caseContents: {
    type: String,
  },
});

const Instrument = mongoose.model('Instrument', instrumentSchema);

module.exports = Instrument;
