import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Reaptcha from 'reaptcha';
import { Button, Paper } from '@mui/material/';
import { fetchToken, removeArtist } from '../redux/actions/spotifyApiActions';
import Search from './Search.jsx';
import Submissions from './Submissions.jsx';
import { ArtistSelections, PrimaryArtist } from './ArtistSelections.jsx';

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
    /* <div className="home-page">
    //   <Paper variant="outlined" className="paragraph-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

    // </Paper>
    //   <p className="paragraph-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

    // </p>
      // <Button onClick={handleStart}>Next</Button>
      {/* <Button disabled={!captchaToken} onClick={handleClick}>Next</Button> */
      /* <div className="captcha-container">
        <Reaptcha
          sitekey={process.env.REACT_APP_SITE_KEY}
          ref={captchaRef}
          onVerify={verify}
        />
      </div> */
    // </div> */


  const startView = (
    <div className="search-section">
      <Search />
      {id && <PrimaryArtist img={img} name={name} />}
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