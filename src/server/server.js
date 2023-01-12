const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const DEV_URL = 'http://127.0.0.1:5000';

app.get('/', (req, res) => {
  console.log('ah')
  return res.send("Ah")
});

app.post('/add', (req, res) => {
  axios.post(DEV_URL + '/test', req.body);
  return res.status(200).send("Hey")
});

module.exports = app;