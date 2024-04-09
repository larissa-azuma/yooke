import React from 'react';
import { AppBar, Toolbar, Typography, Card, TextField, Button } from '@mui/material';
import Picture1 from '../../assets/images/Picture1.png';

function Largent () {
  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3">Ajoutez de l'argent</Typography>
        </Toolbar>
      </AppBar>

      {/* Money Card */}
      <Card>
    
        <img src="Picture1" alt="Picture1.png" />
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
      <Button variant="contained" color="primary">
        Commande
      </Button>
    </div>
  );
};

export default Largent ;