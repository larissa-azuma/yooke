

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
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
      Rechargez votre porte-monnaie
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
          <DialogContentText id="alert-dialog-description" sx={{fontFamily:"jost",
        fontSize:"27px"}}>
          Vous pouvez de nouveau faire une commande.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}