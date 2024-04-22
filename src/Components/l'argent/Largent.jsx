import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  TextField,
  Button,
} from "@mui/material";
import Project1 from "../../assets/images/Picture1.png";
import Project2 from "../../assets/images/Picture2.png";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Alert1 from "../popups/Pop1";


function Largent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <ArrowBackIosNewOutlinedIcon sx={{ marginTop: "20px" }} />

        <Toolbar>
          <Typography
            variant="h6"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            Ajoutez de l'argent
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Money Card */}
      <Slider {...settings}>
        <div>
          <Card sx={{ marginTop: "100px", marginBottom: "100px" }}>
            <img src={Project1} alt="Project1" />
          </Card>
        </div>
        <div>
          <Card sx={{ marginTop: "100px", marginBottom: "100px" }}>
            <img src={Project2} alt="Project2" />
          </Card>
        </div>
      </Slider>

      {/* Input Fields */}
      <div sx={{ fontFamily: "jost" }}>Ajoutez le montant</div>
      <br />
      <TextField
        label="Entrez le montant à déposer"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "100px" }}
      />

      <div sx={{ marginBottom: "50px" }}>
        Le numéro de téléphone pour la demande
      </div>
      <br />
      <TextField
        label="Entrez le montant à téléphone"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "200px" }}
      />

      {/* Order Button */}
      {/* <Button 
      to="/alert1"
      component={Link}
        variant="contained"
        
       
        sx={{
         
          fontWeight: "bold",
          textTransform: "none",
          backgroundColor: "black",
          width: "100%",
          height: "40px",
          bottom: "60px",
          left: "60px",
          zIndex: 2, 
          "&:hover": {
            backgroundColor: "black",
            boxShadow: "none",
          },
        }}
      >
        Commande
      </Button> */}
      <Alert1/>
    </div>
  );
}

export default Largent;