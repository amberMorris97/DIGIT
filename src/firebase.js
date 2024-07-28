// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGupZPYlsXZ-Ou6E8AHmxk79oIrWZFno",
  authDomain: "dig-it-c748f.firebaseapp.com",
  projectId: "dig-it-c748f",
  storageBucket: "dig-it-c748f.appspot.com",
  messagingSenderId: "476693322570",
  appId: "1:476693322570:web:0bab1b1d33a8b240f5bfb3",
  measurementId: "G-5K7NM3CEKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

const firebaseInit = { app, analytics, auth, db };

export { app, analytics, auth, db };