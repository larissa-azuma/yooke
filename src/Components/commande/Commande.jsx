import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';;
function Commande() {
  return (
    
        <Card>
          <CardHeader
            avatar={<CheckCircleOutlineIcon style={{ color: 'green' }}>check_circle</CheckCircleOutlineIcon>}
            title="Vous pouvez de nouveau faire une commande."
          />
          
        </Card>
      );
    };


export default Commande