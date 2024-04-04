import React from 'react'
import { TextField } from '@mui/material'

function Form() {
  return (
    <div>
      <TextField id="outlined-basic "label="Pick-up Point  "  variant="outlined" /> <br/>
      <TextField id="outlined-basic " label="Select the Departure Date" variant="outlined" /><br/>
      <TextField id="outlined-basic " label="Pick-up Point" variant="outlined" />
    </div>
  )
}

export default Form