const mongoose = require('mongoose');

const { DB_USERNAME, DB_PASSWORD} = require('../secrets');

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@digitbeta.yg1x5mb.mongodb.net/?retryWrites=true&w=majority&appName=DigItBeta`;

mongoose
  .connect(uri, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB with auth service is running');
    const db = mongoose.connection.db;
  })
  .catch((err) => console.log('Error while connecting to atlas'));

  const db = mongoose.connection;

  module.exports = db;