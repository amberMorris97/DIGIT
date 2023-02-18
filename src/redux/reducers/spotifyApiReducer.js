import {
  FETCH_TOKEN,
  PRIMARY_ARTIST,
  UPDATE_PRIMARY_ARTIST,
  REMOVE_PRIMARY_ARTIST,
  ADD_ARTIST,
  REMOVE_ARTIST
 } from '../types';

const initialState = {
  token: '',
  primaryArtist: [],
  artists: [],
  userStep: 'home',
};

const spotifyApiReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TOKEN: {
      return {
        ...state,
        token: action.payload,
      }
    }
    case PRIMARY_ARTIST: {
      return {
        ...state,
        primaryArtist: action.payload,
      }
    }
    case REMOVE_PRIMARY_ARTIST: {
      return {
        ...state,
        primaryArtist: [],
      }
    }
    case ADD_ARTIST: {
      return {
        ...state,
        artists: [...state.artists, action.payload],
      }
    }
    case REMOVE_ARTIST: {
      return {
        ...state,
        artists: state.artists.splice(0, state.artists.length - 1),
      }
    }
    case UPDATE_PRIMARY_ARTIST: {
      return {
        ...state,
        primaryArtist: action.payload,
      }
    }
    default:
      return {
        ...state,
      }
  }
};

export default spotifyApiReducer;