import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function BasicCard() {
  return (
    <Box
      bgcolor="grey.200"
      p={2}
      borderRadius={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <HighlightOffIcon color="error" />
      <Box display="flex" alignItems="center">
        <Box ml={1}>
          Vous avez des fonds insuffisants dans votre porte-monnaie
        </Box>
      </Box >
      <Button variant="contained" color="primary" style={{ width: '100%' }} >
        Rechargez votre porte-monnaie
      </Button>
    </Box>
  );
}
