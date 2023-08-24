import * as React from 'react';
import { IconButton, List, Box, Typography, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Vector from "../../assets/images/Vector.svg"
import calendarmonth from "../../assets/images/calendarmonth.svg"
import alertoutline from "../../assets/images/alertoutline.svg"
import shieldstaroutline from "../../assets/images/shieldstaroutline.svg"
import walletmembership1 from "../../assets/images/walletmembership1.svg"
import accountplusoutline from "../../assets/images/accountplusoutline.svg"
import messagereplytextoutline1 from "../../assets/images/messagereplytextoutline1.svg"
import handcoinoutline from "../../assets/images/handcoinoutline.svg"

export default function NotificationSidebar({handleClose}) {

    return (
       
            <Box
                sx={{ width: '452px',height: "982px" }}
                role="presentation"

            >
                <Box className="notifyHead">
                    <IconButton className='closeNotify' onClick={handleClose} >
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography>Notifications</Typography>
                    <Button>Mark all Read</Button>
                    <IconButton >
                        <img src={Vector} alt="notifyIcon" />
                    </IconButton>
                </Box>
                <Box className="notifyWrap">
                    <List className='item unread'>
                        <Typography>6:45 PM</Typography>
                        <Box className="iconWrap">
                            <img src={calendarmonth} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>9:56 PM</Typography>
                        <Box className="iconWrap">
                             <img src={alertoutline} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Vaccination Expire</Typography>
                            <Typography>Your vaccination is about to expire next week</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>Yesterday</Typography>
                        <Box className="iconWrap">
                             <img src={shieldstaroutline} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>2 More Class to Earn New Badge</Typography>
                            <Typography>You are just 2 class away to earn agility badge</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>Yesterday</Typography>
                        <Box className="iconWrap">
                             <img src={walletmembership1} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Silver Membership</Typography>
                            <Typography>You have successfully added to silver membership</Typography>
                        </Box>
                    </List>
                    <List className='item'
                     sx={{marginRight:"-210px"}}
                     >
                        <Typography>May 2</Typography>
                        <Box className="iconWrap">
                             <img src={accountplusoutline} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Invite</Typography>
                            <Typography>Someone has invited you to be a partner. Get connected with more people.</Typography>
                        </Box>
                    </List>

                    <List className='item'
                    sx={{marginRight:"60px"}}
                    >
                        
                        <Typography>May 1</Typography>
                        <Box className="iconWrap">
                             <img src={messagereplytextoutline1} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Message</Typography>
                            <Typography>Someone has messaged you....</Typography>
                        </Box>
                    </List>

                    <List className='item'
                    sx={{marginRight:"-60px"}}
                    >
                        <Typography>Apr 30</Typography>
                        <Box className="iconWrap">
                             <img src={handcoinoutline} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Credits</Typography>
                            <Typography>There is a sale going on for purchasing the credits.</Typography>
                        </Box>
                    </List>

                </Box>
            </Box>
       
    );
}