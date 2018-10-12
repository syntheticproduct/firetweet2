const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('FireTweet Home');
});

app.get('/search', (req, res) => {
  res.status(200).send('FireTweet Search');
});

app.get('/tweets', (req, res) => {
  let obj = JSON.parse(fs.readFileSync('./src/server/sampleTweets.JSON', 'utf8'));  
  res.status(200).send(JSON.stringify(obj));
});


app.get('/search/:id', (req, res) => {
  res.status(200).send(`FireTweet Search for ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Now LISTENING on ${PORT}`));
