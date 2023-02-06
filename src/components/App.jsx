import React, { useState, useRef } from 'react';
import Reaptcha from 'reaptcha';
import CaptchaView from './CaptchaView.jsx';

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

  // if (captchaToken) {
    return ( <Home /> );
  // }

  return (
    <div>
      <CaptchaView />
      <Reaptcha
        sitekey={process.env.REACT_APP_SITE_KEY}
        ref={captchaRef}
        onVerify={verify}
      />
    </div>
  );
}

export default App;