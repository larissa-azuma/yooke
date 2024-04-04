import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from  './index.module.css';

const Button = () => {
  return (
   <div className={styles.button}> 
    <Stack spacing={2} direction="row">   
      <Button variant="contained">Rechercher</Button>
    </Stack>
    </div>
  );
}

export default Button;