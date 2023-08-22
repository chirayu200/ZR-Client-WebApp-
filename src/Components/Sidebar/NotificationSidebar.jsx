import * as React from 'react';
import { IconButton, List, Box, Typography, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import notifyIcon from '../../assets/images/notifyIcon.svg'
import calendarIcon from '../../assets/images/calendarIcon.svg'
export default function NotificationSidebar({handleClose}) {

    return (
       
            <Box
                sx={{ width: '452px' }}
                role="presentation"

            >
                <Box className="notifyHead">
                    <IconButton className='closeNotify' onClick={handleClose} >
                        <ChevronLeftIcon />
                    </IconButton>
                    <Typography>Notifications</Typography>
                    <Button>Mark all Read</Button>
                    <IconButton >
                        <img src={notifyIcon} alt="notifyIcon" />
                    </IconButton>
                </Box>
                <Box className="notifyWrap">
                    <List className='item unread'>
                        <Typography>6:45 pm</Typography>
                        <Box className="iconWrap">
                            <img src={calendarIcon} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>6:45 pm</Typography>
                        <Box className="iconWrap">
                             <img src={calendarIcon} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>6:45 pm</Typography>
                        <Box className="iconWrap">
                             <img src={calendarIcon} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>6:45 pm</Typography>
                        <Box className="iconWrap">
                             <img src={calendarIcon} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                    <List className='item'>
                        <Typography>6:45 pm</Typography>
                        <Box className="iconWrap">
                             <img src={calendarIcon} alt="calendar" />
                        </Box>
                        <Box>
                            <Typography>Puppy Class Scheduled</Typography>
                            <Typography>You have successfully booked puppy class</Typography>
                        </Box>
                    </List>
                </Box>
            </Box>
       
    );
}