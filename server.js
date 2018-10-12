const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('FireTweet Home');
});

app.get('/search', (req, res) => {
  console.log(req.query.search);
  res.status(200).sendFile(path.join(`${__dirname}/client/search.html`));
});


app.post('/search/:id', (req, res) => {
  res.status(200).send(`FireTweet Search for ${req.params.id}`);
});

app.listen(PORT, () => console.log(`Now LISTENING on ${PORT}`));
