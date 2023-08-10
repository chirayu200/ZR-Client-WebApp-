import React from 'react'
import {Box, Button, IconButton, Typography} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YourSchedule from '../Common/YourSchedule';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton} from '../Common';

export default function LocationSidebar({handleClose, clientDetail}) {

    return (
        <Box className="locationSidebar"
             sx={{width: '420px'}}
             role="presentation"

        >
            <IconButton className='closeNotify' onClick={handleClose}>
                <ChevronLeftIcon/>
            </IconButton>
            <Box className="locationHead">
                <Box>
                    <LocationOnIcon/>
                    <Typography>Zoom Room {clientDetail?.city||'Austin'}</Typography>
                </Box>
                <Typography>Open</Typography>
                <Typography>Closes in 4 hours</Typography>
            </Box>
            <Box className='main-schedule-box'>
                <YourSchedule/>
            </Box>
            <CustomButton

                title={"Explore Schedule"}
                color='#fff'
                backgroundColor='#32B2AC'
                iconJsx={<ChevronRightIcon/>}
                fullWidth
                className='book-btn'

            />

            <Box className="dirBox">
                <Box>
                    <Box>
                        <Typography>Location Address</Typography>
                        <Typography>{clientDetail?.addressLine1||"P. Sherman"}, {clientDetail.addressLine2||"Wallaby Way"}, {clientDetail?.city||'Austin'}</Typography>
                    </Box>
                    <Button>DIRECTIONS</Button>
                </Box>
                <Box>
                    <Typography>Location Phone #</Typography>
                    <Typography>{clientDetail?.workPhone||'012 345 6789'}</Typography>
                </Box>
            </Box>
            <CustomButton
                className='book-btn'
                title={"Message Location"}
                color='#fff'
                backgroundColor='#32B2AC'
                iconJsx={<ChevronRightIcon/>}
                fullWidth


            />

        </Box>
    )
}
