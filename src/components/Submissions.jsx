import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { submitEmail } from '../redux/actions/appApiActions';

const Submissions = () => {
  const dispatch = useDispatch();

  const submitEmailSuccess = useSelector(state => state.appApiReducer.submitEmailSuccess);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const emailValidator = /^\w+([.-]?\w+)+@\w+([.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.match(emailValidator)) {
      setEmailError(true);
      return;
    }

    dispatch(submitEmail({ email }));

    setEmail('');
  }

  return (
    <div className="submission-view">
    <h3>Thanks for submitting!</h3>
    <h4>Optionally add your email for product updates!</h4>
    {!submitEmailSuccess ?
    <>
      <TextField
        id="outlined-controlled"
        error={emailError}
        value={email}
        helperText="Invalid email."
        onChange={handleOnChange}
      />
      <Button variant="text" onClick={handleSubmit}>Submit</Button>
    </> : <h3>Thanks, you're all set!</h3>}
    </div>
  )
}

export default Submissions;