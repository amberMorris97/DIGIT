import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken,
  removePrimaryArtist,
  removeArtist } from '../redux/actions/spotifyApiActions';
import DisplayArtists from './DisplayArtists.jsx';
import Selections from './Selections.jsx';
import { verifyPrimaryArtist, isDuplicate } from './helpers/verify';
import axios from 'axios';

const Search = () => {
  const dispatch = useDispatch();

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const checkDupe = useRef(false);
  const primaryArtistValid = useRef(true);

  const token = useSelector(state => state.spotifyApiReducer.token);
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const artists = useSelector(state => state.spotifyApiReducer.artists);

  const clearSearchResults = () => {
    setArtistName('');
    setSearchResults([]);
  }

  const handleOnChange = async (e) => {
    primaryArtistValid.current = true;

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

  const handleSelect = (e, img, url, popularity, uri, name) => {
    e.preventDefault();

    primaryArtistValid.current = true;
    checkDupe.current = false;

    const { id } = e.target;
    const data = { id, img, url, uri, name };

    const verify = verifyPrimaryArtist(popularity);
    const isDupe = isDuplicate(primaryArtist, artists, id);

    if (data) {
      clearSearchResults();

      if (!primaryArtist.id) {

        if (verify) {
          dispatch(setPrimaryArtist(data));
          return;
        }

        primaryArtistValid.current = false;
        dispatch(removePrimaryArtist());
        return;
      }

      if (isDupe) {
        checkDupe.current = true;
        return;
      }

      dispatch(addArtist(data));
    }
  };


  return (
    <div>
      {artists.length < 3 && <input type="text" value={artistName} name="artist" onChange={handleOnChange} />}

      {!primaryArtistValid.current && <span>Artist popularity is too high</span>}
      {checkDupe.current && <span>Artist has already been selected</span>}

      { /* Re factor to use material UI form field */ }

      {searchResults &&  <DisplayArtists artists={searchResults} handleSelect={handleSelect} />}
    </div>
  );
};

export default Search;