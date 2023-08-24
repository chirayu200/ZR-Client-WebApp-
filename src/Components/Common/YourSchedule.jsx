import React from 'react';
import {Box, Typography} from "@mui/material";

import {CustomButton} from "./CustomButton";

const nextArrow = require("../../assets/images/chevron-up-orange.svg").default;


export default function YourSchedule() {
    return (
        <>
            <Typography>My Schedule</Typography>
            <Box className='class-section-box'>
                <Box className='class-section'>
                    <Typography>Puppy Class</Typography>
                    <Typography>May 15, 05:00 PM</Typography>
                </Box>
                <CustomButton
                    className='arrow-btn'
                    color='#E35205'
                    icon={nextArrow}
                    backgroundColor='#fff'
                    // onClick={() => setActive(0)}
                />
            </Box>
            <Box className='class-section-box'>
                <Box className='class-section'>
                    <Typography>Puppy Class</Typography>
                    <Typography>May 15, 05:00 PM</Typography>
                </Box>
                <CustomButton
                    className='arrow-btn'
                    color='#E35205'
                    icon={nextArrow}
                    backgroundColor='#fff'
                    // onClick={() => setActive(0)}
                />
            </Box>

        </>
    )
}
