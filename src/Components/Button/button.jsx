import React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import styles from  './index.module.css';

const ButtonComponent = () => {
  return (
   <div> 
    {/* <Stack spacing={2} direction="row">    */}
      {/* <Button variant="contained">Research</Button> */}
    {/* </Stack> */}

    <Button
        variant="contained"
        size="small"
        sx={{
          borderRadius: 2,
          padding: 2,
          fontWeight: 'bold',
          textTransform: 'none',
          backgroundColor:'#001023',
          width:'300px',
          height:'40px',
          top: '60px',
          Left:'60px',

          '&:hover': {
            backgroundColor: '#001023',
            boxShadow: 'none',
          },
        }}
      >
        Rechercher
      </Button>
    </div>
  );
}

export default ButtonComponent;