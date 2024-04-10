import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

export default function CardPrompt2() {
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
      <HighlightOffRoundedIcon
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
          Vous avez déjà réservé un voyage,<br/> vous ne pouvez réserver qu'un<br/> seul voyage à la fois. 
        </Box>
      </Box>

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
            backgroundColor: " #001023",
            boxShadow: "",
          },
        }}
      >
       Voir le voyage réservé
      </Button>
    </Box>
  );
}
