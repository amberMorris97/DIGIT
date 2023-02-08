// import React, { useState, useEffect, useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
// import { Button } from '@mui/material';
// import {
//   setPrimaryArtist,
//   addArtist,
//   fetchToken } from '../redux/actions/spotifyApiActions';
// import Reaptcha from 'reaptcha';
// import Search from './Search.jsx';
// import DisplayArtists from './DisplayArtists.jsx';
// import Selections from './Selections.jsx';
// import { SearchSection } from './ChoosePrimaryArtist.jsx';
import { ArtistSelections } from './ChooseMatchingArtists.jsx';


// const Home = () => {
//   const dispatch = useDispatch();

//   const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);

//   const [artistName, setArtistName] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [captchaToken, setCaptchaToken] = useState(null);
//   const [step, setStep] = useState('home');

//   const captchaRef = useRef(null);

//   useEffect(async() => {
//     dispatch(fetchToken());
//   }, []);

//   const verify = () => {
//     captchaRef.current.getResponse()
//         .then(res => {
//           setCaptchaToken(res);
//         });
//   };

//   const handleClick = () => {
//     if (step === 'home') {
//       setStep('start');
//     };

//     if (step === 'start') {
//       setStep('matching');
//     }
//   }

//   if (primaryArtist.id && )

//   if (step === 'start') {
//     return (
//       <SearchSection primaryArtist={primaryArtist} handleClick={handleClick} />
//     );
//   }

//   if (!primaryArtist.id) {
//     return (
//       <div className="home-page">
//         <p className="paragraph-1">dummy text</p>
//         <p className="paragraph-2">dummy text</p>
//         <Button onClick={handleClick}>Next</Button>
//         {/* <Button disabled={!captchaToken} onClick={handleClick}>Next</Button> */}
//         {/* <div className="captcha-container">
//           <Reaptcha
//             sitekey={process.env.REACT_APP_SITE_KEY}
//             ref={captchaRef}
//             onVerify={verify}
//           />
//         </div> */}
//       </div>
//     );
//   }

//   if (step === 'matching' && primaryArtist.id) {
//     return (
//       <FeaturedArtistSection />
//     );
//   }
// };

// export default Home;

import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';
import {
  setPrimaryArtist,
  addArtist,
  fetchToken,
  updateUserStep } from '../redux/actions/spotifyApiActions';
import Reaptcha from 'reaptcha';
import Search from './Search.jsx';
import DisplayArtists from './DisplayArtists.jsx';
import Selections from './Selections.jsx';
import { YouChoseSection } from './ChoosePrimaryArtist.jsx';
import { FeaturedArtistSection } from './ChooseMatchingArtists.jsx';


const Home = () => {
  const dispatch = useDispatch();

  const primaryArtist = useSelector(state => state.spotifyApiReducer.primaryArtist);
  const userStep = useSelector(state => state.spotifyApiReducer.userStep);

  const { img, name, id } = primaryArtist;

  const [artistName, setArtistName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [view, setView] = useState('home');
  const [count, setCount] = useState(3);

  const captchaRef = useRef(null);

  useEffect(async() => {
    dispatch(fetchToken());
  }, [userStep]);

  const verify = () => {
    captchaRef.current.getResponse()
        .then(res => {
          setCaptchaToken(res);
        });
  };

  const handleStart = () => setView('start');

  const handleMatching = () => setView('matching');

  const handleSubmit = () => setView('submission');



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
      <Button variant="text" disabled={!primaryArtist.id} onClick={handleMatching}>Next</Button>
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
        <Button variant="text">Submit</Button>
      </>}
    </div>
  );

  // if (userStep === 'home') {
  //   return (
  //     <div className="home-page">
  //       <p className="paragraph-1">dummy text</p>
  //       <p className="paragraph-2">dummy text</p>
  //       <Button onClick={handleClick}>Next</Button>
  //       {/* <Button disabled={!captchaToken} onClick={handleClick}>Next</Button> */}
  //       {/* <div className="captcha-container">
  //         <Reaptcha
  //           sitekey={process.env.REACT_APP_SITE_KEY}
  //           ref={captchaRef}
  //           onVerify={verify}
  //         />
  //       </div> */}
  //     </div>
  //   );
  // }

  // if (userStep === 'start') {
  //   return (
  //     <SearchSection primaryArtist={primaryArtist} />
  //   );
  // }

  // if (userStep === 'matching') {
  //   return <FeaturedArtistSection />
  // }

  if (view === 'home') return homeView;

  if (view === 'start') return startView;

  if (view === 'matching') return matchView;

  if (view === 'submission') return homeView;

};

export default Home;