import React from 'react'
import { TextField, Typography } from '@mui/material'

function Form() {
  return (
    <div>
      <Typography variant='h3' alighn='center '>Next Destination</Typography>
      <TextField id="outlined-basic "label="Pick-up Point  "  variant="outlined" /> <br/>
      <TextField id="outlined-basic " label="Select the Departure Date" variant="outlined" /><br/>
      <TextField id="outlined-basic " label="Pick-up Point" variant="outlined" />
    </div>
  )
}

export default Form