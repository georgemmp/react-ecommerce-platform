import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBvxnH8lfRPGRpZF5WDthwumMkzrZN0qeo",
  authDomain: "crwn-db-b43e0.firebaseapp.com",
  databaseURL: "https://crwn-db-b43e0.firebaseio.com",
  projectId: "crwn-db-b43e0",
  storageBucket: "crwn-db-b43e0.appspot.com",
  messagingSenderId: "974167251742",
  appId: "1:974167251742:web:bf2508816533e3f438470f",
  measurementId: "G-2R8EY07K1E"
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
