import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import Search from './Search.jsx';
import { updateUserStep } from '../redux/actions/spotifyApiActions';

// export const SearchSection = ({ primaryArtist }) => {
//   const dispatch = useDispatch();

//   const { id, img, name } = primaryArtist;

//   const handleClick = () => {
//     dispatch(updateUserStep('matching'));
//   }

//   return (
//     <div className="search-section">
//       <h4>Search for the artist you want to feature</h4>
//       <Search />
//       {id && <YouChoseSection { img, name } />}
//       <Button variant="text" onClick={handleClick}>Next</Button>
//     </div>
//   );
// };

export const YouChoseSection = ({ img, name }) => {

  return (
    <div className="primary-artist-choice-container">
      <h4>You chose:</h4>
      <br />
      <h4>{name}</h4>
      <img src={img.url} />
    </div>
  );
};
