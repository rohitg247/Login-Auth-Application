// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJWOZxeCfImodvs3ZgZEPb4Xn4DM0rLeY",
  authDomain: "auth-a3bae.firebaseapp.com",
  projectId: "auth-a3bae",
  storageBucket: "auth-a3bae.appspot.com",
  messagingSenderId: "410770609772",
  appId: "1:410770609772:web:fa86146b238d0d18282a49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();


