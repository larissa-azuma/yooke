import React from 'react';
import { AppBar, Toolbar, Typography, Card, TextField, Button } from '@mui/material';

function Largent () {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{bgcolor:'#001023'}}>

        <Toolbar>
          <Typography variant="h3" sx={{className:'center'}} > 
          Ajoutez de l'argent
          </Typography>
        </Toolbar>
      </AppBar>
             
      {/* Money Card */}
      <Card>
      

      
      </Card>

      {/* Input Fields */}
      <div className='h4'>Ajoutez le montant</div>
      <TextField
        label="Entrez le montant à déposer"
        variant="outlined"
        fullWidth
        // Add other props as needed
      /> 
      <hr/>
      <div className='h5'>Le numéro de téléphone pour la demande</div>
      <TextField
        label="Entrez le montant à téléphone"
        variant="outlined"
        fullWidth
        // Add other props as needed
      />

      {/* Order Button */}
      <Button
        variant="contained"
        sx={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "#001023",
          width: "100%",
          height: "40px",
          top: "10px",
          Left: "60px",

          "&:hover": {
            backgroundColor: "#001023",
            boxShadow: "none",
          },
        }}
      >
       Retour à l’accueil
      </Button> 
    </div>
  );
};

export default Largent ;