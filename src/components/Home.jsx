import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken,
  removeArtist,
  updateUserStep } from '../redux/actions/spotifyApiActions';
import Reaptcha from 'reaptcha';
import Search from './Search.jsx';
import { YouChoseSection } from './ChoosePrimaryArtist.jsx';
import { ArtistSelections } from './ChooseMatchingArtists.jsx';
import Submissions from './Submissions.jsx';

const Home = () => {
  const dispatch = useDispatch();

  const { img, name, id } = useSelector(state => state.spotifyApiReducer.primaryArtist);

  const [captchaToken, setCaptchaToken] = useState(null);
  const [view, setView] = useState(0);
  const [count, setCount] = useState(3);

  const views = ['home', 'start', 'matching', 'submission'];

  const captchaRef = useRef(null);

  useEffect(async() => {
    dispatch(fetchToken());
  }, []);

  const verify = () => {
    captchaRef.current.getResponse()
        .then(res => {
          setCaptchaToken(res);
        });
  };

  const handleStart = () => setView(view + 1);

  const handleMatching = () => setView(view + 1);

  const handleSubmit = () => {
    setView('submission');

    // dispatch submission sent
    // check for success/fail redux state

    // error handling for failed submissions
  }

  const handlePrevious = () => {
    if (views[view] === 'matching') {
      if (count === 3) {
        setView(1);
        dispatch();
      } else {
        dispatch(removeArtist());
        setCount(count + 1);
      }
    }
  }

  /**-----------------COMPONENTS------------------*/
  const homeView = (
    <div className="home-page">
      <p className="paragraph-1">dummy text</p>
      <p className="paragraph-2">dummy text</p>
      <Button onClick={handleStart}>Next</Button>
      {/* <Button disabled={!captchaToken} onClick={handleClick}>Next</Button> */}
      {/* <div className="captcha-container">
        <Reaptcha
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          onVerify={verify}
        />
      </div> */}
    </div>
  );

  const startView = (
    <div className="search-section">
      <h4>Search for the artist you want to feature</h4>
      <Search />
      {id && <YouChoseSection img={img} name={name} />}
      <Button variant="text" disabled={!id} onClick={handleMatching}>Next</Button>
    </div>
  );

  const matchView = (
    <div className="matching-section">
      {count > 0 &&
      <>
        <h4>Choose {count} more artists that match this vibe</h4>
        <Search view={'matching'} setCount={() => setCount(count - 1)} />
        <ArtistSelections />
      </>}

      {count <= 0 &&
      <>
        <h4>Ready to submit?</h4>
        <ArtistSelections />
        <Button variant="text" onClick={handleSubmit}>Submit</Button>
      </>}

      <Button variant="text" onClick={handlePrevious}>Previous</Button>
    </div>
  );

  const submissionView = (
    <Submissions />
  );

  /**-------------------END------------------------*/

  if (views[view] === 'home') return homeView;

  if (views[view] === 'start') return startView;

  if (views[view] === 'matching') return matchView;

  if (views[view] === 'submission') return submissionView;

};

export default Home;