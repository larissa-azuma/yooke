import React, {useContext,useState,useEffect} from "react";
import { auth } from "../../firebase/firebase";
import {onAuthStateChanged} from "firebase/auth"


const AuthContext =React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider ({children}){
   const[currentUser,setCurrentUser] = userState(null);
   const[userLoggedIn,setUserLoggedIn] =userstate(false);
   const[loading,setLoading]=userState(true);

   useEffect (() =>{
    const unsubscribe = onAuthStateChanged(auth,initializeUser);
    return unsubscribe
      },[]);
    
      async function initializeUser(user) {
       if (user) {
        setCurrentUser({...user});
        setUserLoggedIn(true);
       } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
       }
        setLoading(false);
      }
    const value={
        currentUser,
        userLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value ={value}>
            {!loading && children}
           </ AuthContext.Provider>
    )

}