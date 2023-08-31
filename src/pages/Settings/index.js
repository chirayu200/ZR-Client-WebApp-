import React, { useState } from "react";
import { CustomButton } from "../../Components/Common";

import { Avatar, Typography, Box, List, ListItem, ListItemIcon, Grid, Button } from "@mui/material";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Payments from "./Payments";
import Location from "./Location";
import Notifications from "./Notifications";
import Security from "./Security";
import AboutApp from "./AboutApp";
import HelpAndSupport from "./HelpAndSupport";
import './settingStyle.css';

const notifications = require("../../assets/images/notification0.png");
const security = require("../../assets/images/security.png");
const aboutApp = require("../../assets/images/aboutapp.png");
const helpAndSupport = require("../../assets/images/help&support.png");

const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Settings() {

    const [active, setActive] = useState(0);
    // const components = [

    //     <Payments />
    // ] 
    return (
        <>
            {(() => {
                switch (active) {
                    case 1:
                        return (
                            <>
                                {/* {components[active]} */}
                                <Payments setActive={setActive} active={active} />
                            </>
                        )
                    case 2:
                        return (
                            <>
                                <Location setActive={setActive} active={active} />
                            </>
                        )
                    case 3:
                        return (
                            <>
                                <Notifications setActive={setActive} />
                            </>
                        )
                    case 4:
                        return (
                            <>
                                <Security setActive={setActive} />
                            </>
                        )
                    case 5:
                        return (
                            <>
                                <AboutApp setActive={setActive} />
                            </>
                        )

                    case 6:
                        return (
                            <>
                                <HelpAndSupport setActive={setActive} />
                            </>
                        )
                    default:
                        return (
                            <>
                                <Box className='appointment-header d-flex'>
                                    <Box className='top-header shop-header'>
                                        <Box className='first-box'>
                                            <CustomButton
                                                className='arrow-btn'
                                                color='#E35205'
                                                icon={backArrow}
                                                backgroundColor='#E7EFF9'

                                            // onClick={() => { if (active === 0) { navigate('/') } else { setActive(active - 1) } }}
                                            />
                                            <Typography className='header-text-blue font-weight-700 f-18'>Settings</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ paddingLeft: '15px' }}>
                                        <img src={notifications} alt="Notification" className="setting-image" onClick={() => setActive(3)} />
                                    </Box>

                                </Box>
                                <List sx={{ width: '100%', maxWidth: 360 }}>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground">
                                                        <CreditCardIcon className="icon-style cursor-pointer" onClick={() => setActive(1)} />
                                                    </Avatar>
                                                </Box>
                                            </Box>
                                        </ListItemIcon>

                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19 cursor-pointer" onClick={() => setActive(1)}>Payments</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground">
                                                        <LocationOnIcon className="icon-style cursor-pointer" onClick={() => setActive(2)} />
                                                    </Avatar>
                                                </Box>
                                            </Box>
                                        </ListItemIcon>
                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19 cursor-pointer" onClick={() => setActive(2)}>Location</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground p-11 cursor-pointer" src={notifications} onClick={() => setActive(3)} />
                                                    {/* <NotificationsIcon /> */}
                                                    {/* </Avatar> */}
                                                </Box>
                                            </Box>
                                        </ListItemIcon>
                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19 cursor-pointer" onClick={() => setActive(3)}>Notifications</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground p-11 cursor-pointer" src={security} onClick={() => setActive(4)} />
                                                    {/* <ShieldIcon /> */}
                                                    {/* </Avatar> */}
                                                </Box>
                                            </Box>
                                        </ListItemIcon>

                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19 cursor-pointer" onClick={() => setActive(4)}>Security</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground p-11 cursor-pointer" src={aboutApp} onClick={() => setActive(5)} />
                                                    {/* <ShieldIcon />
                                                    </Avatar> */}
                                                </Box>
                                            </Box>
                                        </ListItemIcon>
                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19 cursor-pointer" onClick={() => setActive(5)}>About App</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <Box className='avatar'>
                                                <Box className='border-white '>
                                                    <Avatar alt='D' className="back-ground p-11 cursor-pointer" src={helpAndSupport} onClick={() => setActive(6)} />
                                                    {/* <HandshakeIcon />
                                                    </Avatar> */}
                                                </Box>
                                            </Box>
                                        </ListItemIcon>
                                        <Typography className="header-text-black font-weight-700 f-16 line-height-19  cursor-pointer" onClick={() => setActive(6)}>Help & Support</Typography>
                                    </ListItem>
                                </List>
                                <Grid container spacing={2} sx={{ mt: 4 }}>
                                    <Grid item sm={6} md={6} xs={6}>
                                        <Button className="white-btn f-14 " fullWidth style={{
                                            color: '#003087', fontFamily: 'Univers LT Std', fontWeight: 700,
                                            fontSize: '12px',
                                            lineHeight: '25px',
                                        }}> Privacy policy </Button>
                                    </Grid>
                                    <Grid item sm={6} md={6} xs={6}>
                                        <Button className="white-btn f-14" fullWidth style={{
                                            color: '#003087', fontFamily: 'Univers LT Std', fontWeight: 700,
                                            fontSize: '12px',
                                            lineHeight: '25px',
                                        }}> Terms and condition </Button>
                                    </Grid>
                                </Grid>
                            </>
                        )
                }
            })()}
        </>
    )
}

