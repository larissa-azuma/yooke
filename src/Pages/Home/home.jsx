import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from '@mui/material/DialogTitle';
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Retour à l’accueil
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <CheckCircleOutlinedIcon
            color="success"
            sx={{
              width: "15%",
              height: "10%",
              Top: "10px",
              marginTop: "5px",
              display:"flex",
              justifyContent: "center",
            }}
          />
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "jost", fontSize: "27px" }}
          >
            Le instructions pour recharger votre porte-monnaie ont été envoyées
            à votre numéro de téléphone avec succès !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              fontFamily: "jost",
              bgcolor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: " black",
                boxShadow: "",
              },
            }}
          >
            Retour à l’accueil
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
