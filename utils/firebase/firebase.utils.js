import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyUculOH6UdEOQQrjHWM15gUMxjDMosMc",
  authDomain: "montana-react-db.firebaseapp.com",
  projectId: "montana-react-db",
  storageBucket: "montana-react-db.appspot.com",
  messagingSenderId: "719604224816",
  appId: "1:719604224816:web:17c64350c2a860e244aef5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// app check
const appCheck = initializeAppCheck(firebaseApp, {
  provider: new ReCaptchaV3Provider("6LemizEnAAAAANk0_KfNVJhQpB3kvbAYc83NIhbb"),
  isTokenAutoRefreshEnabled: true,
});
// provider
const googleProvider = new GoogleAuthProvider();
// custom parameters
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, googleProvider);
};

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // check exists user
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
  }
};
