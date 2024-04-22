import React from "react";
import "./index.css";
import Valideimg from "../../assets/images/valide.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';

function Valide() {
  return (
    <div className="wrapper">
      <div className="primary-header">
        <div className="primary-header_content">
        <h1 className="element-1"> 
           <ArrowBackIosIcon sx={{height:"auto"}} />
           Les détails du trajet en cours
           </h1>
        
          

          <h3 className="element-2">
            <LocalTaxiOutlinedIcon />
            En route vers votre destination
            </h3>
          <p className="card-down">Avenue des Banques</p>
          </div>
      </div>
      <div>
        <div>
          <h2 className="element-3">
            <EventSeatIcon sx={{height:'auto'}}/>
            Nombre de Places Réservées
            </h2>
          
          
          <div className="imgtext">
            <div> 
            
            </div>
            <div className="image-content">
            <img src={Valideimg}  alt="booking"/>
            <div>
            <p className="p1">Vous avez 2 places réservées</p>

            <p className="p-2">
           
            Veuillez noter que le trajet ne commencera<br/>
             qu'une fois que les places restantes seront <br/>
            réservées et qu'un chauffeur aura été
            affecté à <br/>
             votre voyage.
          </p>
            </div>
            </div>
         
          </div>
         
          <div className="wrapper-2">
            <p className="p-4">
              <PaymentsOutlinedIcon/>
              Tarif du trajet
              </p>
            <p className="h-center">500 FCFA/place</p>
          </div>
          <div className="h1-center">
          <h1 >1 000 FCFA</h1>
          <p>2 Places Réservées</p>
          </div>
         
          <hr/>
          <div className="div-4">
            <h4>Détails de la Voiture et du Chauffeur</h4>
            <p>Informations sur le véhicule</p>
            <h4>ToyotaYaris (Rouge) | LT 3456 BM</h4>
            <p>Nom du Chauffeur</p>
            <h3 className="h-3">Didier</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Valide;
