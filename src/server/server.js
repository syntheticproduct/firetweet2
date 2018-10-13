const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');

const alertController = require('./alertController');

const PORT = 3000;

const app = express();

mongoose.connect('mongodb://admin:pass1234@ds131313.mlab.com:31313/tweets');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('FireTweet Home');
});

app.post('/alert',
  alertController.postAlert,
  (req, res) => {
    res.status(200).json(res.locals);
  });

app.delete('/alert',
  alertController.deleteAlert,
  (req, res) => {
    res.status(200).json(res.locals);
  });





app.listen(PORT, () => console.log(`Now LISTENING on ${PORT}`));
