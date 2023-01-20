import React, { useState, useEffect } from 'react';

const DisplayArtists = ({ artists, handleSelect }) => {


  return (
    <div>
      {artists.map((artist, idx) => (
        <form>
          <img id={artist.id }src={artist.images[0]?.url} />
          <input type="submit" id={artist.id} value={`Select ${artist.name}`} onClick={(e) => handleSelect(e)}/>
        </form>
      ))}
  </div>);
}

export default DisplayArtists;