require('dotenv').config();

module.exports = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  SPOTIFY_TOKEN: process.env.SPOTIFY_TOKEN,
  SPOTIFY_SEARCH: process.env.SPOTIFY_SEARCH,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
};