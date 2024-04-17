import React, { useEffect, useState } from 'react'
import { CreateAccount } from './Components/auth/CreateAccount'
import {db}from "./config/yooke.config"
import {getDocs,collection} from "firebase/firestore"

function App() {
  const[passengersList,setPassengersList]= useState([]);
  const passengersCollectionRef =collection (db,"passengers")

useEffect (() =>{
const getPassengersList = async () => {
//Read the data
//Set the PassengetLIst
try{
const data =await getDocs(passengersCollectionRef);
const filteredData = data.docs.map((doc) => ({...doc.data(),id:doc.id}));
setPassengersList(filteredData)
// console.log({filteredData});
}catch (err) {
  console.error(err);
}

};
  getPassengersList();
  },[]);


  return (
    <div >        
<CreateAccount/>

    </div>
  )
}

export default App