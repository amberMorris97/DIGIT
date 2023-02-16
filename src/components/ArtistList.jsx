import React from 'react';

const ArtistList = ({ artists }) => (
  <ol>
    {artists.length && artists.map((artist) => (
      <li>{artist.name}</li>
    ))}
  </ol>
);

export default ArtistList;