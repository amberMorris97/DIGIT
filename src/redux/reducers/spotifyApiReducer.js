import { FETCH_TOKEN, PRIMARY_ARTIST} from '../types';

const initialState = {
  token: '',
  primaryArtist: '',
  artistOne: '',
  artistTwo: '',
  artistThree: '',
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
    default:
      return {
        ...state,
      }
  }
}

export default spotifyApiReducer;