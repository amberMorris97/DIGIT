import { SUBMIT_ARTISTS_SUCCESS, SUBMIT_ARTISTS_FAILURE, SUBMIT_EMAIL_SUCCESS, SUBMIT_EMAIL_FAILURE } from '../types';

const initialState = {
  submitArtistSuccess: false,
  submitArtistFailure: false,
  submitEmailSuccess: false,
  submitEmailFailure: false,
};

const appApiReducer = (state = initialState, action) => {
  switch(action.type) {
    case SUBMIT_ARTISTS_SUCCESS: {
      return {
        ...state,
        submitArtistSuccess: true
      }
    }
    case SUBMIT_ARTISTS_FAILURE: {
      return {
        ...state,
        submitArtistFailure: true,
      }
    }
    case SUBMIT_EMAIL_SUCCESS: {
      return {
        ...state,
        submitEmailSuccess: true,
      }
    }
    case SUBMIT_EMAIL_FAILURE: {
      return {
        ...state,
        submitEmailFailure: true
      }
    }
    default:
      return {
        ...state,
      }
  }
};

export default appApiReducer;