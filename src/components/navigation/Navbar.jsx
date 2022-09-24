import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from './SearchBar';
import MenuIcon from '@mui/icons-material/Menu';





const Navbar = () => {
  return (
   <AppBar component='nav' sx={{background:'white', color:'#000'}}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between', flexGrow:1}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
               
                <IconButton color="inherit" aria-label="open drawer" edge='start' >
                <MenuIcon/>    
                </IconButton>

                <YouTubeIcon sx={{fontSize:'32px', ml:2}}/>
                <Typography variant='h6' component='div' sx={{ ml:1, fontFamily:'Oswald'}}>Youtube Clone</Typography>
            </Box>
            <Box sx={{display:{xs:'none', sm:'flex'}}}>
                <SearchBar />
            </Box>
        </Toolbar>
   </AppBar>
  )
}

export default Navbar