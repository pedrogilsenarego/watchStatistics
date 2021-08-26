import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyA-fXgytx05E72388uKC2M1L1StPtHxUzc",
    authDomain: "fir-auth0-9b4cb.firebaseapp.com",
    projectId: "fir-auth0-9b4cb",
    storageBucket: "fir-auth0-9b4cb.appspot.com",
    messagingSenderId: "531249981305",
    appId: "1:531249981305:web:27efb67103ea51063731a8",
    measurementId: "G-67HVFRDG0V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase;