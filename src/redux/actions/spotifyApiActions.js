import axios from 'axios';
import { FETCH_TOKEN, PRIMARY_ARTIST } from '../types';

export const fetchToken = () => async (dispatch, getState) => {
  const token = await axios.get('/fetchToken');
  if (token) return dispatch({ type: FETCH_TOKEN, payload: token.data });
};

export const setPrimaryArtist = (id) => async (dispatch, getState) => {
  return dispatch({ type: PRIMARY_ARTIST, payload: id });
};

