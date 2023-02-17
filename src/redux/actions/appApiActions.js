import axios from 'axios';
import {
  SUBMIT_ARTISTS_SUCCESS,
  SUBMIT_ARTISTS_FAILURE,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
 } from '../types';

 export const submitArtist = (data) => async (dispatch, getState) => {
  const { primaryArtist, artists } = data;
  const { id, uri, name } = primaryArtist;

  const body = { id, uri, name, artists };

  const response = await axios.post('/submitArtist', body);

  if (response.status === 200) {
    return dispatch({ type: SUBMIT_ARTISTS_SUCCESS, payload: true });
  }

  return dispatch({ type: SUBMIT_ARTISTS_FAILURE, payload: true });
};

export const submitEmail = (email) => async (dispatch, getState) => {

  const response = await axios.post('/submitEmail', email);

  if (response.status === 200) {
    return dispatch({ type: SUBMIT_EMAIL_SUCCESS, payload: true });
  }
};

