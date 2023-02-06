import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken } from '../redux/actions/spotifyApiActions';
import DisplayArtists from './DisplayArtists.jsx';
import Selections from './Selections.jsx';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const token = useSelector(state => state.spotifyApiReducer.token);
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const artists = useSelector(state => state.spotifyApiReducer.artists);

  useEffect(async() => {
    dispatch(fetchToken());
  }, []);

  const clearSearchResults = () => {
    setArtistName('');
    setSearchResults([]);
  }

  const handleOnChange = async (e) => {
    const { name, value } = e.target;

    if (name === 'artist') {
      setArtistName(value);
    };

    if (value.length < 1) {
      setSearchResults([]);
    };

    let results;
    if (value.length > 3) {
      try {
        results = await axios.get(`/search/?artist=${value}&token=${token}`);
      } catch (e) {
        throw new Error(e);
      }
    };

    if (results) {
      setSearchResults([...results.data.artists.items]);
    };
  }

  const handleSelect = (e, img, url) => {
    e.preventDefault();

    const { id } = e.target;
    const data = { id, img, url };

    if (data) {
      clearSearchResults();

      if (!primaryArtist.id) {
        dispatch(setPrimaryArtist(data));
        return;
      }

      dispatch(addArtist(data));
    }

  }

  return (
    <div>
      {primaryArtist.id && <Selections primaryArtist={primaryArtist} />}
      {!primaryArtist.id ? <h1>choose primary artist</h1> : <h1>choose another artist</h1>}
        <input type="text" value={artistName} name="artist" onChange={handleOnChange} />
        {searchResults && <DisplayArtists artists={searchResults} handleSelect={handleSelect} />}
    </div>
  );
}

export default Home;