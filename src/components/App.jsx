import React from 'react';
import Header from './Header.jsx';
import Home from './Home.jsx';
import SignUp from './SignUp.jsx';
import Upload from './upload/Upload.jsx';
import { BrowserRouter as Router, Route, useHistory, Switch } from 'react-router-dom';


import {auth, provider, signInWithPopup } from '../public/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveUser, setUserLogOutState, selectUserEmail, selectUserName } from '../redux/reducers/userSlice';
import { fetchUser, registerUser } from '../redux/middleware/userMiddleware';

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const userName = useSelector(selectUserName);
  // const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      const user = dispatch(fetchUser(auth.currentUser.email));
      user ?
        dispatch(setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email
        })) : history.push('/registration');
    }).catch((err) => alert(err.message))
  }

  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogOutState());
    }).catch((err) => alert(err.message));
  }

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {/* Define the /register route and associate it with the SetUsername component */}
          <Route path="/signup" component={SignUp} />
          <Route path="/upload" component={Upload} />
          {/* Other routes */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;