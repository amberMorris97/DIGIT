import React, { useState, useEffect } from 'react';
import artist_form from './helpers/forms';
import apiHandler from './helpers/api';

const ArtistForm = ({ token }) => {
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');
  const [url, setUrl] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === 'artist') {
      setArtist(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // call to API
    apiHandler.submitArtist(artist, genre, url, token);
  };

  const searchHandler = (e) => {
    e.preventDefault();

    const artistId = apiHandler.searchArtist(artist, token);

    // Get Search ID
  }

  return (
    <div>
      <h1>Find Your New Favorite Artist!</h1>
      <form>
        <label>
          Artist: {' '}
          <input type="text" name="artist" value={artist} onChange={onChange} />
        </label>
        <label>
          Genre: {' '}
          <input type="text" name="artist" value={genre} />
        </label>
        <label>
          Url: {' '}
          <input type="text" name="artist" value={url} />
        </label>
        <input type="submit" value="Search" onClick={(e) => searchHandler(e)} />
      </form>
    </div>
  )
}

export default ArtistForm;