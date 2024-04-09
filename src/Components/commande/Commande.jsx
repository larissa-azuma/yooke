import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function CardPrompt() {
  return (
    <Box
      bgcolor="grey.200"
      p={2}
      borderRadius={8}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="0"
      margin={0}
     
    >
      <CheckCircleOutlineIcon
        color="success"
        sx={{
          width: "7%",
          height: "10%",
          Top: "10px",
          marginTop: "5px",
        }}
      />
      <Box display="flex" alignItems="center">
        <Box
          ml={1}
        fontFamily={"jost"}
          sx={{
            fontSize: "20px",
            marginTop:"10px",
            textAlign:"center",
          }}
        >
          Vous pouvez de nouveau faire une commande. !
        </Box>
      </Box>

      {/* <Button
        variant="contained"
        sx={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "black",
          width: "100%",
          height: "40px",
          top: "10px",
          Left: "60px",

          "&:hover": {
            backgroundColor: "black",
            boxShadow: "none",
          },
        }}
      >
       Retour à l’accueil
      </Button> */}
    </Box>
  );
}