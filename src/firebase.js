// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgGc_G8hlta6J6mMtMEjeUjbFvcVTpxd8",
    authDomain: "challenge-5fecb.firebaseapp.com",
    projectId: "challenge-5fecb",
    storageBucket: "challenge-5fecb.appspot.com",
    messagingSenderId: "275602728255",
    appId: "1:275602728255:web:1b668378dfa1ae824c9f8a",
    measurementId: "G-F5VL9J78F3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };