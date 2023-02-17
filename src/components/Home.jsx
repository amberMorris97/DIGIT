import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Reaptcha from 'reaptcha';
import { Button, Paper } from '@mui/material/';
import { fetchToken, removeArtist } from '../redux/actions/spotifyApiActions';
import { submitArtist } from '../redux/actions/appApiActions';
import Search from './Search.jsx';
import Submissions from './Submissions.jsx';
import { ArtistSelections, PrimaryArtist } from './ArtistSelections.jsx';
import { ArtistProfileCard } from './ArtistProfileCard.jsx';
import ArtistList from './ArtistList.jsx';

const Home = () => {
  const dispatch = useDispatch();

  const artists = useSelector(state => state.spotifyApiReducer.artists);
  const { img, name, id, uri } = useSelector(state => state.spotifyApiReducer.primaryArtist);

  const submitArtistsSuccess = useSelector(state => state.appApiReducer.submitArtistSuccess);
  const submitArtistsFailure = useSelector(state => state.appApiReducer.submitArtistFailure);

  const [captchaToken, setCaptchaToken] = useState(null);
  const [view, setView] = useState(0);
  const [count, setCount] = useState(3);
  const [error, setError] = useState(false);

  const views = ['home', 'start', 'matching', 'submission'];

  const captchaRef = useRef(null);

  useEffect(async() => {
    dispatch(fetchToken());
    submitArtistsSuccess && setView(3);
    submitArtistsFailure && setError(true);
  }, [submitArtistsSuccess, submitArtistsFailure]);

  const verify = () => {
    captchaRef.current.getResponse()
        .then(res => {
          setCaptchaToken(res);
        });
  };

  const handleStart = () => setView(view + 1);

  const handleMatching = () => setView(view + 1);

  const handleSubmit = () => {
    const primaryArtist = { id, uri, name }
    const data = { primaryArtist, artists };

    dispatch(submitArtist(data));
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
    <section className="home-view">
      <Paper>
        In the last few years, the music industry has changed drastically due to social media greatly expanding music consumption. This has caused many smaller artists/musicians to progressively lose the ability to reach a broadened audience. Resolving this issue would benefit independent artists, as well as the over saturation within the music industry.
      </Paper>

      <Paper>
        The final product will be a web application that allows up and coming musicians to reach a broader audience by recommending these “emerging” artists based on results from a machine learning model.
      </Paper>

      {/* <Button disabled={!captchaToken} onClick={handleStart}>Next</Button> */}
      <Button onClick={handleStart}>Next</Button>
      <div className="captcha-container">
        <Reaptcha
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          onVerify={verify}
        />
      </div>
    </section>
  );

  const displayMatches = artists.length > 0 && ( <ArtistList artists={artists} /> );

  const startView = (
    <div className="search-section">
      <Search />
      {id && <PrimaryArtist id={id} img={img} name={name} />}
      <Button variant="text" disabled={!id} onClick={handleMatching}>Next</Button>
    </div>
  );

  const matchView = (
    <div className="matching-section">
      {count > 0 &&
      <>
        {count === 1 ? <h4>Choose {count} more artist that matches this vibe</h4> : <h4>Choose {count} more artists that match this vibe</h4>}
        <Search view={'matching'} setCount={() => setCount(count - 1)} />
        <ArtistProfileCard id={id} img={img} name={name} view="matching" />
        {displayMatches}
      </>}

      {count <= 0 &&
      <>
        {error ? <h4>Error submitting artists, please try again.</h4> : <h4 className="ready-submit-title">Ready to submit?</h4>}
        <Button variant="text" onClick={handleSubmit}>Submit</Button>
        <ArtistProfileCard id={id} img={img} name={name} />
        {displayMatches}
      </>}

      <Button className="previous-btn" variant="text" onClick={handlePrevious}>Previous</Button>
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