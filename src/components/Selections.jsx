import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtist, removePrimaryArtist } from '../redux/actions/spotifyApiActions';

const Selections = ({ primaryArtist }) => {
  const dispatch = useDispatch();

  const artists = useSelector(state => state.spotifyApiReducer.artists);

  const handlePrevious = (e) => {
    const { id } = e.target;

    if (artists.length === 0) {
      dispatch(removePrimaryArtist());
      return;
    }

    if (id === 'deleteArtist') {
      dispatch(removeArtist());
    }
  }

  return (
    <div>
      <h1>Selected Artists: </h1>
      <div id="primaryArtist">
        <img src={primaryArtist.img.url} />
        {artists.length && artists.map((artist) => (
          <img src={artist.img.url} />
        ))}
      </div>
      <button id="deleteArtist" onClick={(e) => handlePrevious(e)} />
    </div>
  );
};

export default Selections;