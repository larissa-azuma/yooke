import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AccountBalanceWalletOutlined, HomeOutlined, PersonOutlined } from '@mui/icons-material';
import Trajeticon from "./TrajectIcon"



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
      width: 500,
      boxShadow: '0px -3px 6.7px 0px #00000066',
      justifyContent: 'space-between',
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Accueil" icon={<HomeOutlined sx={{ color: '#808080' }} />} />
        <BottomNavigationAction label="Trajet" icon={<Trajeticon />} />
        <BottomNavigationAction label="Porte-monnaie" icon={<AccountBalanceWalletOutlined />} />
        <BottomNavigationAction label="Compte" icon={<PersonOutlined />} />
      </BottomNavigation>
    </Box>
  );
}