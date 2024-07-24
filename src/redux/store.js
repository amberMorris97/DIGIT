import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './apiSlice';
import authReducers from './features/authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducers
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export default store;

 // import { createStore, applyMiddleware } from 'redux';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// // import thunk from 'redux-thunk';
// // import reducers from './reducers/index.js';
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './features/userSlice';

// // const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// });

// export default store;