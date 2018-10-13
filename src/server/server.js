const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');

const PORT = 3000;

const app = express();

mongoose.connect('mongodb://admin:pass1234@ds131313.mlab.com:31313/tweets');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('FireTweet Home');
});

app.get('/search', (req, res) => {
  console.log(req.query);
  res.status(200).sendFile(path.join(`${__dirname}/client/search.html`));
});

app.get('/tweets', (req, res) => {
  let obj = JSON.parse(fs.readFileSync('./src/server/sampleTweets.JSON', 'utf8'));
  res.status(200).send(JSON.stringify(obj));
});


app.get('/search/:id', (req, res) => {
  res.status(200).send(`FireTweet Search for ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Now LISTENING on ${PORT}`));