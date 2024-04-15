import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Avatar from "@mui/material/Avatar";
// import img from "../assets/images/avartar.png";
import img from "../../assets/avartar.png"
import PaymentsIcon from "@mui/icons-material/Payments";
import Button from "@mui/material/Button";

function JourneyDetails() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" fontFamily="jost">
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <ArrowBackIosIcon style={{ marginLeft: "10px" }} />
              <p style={{ textAlign: "center", marginLeft: "10px",
            fontFamily:"jost" }}>
                Détails de votre trajet
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <DirectionsCarIcon style={{ marginLeft: "10px" }} />
              <p style={{ marginLeft: "10px", 
            fontFamily:"jost" }}>28. 04. 2024 a 7:30 AM</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <CircleOutlinedIcon
                style={{ marginLeft: "10px", color: "red" }}
              />
              <p style={{ marginLeft: "10px", fontFamily:"jost" }}>Carrefour Mendong</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <CircleOutlinedIcon
                style={{ marginLeft: "10px", color: "green" }}
              />
              <p style={{ marginLeft: "10px", fontFamily:"jost" }}>Avenue des Banques</p>
            </div>
            <div
  style={{
    display: "flex",
    marginTop: "35px",
    marginLeft: "0",
    alignItems: "center",
    border: "1.5px solid rgba(0, 0, 0, 0.10)",
    flexWrap: "wrap",
    width: "fit-content",
   
   
  }}
>
  <EventSeatIcon style={{ marginLeft: "30px" }} />
  <p style={{ margin: "0 10px", font: "jost", lineHeight: "22.16px",Weight:"400px",fontSize:"15.33px",color:'#000000'}}>Nombres de Places Reservees</p><br/>
  <div style={{ display: "flex", alignItems: "center" }}>
    <Avatar
      src={img}
      alt="Avatar Image"
      sx={{ width:"88.46px", height:  "88.46px", marginLeft: "10px" }}
    />
    <div style={{ marginLeft: "10px", }}>
      <p style={{ margin: "0 10px", font: "jost", lineHeight: "21.19px",Weight:"300",height:"21px",fontSize:"14.67px",left:'125px',marginTop:"5px",marginBottom:"5px", fontFamily:"jost"}}>Vous avez 2 places réservées</p>

      <p style={{ margin: "0 10px", font: "jost", lineHeight: "13.75px",Weight:"400", marginBottom: "35px",fontSize:"11px",textAlign:"justify",width: '226px',height:"59px", fontFamily:"jost", marginLeft:"50px"}}>
        Veuillez noter que le trajet ne commencera qu'une fois que les
        places restantes seront réservées et qu'un chauffeur aura été
        affecté à votre voyage.
      </p>
 
 

   
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <PaymentsIcon style={{ marginLeft: "10px" }} />
              <p style={{ marginLeft: "10px", fontFamily:"jost"}}>Tarid du trajet</p>
              <p style={{ marginLeft: "150px", fontWeight: "bold", fontFamily:"jost" }}>
                500 FCFA/place
              </p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                marginLeft: "20px",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <h1 style={{ fontWeight: "bold", fontSize: "32px", fontFamily:"jost" }}>
                1 000 FCFA
              </h1>
              <p style={{ fontSize: "12px", fontFamily:"jost"}}>2 places réservées</p>
            </div>
          </Box>
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              padding: "10px",
            }}
          >
            <p style={{ marginLeft: "10px", fontFamily:"jost"}}>
              Montant dans votre porte-monnaie
            </p>
            <p style={{ marginRight: "10px", fontFamily:"jost"}}>12 000 FCFA</p>
           
            <Button
        variant="contained"
        sx={{
          // borderBottomLeftRadius: "24px",
          // borderBottomRightRadius: "24px",
          fontWeight: "bold",
          borderRadius:"5px",
          textTransform: "none",
          backgroundColor: "#001023",
          width: "95%",
          height: "40px",
          top: "10px",
          Left: "60px",

          "&:hover": {
            backgroundColor: "#001023",
            boxShadow: "none",
          },
        }}
      >
      Accepter le trajet
      </Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default JourneyDetails;