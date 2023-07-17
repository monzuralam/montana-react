import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

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
// provider
const provider = new GoogleAuthProvider();
// custom parameters
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
