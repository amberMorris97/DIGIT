import { combineReducers } from 'redux';
import spotifyApiReducer from './spotifyApiReducer';

const reducers = combineReducers({
  spotifyApiReducer,
});

export default reducers;