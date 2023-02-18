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
        For artists, successfully promoting their music on social media, more often than not, requires them to already be or become a full-time content creator. This makes it difficult for artists to align their focus. A good artist shouldn&apos;t have to rely on making non-musical content to reach their desired audience.
      </Paper>

      <Paper>
      The final product will be an application that supports independent artists by using a Machine Learning model to recommend them to users based on a variety of data. The purpose of this website is to collect a starter set of data to later train the model with. To be a contributor, you&apos;ll begin by selecting the up & coming artist you&apos;d like to promote. &#40;Of course, it can be you!&#41;. The next step is to select 3 more artists you believe share the same audience as the first artist you chose, and that&apos;s it!

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