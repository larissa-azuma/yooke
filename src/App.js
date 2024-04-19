
import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Trajet from "./Pages/Trajet";
import Compte from "./Pages/Compte";
import Wallet from "./Pages/wallet";
import NavBottom from "./Components/NavBottom";
import  "./App.css"

function App() {
  return (
    <BrowserRouter>
    <NavBottom classname='mainav'/>
      <Routes>
        <Route>
          <Route path="/" element={<Accueil />} />
          <Route path="/trajet" element={<Trajet />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/compte" element={<Compte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
