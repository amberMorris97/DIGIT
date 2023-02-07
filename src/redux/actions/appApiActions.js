import axios from 'axios';
import {
  SUBMIT_ARTISTS_SUCCESS,
  SUBMIT_ARTISTS_FAILURE,
  SUBMIT_EMAIL_SUCCESS,
  SUBMIT_EMAIL_FAILURE,
 } from '../types';

 export const submitArtist = (data) => async (dispatch, getState) => {
  const { primaryArtist, artists } = data;
  const { id, url, uri, name } = primaryArtist;

  const body = { id, url, uri, name, artists };

  const response = await axios.post('/submitArtist', body);

  console.log(response);

  // if (response.status === 200) {
  //   return dispatch({ type: SUBMIT_ARTISTS_SUCCESS, payload: true });
  // }

  // return dispatch({ type: SUBMIT_ARTISTS_FAILURE, payload: true });
};

