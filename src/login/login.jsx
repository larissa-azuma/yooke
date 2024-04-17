import React,{useState} from "react"
import{Navigate,Link} from "react-router-dom"
import {doSignInWithEmailAndPassword,doSignInwithGoogle} from "../firebase/auth"
import { useAuth } from "../contexts/authcontexts"

const Login =()=>{
const {userLoggedIn} =useAuth()


    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
     const [useSigningIn, setuseSigningIn]= useState(false);
     const [errorMessage, setErrorMesaage]= useState("");

     const onSubmit =async (e) =>{
        e.preventDeflaut()
        if(!useSigningIn){
            setuseSigningIn(true)
            await doSignInWithEmailAndPassword(email,password)
        }
     }

     const onGoogleSignIn =(e) =>{
        e.preventDeflaut()
        if(!useSigningIn){
            setuseSigningIn(true)
            doSignInwithGoogle() .catch(err =>{
                setuseSigningIn(false)
            }) 
        }
     }

     return(
        <div>
            {userLoggedIn &&(<Navigate to={'/home'} replace={true}/>})

            /* <main className="w-full h-screen flax self -center place -content-center place-items-center">
                <div className="w-96 text -gray-600 space-y-5 p-4 shadow-xl border rounded -xl">
                    <div className="text-center">
                        <div>

                        </div>

                    </div>

                </div>
            </main> */

            <form onSubmit={onSubmit}
            className="space-y-5">
                </form>
            
        </div>
     )