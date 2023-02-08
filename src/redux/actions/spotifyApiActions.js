import axios from 'axios';
import {
  FETCH_TOKEN,
  PRIMARY_ARTIST,
  REMOVE_PRIMARY_ARTIST,
  REMOVE_ARTIST,
  ADD_ARTIST,
  UPDATE_PRIMARY_ARTIST,
  UPDATE_USER_STEP,
 } from '../types';

 export const fetchToken = () => async (dispatch, getState) => {
  const token = await axios.get('/fetchToken');
  if (token) return dispatch({ type: FETCH_TOKEN, payload: token.data });
};

export const setPrimaryArtist = (data) => async (dispatch, getState) => {
  return dispatch({ type: PRIMARY_ARTIST, payload: data });
};

export const removePrimaryArtist = () => async (dispatch, getState) => {
  return dispatch({ type: REMOVE_PRIMARY_ARTIST });
};

export const addArtist = (data) => async (dispatch, getState) => {
  return dispatch({ type: ADD_ARTIST, payload: data});
};

export const removeArtist = () => (dispatch, getState) => {
  return dispatch({ type: REMOVE_ARTIST });
};

export const updatePrimaryArtist = (data) => async (dispatch, getState) => {
  return dispatch({ type: UPDATE_PRIMARY_ARTIST, payload: data });
};

export const updateUserStep = (step) => async (dispatch, getState) => {
  return dispatch({ type: UPDATE_USER_STEP, payload: step })
}

