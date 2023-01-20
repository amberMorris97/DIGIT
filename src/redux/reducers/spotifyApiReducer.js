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
const initialState = {
  token: '',
  primaryArtist: [],
  artistOne: [],
  artistTwo: [],
  artistThree: [],
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
    case ARTIST_ONE: {
      return {
        ...state,
        artistOne: action.payload,
      }
    }
    case REMOVE_ARTIST_ONE: {
      return {
        ...state,
        artistOne: [],
      }
    }
    case ARTIST_TWO: {
      return {
        ...state,
        artistTwo: action.payload,
      }
    }
    case REMOVE_ARTIST_TWO: {
      return {
        ...state,
        artistTwo: [],
      }
    }
    case ARTIST_THREE: {
      return {
        ...state,
        artistThree: action.payload,
      }
    }
    case REMOVE_ARTIST_THREE: {
      return {
        ...state,
        artistThree: [],
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default spotifyApiReducer;