import React from "react";
import BasicRating from "../../Components/Star";
import Button from '@mui/material/Button';
import './index.css';



function Voyager() {
  
  return (
    <div className="main">
      <h1>Voyage terminé</h1>

      <BasicRating />
      <p>
        Ne vous inquiétez pas,
        <br />
        vos commentaires sont anonymes
      </p>
      <Button variant="contained" sx={{backgroundColor: "#001023",
    "&:hover":{
      backgroundColor:"#001023",

      position:"fixed",
      bottom:"0",
      left:"0",
      right:"0"
    }
    }}>Envoyer</Button>
    </div>
    
  );
}

export default Voyager;
