import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveUser } from './userSlice';

const SetUserName = () => {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleNext = () => {
    // history.push(choose artists)
  };

  return (
    <div>
      <h2>Step 1: Set Username</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
