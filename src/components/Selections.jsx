import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeArtist, removePrimaryArtist } from '../redux/actions/spotifyApiActions';
import { submitArtist } from '../redux/actions/appApiActions';
import { Button } from '@mui/material';


/** refactor to use Material UI modal or similar */

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { primaryArtist, artists };

    dispatch(submitArtist(data));
  }

  return (
    <div>
      <h1>Selected Artists: </h1>
      <div>
        {/** add alt="" to img elements */}
        {/** add target to img elements */}
        <img src={primaryArtist.img.url} />
        {artists.length && artists.map((artist) => (
          <img src={artist.img.url} />
        ))}
      </div>
      <button id="deleteArtist" onClick={(e) => handlePrevious(e)} />
      {artists.length === 3 && <Button variant="text" onClick={(e) => handleSubmit(e)}>Submit</Button>}
    </div>
  );
};

export default Selections;