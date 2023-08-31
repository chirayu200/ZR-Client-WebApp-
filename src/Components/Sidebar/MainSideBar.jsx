import * as React from "react";
import {styled} from "@mui/material/styles";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from '@mui/icons-material/Logout';
import {SidebarItems} from './SidebarItems';
import {clearLocalData} from "../../Utils";
import { hover } from "@testing-library/user-event/dist/hover";
import '../../style2.css';

const logo = require("../../assets/images/sidebarLogo.svg").default;
const profile = require("../../assets/images/profile.svg").default;
const chat = require("../../assets/images/chat.svg").default;
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `98px !important`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});
const DrawerHeader = styled("div")(({theme}) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({theme, open}) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));
export default function SideBar({name, Component, clientDetail}) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleDrawerClose = () => {
        setOpen(!open);
    };


    const onItemClick = (path) => {

        navigate(path);
    };
    return (
        <>
            <Box sx={{display: "flex",}} className='global'>
                <CssBaseline/>
                <Drawer variant='permanent' open={open} className='mainSidebar'>
                    <DrawerHeader>
                        <img src={logo} className='sideLogo' alt='logo'/>
                        <IconButton onClick={handleDrawerClose} className='drawerCloseBtn'>
                            {!open ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        
                        {SidebarItems?.map(
                            (item, index) => (
                                <Box className='sidebar-style'>
                                <ListItem key={index} disablePadding sx={{display: "block"}}>
                                <Box className='sidebar-style'>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open ? "initial" : "center",
                                            px: 2.5,
                                            background: item.name === name && "#E35205",
                                    
                                            border: `2px solid`,color:'#FFFF',
                                       
                                            
                                            

                                            
                                        }}
                                        onClick={() => onItemClick(item.path)}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name}
                                                      sx={{display: open ? 'block' : 'none'}}/>
                                    </ListItemButton>
                                    </Box>
                                </ListItem>
                                </Box>
                            )
                        )}
                    </List>
                    <Box className={`${open ? 'sidebar-footer-horizontal' : 'sidebar-footer'}`}>
                        <Button className='profileBtn' onClick={() =>
                            navigate('/profile')
                        }>
                            <img src={clientDetail ? clientDetail?.profileImage : profile} alt='profile'/>
                        </Button>
                        <Button className='profileBtnSecond' onClick={() => {
                            clearLocalData();
                            window.location.reload();
                        }}>
                            <LogoutIcon sx={{color: 'white'}}/>
                        </Button>
                    </Box>

                </Drawer>
                <Box component='main' sx={{flexGrow: 1, p: 3, maxWidth: "100%", overflow: 'hidden'}}>
                    <DrawerHeader/>
                    {Component}
                </Box>
            </Box>
            <Button className="chatBtn"><img src={chat} alt="chat"/> </Button>

        </>
    );
}
