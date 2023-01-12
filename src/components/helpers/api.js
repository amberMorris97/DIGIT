const axios = require('axios');
const { CLIENT_ID, CLIENT_SECRET, SPOTIFY_TOKEN, SPOTIFY_SEARCH } = require('./secrets');

const apiHandler = {
  submitArtist: async (artist, genre, url) => {
    const body = { artist, genre, url };

    const dataSent = await axios.post('/add', { body });

    console.log(dataSent);
  },

  // fetching spotify token required for client interaction
  fetchToken: async () => {
    const authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }

    const response = await fetch(SPOTIFY_TOKEN, authParams);
    const data = await response.json();
    const token = data.access_token;

    return token;
    },

    searchArtist: async (artist, token) => {
      const artistParams = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      }
      const response = await fetch(SPOTIFY_SEARCH + artist + '&type=artist', artistParams);
      const data = await response.json();
      console.log(data);
    }
};

export default apiHandler;