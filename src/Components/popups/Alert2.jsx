import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import { Link } from "react-router-dom";

export default function CardPrompt3() {
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
      <QuestionMarkRoundedIcon
        color="error"
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
          Êtes-vous sûr de vouloir <br/>annuler votre voyage prévu?
        </Box>
      </Box>

      <Button
      to='/valid'
      component={Link}
        variant="contained"
        sx={{
          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "#ED0F49",
          width: "100%",
          height: "40px",
          top: "10px",
          Left: "60px",

          "&:hover": {
            backgroundColor: "#ED0F49",
            boxShadow: "none",
          },
        }}
      >
       Oui, annuler
      </Button>
    </Box>
  );
}