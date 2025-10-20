import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, useTheme } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Sidebar.css"

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
   display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function Sidebar({open,handleDrawerClose}) {
   const theme = useTheme();
    return (
    <Drawer 
           className={`sidebar ${open ? "open" : "closed"}`}
      sx={{
        left:'auto' ,
        
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth },
           }}
           variant="temporary"
           anchor="right"
           
           open={open}
         >
           <DrawerHeader >
             <IconButton onClick={handleDrawerClose}>
               {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
             </IconButton>
           </DrawerHeader>
           <Divider />
           <List >
              <ListItem disablePadding >
                 <ListItemButton >
                 <ListItemIcon  className='icons'>
                    <HomeIcon />
                 </ListItemIcon>
               <ListItemText primary="الصفحة الرئيسية" className='text'  />
             </ListItemButton>
              </ListItem>
                

                  <ListItem disablePadding >
                  <ListItemButton>
                   <ListItemIcon  className='icons'>
                     <DashboardIcon />
                  </ListItemIcon>
                   <ListItemText primary="لوحة التحكم" />
                  </ListItemButton>
                  </ListItem>
            
            
            
              <ListItem disablePadding >
                  <ListItemButton >
                   <ListItemIcon className='icons'  >
                     <NotificationsIcon />
                  </ListItemIcon>
                   <ListItemText primary="الاشعارات" />
                  </ListItemButton>
                  </ListItem>

           </List>
           <Divider />
          
         </Drawer>
  )
}
