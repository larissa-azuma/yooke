import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Trajet from "./Pages/Trajet";
import Compte from "./Pages/Compte";
import Wallet from "./Pages/wallet";
import NavBottom from "./Components/NavBottom";
import Largent from "./Components/l'argent/Largent";
import Alert1 from "./Components/popups/Pop1";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Accueil />} />
            <Route path="/trajet" element={<Trajet />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/compte" element={<Compte />} />
            <Route path="/largent" element={<Largent />} />
            <Route path="/alert1" element={<Alert1/>} />
          
          </Route>
        </Routes>
        <NavBottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
