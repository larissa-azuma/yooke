import { useState } from 'react'
import{auth} from '../../config/yooke.config'
import {createUserWithEmailAndPassword,signOut} from'firebase/auth'
import { Button, Container, TextField } from '@mui/material'

export const CreateAccount = () =>{
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
     const [userName, setuserName]= useState("");
     const [userTelephonenumber, setTelephonenumber]= useState("");

    
    const signUp =async()=> {
        try{
        await createUserWithEmailAndPassword(auth,email, password,userName,userTelephonenumber);} catch (err) {
            console.error(err);
        }
    };



    const logout =async()=> {
        try{
        await signOut(auth);} catch (err) {
            console.error(err);
        }
    };

    return(
        <Container>
            <TextField id="outlined-basic" label="Name" onChange={(e) =>setuserName(e.target.value)}  variant="outlined" />
             <br/>
             <TextField id="outlined-basic" label="Telephonnumber"onChange={(e) =>setTelephonenumber (e.target.value)} variant="outlined" /> <br/>
            <TextField id="outlined-basic" label="Email " onChange={(e) =>setEmail(e.target.value)} variant="outlined"/> <br/>
            <TextField id="outlined-basic"
            label="Password..."
            type="password"
            onChange={(e) =>setPassword(e.target.value)} variant='outlined'/> <br/>

<TextField id="outlined-basic"
            label="Retype password"
            type="password"
            onChange={(e) =>setPassword(e.target.value)} variant='outlined'/>
            <Button variant="outlined" onClick={signUp}>signUp</Button>


            {/* <button onClick={signUp}>Sign Up</button>  */}
            
            {/* <button onClick={logout}>Logout</button> */}
        </Container>
    )
}

