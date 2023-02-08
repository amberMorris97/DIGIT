import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Search from './Search.jsx';
// import { updateUserStep } from '../redux/actions/spotifyApiActions';
// import Submissions from './Submissions.jsx';

// export const FeaturedArtistSection = () => {
//   const artistsLength = useSelector(state => state.spotifyApiReducer.artists).slice(1).length;

//   const count = 3 - artistsLength;

//   return (
//     <div className="matching-section">
//       {count > 0 &&
//       <>
//         <h4>Choose {count} more artists that match this vibe</h4>
//         <Search />
//         <ArtistSelections />
//       </>}

//       {count <= 0 &&
//       <>
//         <h4>Ready to submit?</h4>
//         <ArtistSelections />
//         <Button variant="text">Submit</Button>
//       </>}
//     </div>
//   );
// }

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
}