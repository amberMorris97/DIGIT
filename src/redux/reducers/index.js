import { combineReducers } from 'redux';
import spotifyApiReducer from './spotifyApiReducer';
import appApiReducer from './appApiReducer';
import userReducer from './userSlice'

const reducers = combineReducers({
  spotifyApiReducer,
  appApiReducer,
  userReducer
});

export default reducers;