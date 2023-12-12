import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>My App</Typography>&nbsp;&nbsp;
            <Button variant="contained" color="error">HOME</Button>&nbsp;&nbsp;
            <Button variant="contained" color="error"> LOG IN</Button>    
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
