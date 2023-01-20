import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Selections = ({ primaryArtist }) => {
  const artistOne = useSelector(state => state.spotifyApiReducer.artistOne);
  const artistTwo = useSelector(state => state.spotifyApiReducer.artistTwo);
  const artistThree = useSelector(state => state.spotifyApiReducer.artistThree);

  return (
    <div>
      <h1>Selected Artists: </h1>
        <img src={primaryArtist.img.url} />
        {artistOne.img && <img src={artistOne.img.url} />}
        {artistTwo.img && <img src={artistTwo.img.url} />}
        {artistThree.img && <img src={artistThree.img.url} />}
    </div>
  );
};

export default Selections;