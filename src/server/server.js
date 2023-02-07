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
  const { url, uri, id, name, artists } = req.body;

  console.log(url, uri, id, artists, name);
});

module.exports = app;