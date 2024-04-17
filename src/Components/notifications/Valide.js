import React from "react";
import "./index.css";
import Valideimg from "../../assets/images/valide.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

function Valide() {
  return (
    <div className="main">
      <div className="valide">
        <div className="divp">
        <h1> 
           <ArrowBackIosIcon />
           Les détails du trajet en cours
           </h1>
        </div>
          

          <h3>
            <LocalTaxiOutlinedIcon />
            En route vers votre destination
            </h3>
          <p className="avn">Avenue des Banques</p>
      
      </div>
      <div>
        <div>
          <h2 className="h2-2">
            <EventSeatIcon/>
            Nombre de Places Réservées
            </h2>
          <p className="p1">Vous avez 2 places réservées</p>
          <hr/>
          <div className="imgtext">
            <div> 
            
            </div>
            <div className="push">
            <p className="p2.a">
            <img src={Valideimg} className="img"  alt="booking"/>
            Veuillez noter que le trajet ne commencera<br/>
             qu'une fois que les places restantes seront <br/>
            réservées et qu'un chauffeur aura été
            affecté à <br/>
             votre voyage.
          </p>
            </div>
         
          </div>
         
          <div className="div-sub2">
            <h4>
              <PaymentsOutlinedIcon/>
              Tarif du trajet
              </h4>
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
