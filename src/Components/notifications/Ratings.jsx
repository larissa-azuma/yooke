import * as React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "../../../src/App.css";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 300,
  height: 500,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

export default function SquareCorners() {
  const [value, setValue] = useState(1);
  return (
    <Stack direction="row" spacing={2}>
      <DemoPaper
        square={false}
        sx={{
          // downBorderRadious: "10px",
          borderTopLeftRadius: "5%",
          borderTopRightRadius: "5%",
        }}
      >
        <CloseRoundedIcon className="closeIcon" />
        <h4 className="voyage">Voyage terminé</h4>
        <h3>Comment était votre trajet ?</h3>

        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            // alignContent: "center",
            // width: "10%",
            // height: "10%",
            marginRight: "179px",
            fontSize: "3rem",
            width: "20%",
            height: "20%",
          }}
        />
        <p
          sx={{
            fontSize: "10px",
            width: "20%",
            height: "20%",
          }}
        >
          Ne vous inquiétez pas, vos commentaires sont anonymes
        </p>

        <Button
          variant="contained"
          sx={{
            alignItems: "center",
            justifyItems: "center",
            color: "white",
            fontWeight: "bold",
            borderRadius: "9px",
            textTransform: "none",
            backgroundColor: "#001023",
            width: "90%",
            height: "40px",
            marginTop: "150px",
            top: "10px",
            Left: "60px",

            "&:hover": {
              backgroundColor: "#001023",
              boxShadow: "none",
            },
          }}
        >
          Envoyer
        </Button>
      </DemoPaper>
    </Stack>
  );
}
