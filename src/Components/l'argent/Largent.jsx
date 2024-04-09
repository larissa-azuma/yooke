import React from 'react';
import { AppBar, Toolbar, Typography, Card, TextField, Button } from '@mui/material';

function Largent () {
  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{bgcolor:'#001023'}}>

        <Toolbar>
          <Typography variant="h3" > 
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
      <Button variant="contained" sx={{bgcolor:'#001023'}}>   Commande</Button>  
    </div>
  );
};

export default Largent ;