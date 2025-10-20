import {  IconButton, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import "./Topbar.css"


const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
      },
    },
  ],
}));
export default function Topbar({open,handleDrawerOpen}) {
  return (
<AppBar position="fixed" open={open} color="transparent" className="top">

         <Toolbar>
           <Typography className='typ' variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
             تطوير تطبيق مرشدك الزراعي 
           </Typography>
           <IconButton
             color="inherit"
             aria-label="open drawer"
             edge="end"
             onClick={handleDrawerOpen}
             sx={[open && { display: 'none' }]}
           >
             <MenuIcon />
           </IconButton>
         </Toolbar>
       </AppBar>
  )
}
