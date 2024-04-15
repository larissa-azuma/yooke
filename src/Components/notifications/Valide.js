import React from "react";
import "./index.css";
import Valideimg from "../../assets/images/valide.png";

function Valide() {
  return (
    <div className="main">
      <div className="valide">
        <nav className="valid-nav">
          <h1 className="valide.text">Les détails du trajet en cours</h1>

          <h2>En route vers votre destination</h2>

          <h3>Avenue des Banques</h3>
        </nav>
      </div>
      <div>
        <div>
          <h2 className="h2-2">Nombre de Places Réservées</h2>
          <p className="p1">Vous avez 2 places réservées</p>
          <p className="p2">
            <img src={Valideimg} className="img" />
            Veuillez noter que le trajet ne commencera qu'une fois que les
            places restantes seront réservées et qu'un chauffeur aura été
            affecté à votre voyage.
          </p>
          <div className="div-sub2">
            <h4>Tarif du trajet</h4>
            <h4 className="h-center">500 FCFA/place</h4>
          </div>
          <div className="h2-center">
          <h2 >1 000 FCFA</h2>
          <p>2 Places Réservées</p>
          </div>
         
          <hr/>
          <div className="div-4">
            <h4>Détails de la Voiture et du Chauffeur</h4>
            <p>Informations sur le véhicule</p>
            <h4>ToyotaYaris (Rouge) | LT 3456 BM</h4>
            <p>Nom du Chauffeur</p>
            <h3>Didier</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valide;
