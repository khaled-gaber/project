import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  
     
    position: 'relative',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginRight: 0,
        },
      },
    ],
  }),
);


const DrawerHeader = styled('div')(({ theme }) => ({
 
 
    display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));


export default function PersistentDrawerRight() {
 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box  className="noPadding" sx={{ display: 'flex' , width:"100 vw"   ,padding: 0  }}  >
      <CssBaseline />
      <Topbar open={open} handleDrawerOpen={handleDrawerOpen}/>
      <Main  open={open}>
        <DrawerHeader />
        
        <Content/>
    
      </Main>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
}