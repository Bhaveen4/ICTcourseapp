import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ICT Courses
          </Typography>
          <Button variant='contained' color="warning"><Link style={{ textDecoration: 'none' }} to='/' >Courses</Link></Button>
          <Button  variant='contained' color="warning"><Link   style={{ textDecoration: 'none' }}  state = {{value:null,isEdit:false}}  to='/create' >Add Courses</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div> 
  )
}

export default Nav
