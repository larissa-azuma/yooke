import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Trajet from "./Pages/Trajet";
import Portefeuille from "./Pages/Portefeuille";
import Compte from "./Pages/Compte";
import NavBottom from "./Components/NavBottom";


function App() {
  return (
    <BrowserRouter>
      <NavBottom/>
      <Routes>
        <Route>
          <Route path="/" element={<Accueil />} />
          <Route path="/trajet" element={<Trajet />} />
          <Route path="/portefeuille" element={<Portefeuille />} />
          <Route path="/compte" element={<Compte />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
