import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3Q6r-xuINfyT7lGAl4SQpRcXmwliV7ns",
  authDomain: "crwn-clothing-db-3659b.firebaseapp.com",
  projectId: "crwn-clothing-db-3659b",
  storageBucket: "crwn-clothing-db-3659b.appspot.com",
  messagingSenderId: "978723066707",
  appId: "1:978723066707:web:b67396f676ea0ff238c7a6",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }

    return userDocRef;
  }

  console.log(userDocRef);
};
