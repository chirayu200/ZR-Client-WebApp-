import {Avatar, Box, Stack, Typography} from "@mui/material";
import {CustomButton} from "./CustomButton";
import {default as back} from "../../assets/images/backArrow.svg";
import {default as next} from "../../assets/images/nextArrow.svg";
import dog1 from "../../assets/images/dog-obedience-training.png";
import React from "react";

export const LeadershipBoard=()=>{


    return(
        <>
            <Box className='top-achieved-list'>
                <Box className='achieved-header'>
                    <Typography className='heading'>
                        Leaderboard: All Locations
                    </Typography>
                    <Box>
                        <CustomButton
                            className='arrow-btn'
                            color='#fff'
                            icon={back}
                            backgroundColor='#32B2AC'
                        />
                        <CustomButton
                            className='arrow-btn'
                            color='#fff'
                            icon={next}
                            backgroundColor='#32B2AC'
                        />
                    </Box>
                </Box>
                <Typography className='description'>
                    Most Training Session across all zoom Room Past Year
                </Typography>
                <Box className='items-wrapper'>
                    <Stack className='holders-item'>
                        <Box className='item-content'>
                            <Box className='first-section'>
                                <Box className='counter'>
                                    <Typography className='text'>1st</Typography>
                                </Box>
                                <Box className='avatar'>
                                    <Box className='border-white '>
                                        <Avatar alt='Remy Sharp' src={dog1}/>
                                    </Box>
                                </Box>
                                <Typography>Cooper</Typography>
                            </Box>
                            <Typography>88 Session</Typography>
                        </Box>
                    </Stack>

                    <Stack className='holders-item selected'>
                        <Box className='item-content'>
                            <Box className='first-section'>
                                <Box className='counter'>
                                    <Typography className='text'>2nd</Typography>
                                </Box>
                                <Box className='avatar'>
                                    <Box className='border-white '>
                                        <Avatar alt='Remy Sharp' src={dog1}/>
                                    </Box>
                                </Box>
                                <Typography>Cooper</Typography>
                            </Box>
                            <Typography>70 Session</Typography>
                        </Box>
                    </Stack>
                    <Stack className='holders-item'>
                        <Box className='item-content'>
                            <Box className='first-section'>
                                <Box className='counter'>
                                    <Typography className='text'>3rd</Typography>
                                </Box>
                                <Box className='avatar'>
                                    <Box className='border-white '>
                                        <Avatar alt='Remy Sharp' src={dog1}/>
                                    </Box>
                                </Box>
                                <Typography>Cooper</Typography>
                            </Box>
                            <Typography>60 Session</Typography>
                        </Box>
                    </Stack>
                    <Stack className='holders-item'>
                        <Box className='item-content'>
                            <Box className='first-section'>
                                <Box className='counter'>
                                    <Typography className='text'>1st</Typography>
                                </Box>
                                <Box className='avatar'>
                                    <Box className='border-white '>
                                        <Avatar alt='Remy Sharp' src={dog1}/>
                                    </Box>
                                </Box>
                                <Typography>Cooper</Typography>
                            </Box>
                            <Typography>88 Session</Typography>
                        </Box>
                    </Stack>
                    <Stack className='holders-item'>
                        <Box className='item-content'>
                            <Box className='first-section'>
                                <Box className='counter'>
                                    <Typography className='text'>1st</Typography>
                                </Box>
                                <Box className='avatar'>
                                    <Box className='border-white '>
                                        <Avatar alt='Remy Sharp' src={dog1}/>
                                    </Box>
                                </Box>
                                <Typography>Cooper</Typography>
                            </Box>
                            <Typography>88 Session</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}