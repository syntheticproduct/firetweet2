const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('FireTweet Home');
});

app.get('/search', (req, res) => {
  res.status(200).send('FireTweet Search');
});

app.get('/search/:id', (req, res) => {
  res.status(200).send(`FireTweet Search for ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Now LISTENING on ${PORT}`));
