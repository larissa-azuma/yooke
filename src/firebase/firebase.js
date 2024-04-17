import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


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


  export  {app,auth};