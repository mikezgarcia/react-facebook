import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBigYIXWY8mmrcgYcG8XTk75Thv3rwF6Mg",
  authDomain: "react-facebook-f4341.firebaseapp.com",
  projectId: "react-facebook-f4341",
  storageBucket: "react-facebook-f4341.appspot.com",
  messagingSenderId: "862923414193",
  appId: "1:862923414193:web:db77b61416234b5cfc6090",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const storage = firebase.storage();

export { db, auth, provider, storage };
