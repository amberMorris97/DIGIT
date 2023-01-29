import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import ReCAPTCHA from 'react-google-recaptcha';
import Reaptcha from 'reaptcha';

import Home from './Home.jsx';

const App = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const captchaRef = useRef(null);

  const verify = () => {
    captchaRef.current.getResponse()
        .then(res => {
          setCaptchaToken(res);
        });
  }

  if (captchaToken) {
    return ( <Home /> );
  }

  return (
    <Reaptcha
      sitekey={process.env.REACT_APP_SITE_KEY}
      ref={captchaRef}
      onVerify={verify}
    />
  );
}

export default App;