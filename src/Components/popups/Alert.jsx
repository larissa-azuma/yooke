import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Link } from "react-router-dom";

export default function Alert1() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "black",
          width: "99%",

          position: "fixed",
          bottom: "60px",
          left: "5px",
          right: "5px",
          zIndex: 2,
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "black",
            boxShadow: "none",
          },
        }}
      >
        Commande
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <CancelOutlinedIcon
            color="error"
            sx={{
              width: "15%",
              height: "10%",
              top: "10px",
              marginTop: "5px",
              justifyContent: "center",
            }}
          />
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "jost", fontSize: "27px" }}
          >
            Vous avez déjà réservé un voyage, vous ne pouvez réserver qu'un seul
            voyage à la fois.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
          to='/journey'
          component={Link}
            onClick={handleClose}
            autoFocus
            sx={{
              fontFamily: "jost",
              bgcolor: "#001023",
              color: "white",
              "&:hover": {
                backgroundColor: " #001023",
                boxShadow: "",
              },
            }}
          >
            Voir le voyage réservé
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
