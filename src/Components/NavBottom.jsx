import React from "react";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

//creating a custom theme to implement colors from figma file
const theme = createTheme({
  palette: {
    ochre: {
      main: "#001023",
      light: "#FFFFFF",
      dark: "#A29415",
      contrastText: "#22CEA6",
    },
  },
});

const NavBottom = () => {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        sx={{
          width: "100%",
          position: "fixed",
          bottom: "0",
          zIndex: 1,
        }}
        value={value}
        showLabels
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          to="/"
          component={Link}
          label="Accueil"
          icon={<HomeIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
        <BottomNavigationAction
          to="/trajet"
          component={Link}
          label="Trajet"
          icon={<NearMeIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
        <BottomNavigationAction
          to="/wallet"
          component={Link}
          label="Portefeuille"
          icon={<AccountBalanceWalletIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
        <BottomNavigationAction
          to="/compte"
          component={Link}
          label="Compte"
          icon={<PersonIcon />}
          sx={{
            "&.Mui-selected": {
              color: theme.palette.ochre.contrastText,
            },
          }}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBottom;
