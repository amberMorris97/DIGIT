const express = require('express');
const path = require('path');
const axios = require('axios');

const { CLIENT_ID, CLIENT_SECRET, SPOTIFY_TOKEN, SPOTIFY_SEARCH } = require('./secrets');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

const DEV_URL = 'http://127.0.0.1:5000';

app.get('/fetchToken', async (req, res) => {
  const authParams = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const body = 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET

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
    response = await axios.get(`https://api.spotify.com/v1/search/?q=${artist}&type=artist`, authParams);
  } catch (e) {
    throw new Error(e);
  }

  res.send(response.data);
});

module.exports = app;