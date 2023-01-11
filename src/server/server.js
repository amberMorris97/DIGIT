const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  console.log('ah')
  return res.send("Ah")
});

app.post('/add', (req, res) => {

  return res.status(200).send("Hey")
});

module.exports = app;