import React, { useState } from 'react';
import { Input, InputLabel, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { submitEmail } from '../redux/actions/appApiActions';

const Submissions = () => {
  const [email, setEmail] = useState('');

  const handleOnChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(submitEmail(email));
  }

  return (
    <div className="submission-view">
    <h1>Thanks for submitting!</h1>
      <InputLabel htmlFor="name">Optionally submit your email for product updates</InputLabel>
      <Input
        id="email-submission"
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Submissions;