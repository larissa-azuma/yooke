import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCn-nryrZiwtuPBN_nPgWzBFcPh04uLBQo",
  authDomain: "yooke-passenger.firebaseapp.com",
  projectId: "yooke-passenger",
  storageBucket: "yooke-passenger.appspot.com",
  messagingSenderId: "901249511162",
  appId: "1:901249511162:web:cb53acbfac4d530c5d6343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
  export const googleProvider = new GoogleAuthProvider();

  export const db =getFirestore(app)