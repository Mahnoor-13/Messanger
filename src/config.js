import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDayE4OnB7yqu7D4LPa_3ad0U1BppkqyuA",
  authDomain: "messenger-cbe39.firebaseapp.com",
  databaseURL: "https://messenger-cbe39-default-rtdb.firebaseio.com",
  projectId: "messenger-cbe39",
  storageBucket: "messenger-cbe39.appspot.com",
  messagingSenderId: "135892479749",
  appId: "1:135892479749:web:cf592ac4d16a5ff054116c",
  measurementId: "G-3XFCJ4KJTC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
