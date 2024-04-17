// import React from 'react'

// const Home = () => {
//   return (
//     <div>home</div>
//   )
// }

// export default Home;

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <box sx={{bgcolor:"black",}}></box>
      <h1>Ajoutez de l’argent</h1>
      <p>Ajoutez le montant</p>
      <TextField id="outlined-basic" label="Entrez le montant a ajouter" variant="outlined" />
      <p>Le numéro de téléphone pour la demande</p>
      <TextField sx={{}} id="outlined-basic" label="Entrez le numero de telephone" variant="outlined" />
      <Button
        variant="contained"
        sx={{
          // borderBottomLeftRadius: "24px",
          // borderBottomRightRadius: "24px",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "black",
          width: "100%",
          height: "40px",
          top: "10px",
          Left: "60px",

          "&:hover": {
            backgroundColor: " black",
            boxShadow: "",
          },
        }}
      >
      Commande
      </Button>
    </Card>
  );
}