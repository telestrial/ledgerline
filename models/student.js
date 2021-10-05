const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Student must have a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'Student must have a last name'],
  },
  grade: {
    type: Number,
  },
  instrument: {
    type: String,
  },
  classes: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
