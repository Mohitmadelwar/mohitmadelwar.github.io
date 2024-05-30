import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
        <Button color="inherit">About</Button>
          <Button color="inherit">Work</Button>
          <Button color="inherit">Skill</Button>

          <Button color="inherit">Testimonials</Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}