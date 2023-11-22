import * as React from 'react';
import { useContext,useState,useEffect} from  "react"
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import { useLocation, NavLink,useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../App';
import HomeIcon from '@mui/icons-material/Home';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
// const useStyles = makeStyles({
//   active:{
//     background: "#f1f1f1"
//   }
// });
export default function SideNav({comp}) {
  const history = useNavigate( )
  const [msg,setMsg] = useState();
  const {state,dispatch} = useContext(UserContext);

 const AdminVerify =async()=>{
  try {
    await axios.get('/admin',{
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'content-type':'application/json; charset=utf-8'
      }
     }).then((res)=>{
      setMsg(res.data.message)
      // console.log(res.data.message)
     
     }).catch((err)=>{
      if(err.response.status===403){
        history("/")
      }else if(err.response.status===401){
        history("/login")      
      }else{
        console.log(err);
      }
     })
  } catch (error) {
    console.log(error)
  }
 }
    useEffect(()=>{
      AdminVerify()
    },[])
  // const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const menuItem =[
  {
    text:"Dashboard",
    icon:<DashboardIcon/>,
    path:"/admin"
  },
  {
    text:"All User",
    icon:<GroupIcon/>,
    path:"/alluser"
  },
]

  if(msg==='Welcome Admin'){
    return (
      <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} style={{backgroundColor:"#d93444" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
             Admin Page
            </Typography>
            <Link to={'/'}><HomeIcon style={{color:"white"}}/></Link>
            <Typography></Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {menuItem.map((item, index) => (
              <NavLink  to={item.path} style={{backgroundColor:"red"}}>
              <ListItem style={{backgroundColor:item.path===location.pathname?"#d93444":null}} key={item.text} disablePadding sx={{ display: 'block',
              
            }}  >
                <ListItemButton
                // selected={item.path==location.pathname?true:false}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    // border:"1px solid red",                 
                  }}
                >
                  <ListItemIcon style={{color:item.path===location.pathname?"white":null}}
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                        
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText style={{color:item.path===location.pathname?"white":null}} primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
          <List>
            
          </List>
        </Drawer>
        <Box className='box' component="main" sx={{ flexGrow: 1, p: 3,marginTop:6 }}>
          {comp}
        </Box>
      </Box>
      </>
    );
  }
}