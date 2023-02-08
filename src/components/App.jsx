import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reaptcha from 'reaptcha';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Submissions from './Submissions.jsx';
import { SearchSection } from './ChoosePrimaryArtist.jsx';
import { FeaturedArtistSection } from './ChooseMatchingArtists.jsx';
import { fetchToken, updateUserStep } from '../redux/actions/spotifyApiActions';

const App = () => {

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;