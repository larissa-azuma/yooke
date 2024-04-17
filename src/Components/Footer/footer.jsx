import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

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
      Oui, annuler
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
          
          <QuestionMarkOutlinedIcon color="error"
            sx={{
              width: "15%",
              height: "10%",
              Top: "10px",
              marginTop: "5px",
              justifyContent: "center",
            }}/>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontFamily: "jost", fontSize: "27px" }}
          >
            Êtes-vous sûr de vouloir annuler votre voyage prévu ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button
            onClick={handleClose}
            autoFocus
            sx={{
              fontFamily: "jost",
              bgcolor: "#ED0F49",
              color: "white",
              "&:hover": {
                backgroundColor: " #ED0F49",
                boxShadow: "",
              },
            }}
          >
            Oui, annuler
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
