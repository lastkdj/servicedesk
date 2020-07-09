import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-functions";
import "firebase/firebase-storage";

const FirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCHbIDRSeaOsoolBocKeJK7GHReGgn92FE",
  authDomain: "servicedesk-bd429.firebaseapp.com",
  databaseURL: "https://servicedesk-bd429.firebaseio.com",
  projectId: "servicedesk-bd429",
  storageBucket: "servicedesk-bd429.appspot.com",
  messagingSenderId: "133454222133",
  appId: "1:133454222133:web:8482187b3793596cbc327c",
  measurementId: "G-9D1X8TMZNN",
});

export default FirebaseApp;
