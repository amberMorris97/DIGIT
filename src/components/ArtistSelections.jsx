import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardMedia, CaButton, Typography } from '@mui/material';

import { ArtistProfileCard } from './ArtistProfileCard.jsx';

export const PrimaryArtist = ({ id, img, name }) => {
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);

  return (
    <div className="primary-artist-choice-container">
      <h4>You chose:</h4>
      <ArtistProfileCard id={id} img={img} name={name} />
      <h4>{name}</h4>
    </div>
  );
};

export const ArtistSelections = () => {
  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const artists = useSelector(state => state.spotifyApiReducer.artists);

  return (
    <div className="artist-selections-section">
      <h4>{primaryArtist.name}</h4>
      <img src={primaryArtist.img.url} />
      <div className="matching-artists-container">
        <ol>
          {artists.map((artist) => (
            <li>{artist.name}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};