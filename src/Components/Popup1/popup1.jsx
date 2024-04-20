import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from '@mui/material/DialogTitle';
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

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
      Voir le voyage réservé
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
          <CancelOutlinedIcon
            color="error"
            sx={{
              width: "15%",
              height: "10%",
              Top: "10px",
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
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button
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
