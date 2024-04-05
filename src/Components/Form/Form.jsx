import React from "react";
import { Container, TextField, IconButton } from "@mui/material";
import { AccessTimeRounded, CalendarMonth } from "@mui/icons-material";
import { InputAdornment } from '@mui/material';





function Form() {
  return (
    <div>
      <Container sx={{ my: "2rem" }} maxWidth="sm">
        <h3 text align="center">
          Destination prochaine
        </h3>
        <div>
          <form>
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="Point de Prise en Charge"
            label="Point de Prise en Charge"
           
          />
              
                
          </form>
        
          </div>
        
        <form>
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="Sélectionnez la Date Départ"
            label="Sélectionnez la Date Départ"
            InputProps={{
              startAdornment: (
                <IconButton sx={{ color: "black" }}>
                  <CalendarMonth />
                </IconButton>
              ),
            }}
          />
          <TextField
            sx={{ mb: "2rem" }}
            fullWidth
            name="Sélectionnez l’heure du Départ"
            label="Sélectionnez l’heure du Départ"  
          InputProps=
          {{
            startAdornment: (
              <IconButton sx={{color:'black'}}>
                <AccessTimeRounded />
              </IconButton>
            ),
          }}
          />
        </form>
      </Container>
    </div>
  );
}

export default Form;
