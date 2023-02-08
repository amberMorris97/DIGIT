import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken,
  removePrimaryArtist,
  updatePrimaryArtist,
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
  const userStep = useSelector(state => state.spotifyApiReducer.userStep);

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

    const verifyAndSet = () => {
      if (verify && !primaryArtist.id) {
        dispatch(setPrimaryArtist(data));
      } else if (verify && primaryArtist.id && userStep === 'start') {
        dispatch(updatePrimaryArtist(data));
        dispatch(removeArtist());
      } else if (!verify) {
        primaryArtistValid.current = false;
      }
    }

    if (data) {
      clearSearchResults();

      verifyAndSet();

      if (isDupe) {
        checkDupe.current = true;
        return;
      }

      if (userStep === 'matching') {
        dispatch(addArtist(data));
      }
    }
  }


  return (
    <div>
      {artists.length < 4 && <input type="text" value={artistName} name="artist" onChange={handleOnChange} />}

      {!primaryArtistValid.current && artists.length <= 1 && <span>Artist popularity is too high</span>}
      {checkDupe.current && <span>Artist has already been selected</span>}

      { /* Re factor to use material UI form field */ }

      {searchResults &&  <DisplayArtists artists={searchResults} handleSelect={handleSelect} />}
    </div>
  );
};

export default Search;