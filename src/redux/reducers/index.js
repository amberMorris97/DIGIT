import { combineReducers } from 'redux';
import spotifyApiReducer from './spotifyApiReducer';
import appApiReducer from './appApiReducer';

const reducers = combineReducers({
  spotifyApiReducer,
  appApiReducer,
});

export default reducers;