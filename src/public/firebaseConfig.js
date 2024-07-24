// // import firebase from 'firebase'
// const firebase = require('firebase');
// const firebaseui = require('firebaseui');

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const config = {
  apiKey: "AIzaSyBuDBX58ZKJ13SI6POreSSJbqalTljkKWU",
  authDomain: "dig-it-50596.firebaseapp.com",
  projectId: "dig-it-50596",
  storageBucket: "dig-it-50596.appspot.com",
  messagingSenderId: "988871020984",
  appId: "1:988871020984:web:ad7c7aba931f30cb54ff4d",
  measurementId: "G-TPQG8RCLFQ"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = initializeApp(config);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
/**provider.addScope()
 * auth.languageCode()
 * provider.setCustomParameters({})
 *
*/
