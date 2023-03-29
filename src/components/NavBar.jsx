import React from 'react'
import Logo from '../assets/logo.png'
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { borderRadius, fontSize } from '@mui/system';

const handleClick = (isShown, dispatch) => {
  dispatch(toggleDrawer(!isShown))
}

const NavBar = () => {
  const isShown = useSelector(selectToggler)
  const dispatch = useDispatch();
  return (
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => handleClick(isShown, dispatch)}
            sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ p: '0.5rem'}}>
          <img src={Logo} style={{ height:"2.5rem", width: "2.5rem", borderRadius:"5px"}} alt="logo"/>
        </Box>
        <Toolbar sx={{ px: '1rem', width: '100%' }}>
          <Link to="/" style={{ color: 'inherit', padding: '0.5rem', margin:'0rem 10rem 0rem 3rem', textDecoration:"none", fontSize:"17px",fontWeight:"bold" }}>Home</Link>
          <Link to="/history" style={{ color: 'inherit', padding: '0.5rem', textDecoration:"none", fontSize:"17px",fontWeight:"bold"  }}>History</Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar