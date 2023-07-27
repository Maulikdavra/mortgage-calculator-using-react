import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';


export const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxwidth="xl"> 
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Bank of React 
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
