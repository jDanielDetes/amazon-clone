import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5p6QC03_H9Ahg-H7TBQ5ANT03swnx9Ww",
  authDomain: "clone-ac104.firebaseapp.com",
  databaseURL: "https://clone-ac104.firebaseio.com",
  projectId: "clone-ac104",
  storageBucket: "clone-ac104.appspot.com",
  messagingSenderId: "283719559691",
  appId: "1:283719559691:web:5609b491ef340b2c5d350e",
  measurementId: "G-YT1VQPMF8E",
});

const auth = firebase.auth();

export { auth };
