const path = require('path');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const PORT = process.env.PORT || 4000;

const apiRoutes = require('./routes/api');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(helmet());
app.use(mongoSanitize());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'"],
      scriptSrc: [
        "'unsafe-inline'",
        "'self'",
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
      workerSrc: ["'self'", 'blob:'],
      objectSrc: [],
      imgSrc: ["'self'", 'blob:', 'data:'],
      fontSrcUrls: ["'self'"],
    },
  })
);

mongoose
  .connect('mongodb://localhost:27017/eledgerline', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Mongo Connection Open!');
  })
  .catch((err) => {
    console.log('Mongo Connection FAIL!');
    console.log(err);
  });

// ROUTES

app.use('/api', apiRoutes);

// React App
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
});
