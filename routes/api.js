const express = require('express');
const router = express.Router();

const Instrument = require('../models/instrument');
const Student = require('../models/student');
const Music = require('../models/music');

router.post('/instrument', async (req, res) => {
  const newInstrument = new Instrument(req.body);
  const result = await newInstrument.save();

  if (result.ok) {
    res.send(true);
  } else {
    res.send(false);
  }
});

// INSTRUMENT

router.patch('/instrument/', async (req, res) => {
  const { _id } = req.body;
  const updatedInstrument = await Instrument.findByIdAndUpdate(_id, {
    ...req.body,
  });

  if (updatedInstrument) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.delete('/instrument', async (req, res) => {
  const { _id } = req.body;
  const deletedInstrument = await Instrument.findByIdAndDelete(_id);

  if (deletedInstrument) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get('/instrument/:id', async (req, res) => {
  const { id } = req.params;
  const foundInstrument = await Instrument.findById(id);
  res.json(foundInstrument);
});

router.get('/instrument', async (req, res) => {
  const index = await Instrument.find({});
  res.json(index);
});

// STUDENT

router.post('/student', async (req, res) => {
  const newStudent = new Student(req.body);
  const result = await newStudent.save();

  if (result.ok) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.patch('/student/', async (req, res) => {
  const { _id } = req.body;
  const updatedStudent = await Student.findByIdAndUpdate(_id, {
    ...req.body,
  });

  if (updatedStudent) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.delete('/student', async (req, res) => {
  const { _id } = req.body;
  const deletedStudent = await Student.findByIdAndDelete(_id);

  if (deletedStudent) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get('/student/:id', async (req, res) => {
  const { id } = req.params;
  const foundStudent = await Student.findById(id);
  res.json(foundStudent);
});

router.get('/student', async (req, res) => {
  const index = await Student.find({});
  res.json(index);
});

// MUSIC

router.post('/music', async (req, res) => {
  const newMusic = new Music(req.body);
  const result = await newMusic.save();

  if (result.ok) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.patch('/music/', async (req, res) => {
  const { _id } = req.body;
  const updatedMusic = await Music.findByIdAndUpdate(_id, {
    ...req.body,
  });

  if (updatedMusic) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.delete('/music', async (req, res) => {
  const { _id } = req.body;
  const deletedMusic = await Music.findByIdAndDelete(_id);

  if (deletedMusic) {
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get('/music/:id', async (req, res) => {
  const { id } = req.params;
  const foundMusic = await Music.findById(id);
  res.json(foundMusic);
});

router.get('/music', async (req, res) => {
  const index = await Music.find({});
  res.json(index);
});

module.exports = router;
