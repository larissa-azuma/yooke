import React from "react";
import { CssBaseline, Container, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import Avatar from "@mui/material/Avatar";
// import img from "../assets/images/avartar.png";
import PaymentsIcon from "@mui/icons-material/Payments";
import Button from "@mui/material/Button";


function JourneyDetails() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "812px",
            width: "375px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            style={{
              bgcolor: "#FFFFFF",
              height: "812px",
              width: "375px",
              display: "flex",

              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "81px",
              }}
            >
              <ArrowBackIosIcon
                style={{
                  marginLeft: "10px",
                }}
              />
              <p style={{ textAlign: "center", marginLeft: "10px" }}>
                Détails de votre trajet
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "20px",
                marginTop: "55px",
              }}
            >
              <DirectionsCarIcon style={{ marginLeft: "10px" }} />
              <p style={{ marginLeft: "10px" }}>03 mars 2024 à 07:30 AM </p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <CircleOutlinedIcon
                style={{ marginLeft: "10px", color: "red" }}
              />
              <p style={{ marginLeft: "10px" }}>Carrefour Mendong</p>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "center",
              }}
            >
              <CircleOutlinedIcon
                style={{ marginLeft: "10px", color: "green" }}
              />
              <p style={{ marginLeft: "10px" }}>Avenue des Banques</p>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "25px",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.10)",
                flexWrap: "wrap",
              }}
            >
              <EventSeatIcon style={{ marginLeft: "10px" }} />
              <p style={{ marginLeft: "10px", marginBottom: "10px" }}>
              Nombre de Places Réservées
              </p>
              {/* <Avatar
                src={img}
                alt="Avatar Image"
                sx={{ width: 100, height: 100, marginLeft: "10px" }}
              /> */}
              <p>Vous avez 2 places réservées</p>
              <p>
                Veuillez noter que le trajet ne commencera qu'une fois que les
                places restantes seront réservées et qu'un chauffeur aura été
                affecté à votre voyage.
              </p>
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
              <p style={{ marginLeft: "10px" }}>Tarid du trajet</p>
              <p style={{ marginLeft: "70px", fontWeight: "bold" }}>
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
              <h1 style={{ fontWeight: "bold", fontSize: "32px" }}>
                1 000 FCFA
              </h1>
              <p style={{ fontSize: "12px",
            marginTop:"10%",
            }}>2 places réservées</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column", // Arrange items vertically
                marginTop: "10px",
                alignItems: "center",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
              }}
            >
              <p style={{ marginLeft: "10px" }}>
                Montant dans votre porte-monnaie
              </p>
              <p style={{ marginRight: "10px" }}>12 000 FCFA</p>
              {/* Button placed beneath the paragraphs */}
              <Button
                sx={{ bgcolor: "black", color: "white", marginTop: "10px" }}
              >
                Accepter le trajet
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default JourneyDetails;