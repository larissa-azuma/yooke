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
      padding="0"
      margin={0} 
    >
      <HighlightOffIcon
        color="error"
        sx={{
          width: "5%",
          height: "5%",
          Top: "24px",
          Left: "24px",
        }}
      />
      <Box display="flex" alignItems="center">
        <Box
          ml={1}
          fontFamily={"jost"}
          sx={{
            fontSize: "18px",
          }}
        >
          Vous avez des fonds <br />
          insuffisants dans votre porte-
          <br />
          monnaie
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        //   padding: "0",
        //   margin:"0",
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
        Rechargez votre porte-monnaie
      </Button>
    </Box>
  );
}
