const express = require('express');
const path = require('path');
const axios = require('axios');

const { CLIENT_ID, CLIENT_SECRET, SPOTIFY_TOKEN, SPOTIFY_SEARCH } = require('./secrets');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

/* temporary local host URL for python server */
const DEV_URL = 'http://127.0.0.1:5000';

app.get('/fetchToken', async (req, res) => {
  const authParams = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const body = 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET;

    const response = await axios.post(SPOTIFY_TOKEN, body, authParams);

    const { access_token } = response.data;

    res.send(access_token);
});

app.get('/search', async (req, res) => {
  const { artist, token } = req.query;

  const authParams = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  };

  let response;

  try {
    response = await axios.get(`${SPOTIFY_SEARCH}${artist}&type=artist`, authParams);
  } catch (e) {
    throw new Error(e);
  }

  res.send(response.data);
});

app.post('/submitArtist', async (req, res) => {
  const { uri, id, name, artists } = req.body;

  const data = {
    id,
    uri,
    artist: name,
    match1: artists[0].id,
    match2: artists[1].id,
    match3: artists[2].id,
  };

  const response = await axios.post(`${DEV_URL}/add`, data);

  if (response.data.status === 200) {
    res.sendStatus(200);
  }
});

app.post('/submitEmail', async (req, res) => {
  const { email } = req.body;

  const response = await axios.post(`${DEV_URL}/add_email`, { email });

  if (response.data.status === 200) {
    res.sendStatus(200);
  }
});

module.exports = app;