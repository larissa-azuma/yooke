import { auth } from "./firebase";

import {createUserWithEmailAndPassword,GoogleAuthProvider,doSignInwithGoogle} from "firebase/auth"

export const doCreatUserwithEmailand Password = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
};

export const doSignInwithGoogle =async () => {
const proovider = new GoogleAuthProvider();
const result =await signInWithPopup(auth,proovider);
//result.user
return result
};

export const doSignOut =()=>{
    return auth.signOut();
};

export const doPasswordReset =(email)=>{
    return updatePasswordResetEmail(auth,email);
};

export const doPasswordChange =(password) =>{
    return updatePassword(auth,currentUser,password);
};

export const doSendEmailVerification = () =>{
    return doSendEmailVerification(auth.currentUser,{
        url:`${window.location.origin}/home`,
    });
};
