import axios from 'axios';
import {
  FETCH_TOKEN,
  PRIMARY_ARTIST,
  REMOVE_PRIMARY_ARTIST,
  ARTIST_ONE,
  REMOVE_ARTIST_ONE,
  ARTIST_TWO,
  REMOVE_ARTIST_TWO,
  ARTIST_THREE,
  REMOVE_ARTIST_THREE,
 } from '../types';

 export const fetchToken = () => async (dispatch, getState) => {
  const token = await axios.get('/fetchToken');
  if (token) return dispatch({ type: FETCH_TOKEN, payload: token.data });
};

export const setPrimaryArtist = (data) => async (dispatch, getState) => {
  return dispatch({ type: PRIMARY_ARTIST, payload: data });
};

export const removePrimaryArtist = (id) => async (dispatch, getState) => {
  return dispatch({ type: REMOVE_PRIMARY_ARTIST })
}

export const setArtistOne = (id) => (dispatch, getState) => {
  return dispatch({ type: ARTIST_ONE, payload: id })
};

export const setArtistTwo = (id) => (dispatch, getState) => {
  return dispatch({ type: ARTIST_TWO, payload: id })
};

export const setArtistThree = (id) => (dispatch, getState) => {
  return dispatch({ type: ARTIST_THREE, payload: id })
};

