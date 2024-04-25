import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Trajet from "./Pages/Trajet";
import Compte from "./Pages/Compte";
import Wallet from "./Pages/wallet";
import NavBottom from "./Components/NavBottom";
import Largent from "./Components/l'argent/Largent";
import Alert1 from "./Components/popups/Alert";
import Alert2 from "./Components/popups/Alert2";
import Journey from "./Pages/Journey";
import Journey2 from "./Pages/Trajet2";
import Valide from "./Components/notifications/Valide";


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
            <Route path="/alert2" element={<Alert2/>} />
            <Route path="/journey" element={<Journey/>} />
            <Route path="/journey2" element={<Journey2/>} />
            <Route path="/valid" element={<Valide/>} />
           
          
          </Route>
        </Routes>
        <NavBottom />
      </BrowserRouter>
    </div>
  );
}

export default App;
