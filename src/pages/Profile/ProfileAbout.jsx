import React from 'react';
import {Box, Link, Typography,Button} from "@mui/material";

export default function ProfileAbout({initialState}) {
console.log(initialState, 'initialStfdateinitialState');
    return (<>
{initialState.userType === 'dog' && (
    <Box className="cartWrap profileCartWrap">
        <Box className="template-list-main ">
            <Box className="trophyBoxHead">
                <Typography className='heading'>
                    Meet {initialState?.dog?.firstName} - The Marvelous {initialState?.dog?.breed}
                </Typography>
            </Box>
            <Box className="profile-mid-section">
                <Typography>
                    Get ready to be amazed by {initialState.dog?.firstName}, the {initialState.dog?.gender} {initialState.dog?.breed} with a charming personality. Born on {initialState?.dog?.birthDate}, {initialState.dog?.firstName} is your loyal companion in every adventure.
                    With a {initialState.dog?.coatColor} coat that's soft to the touch, {initialState.dog?.firstName} captures hearts wherever they go. This {initialState.dog?.gender} has a penchant for {initialState.dog?.tricks} tricks and is always ready for a game of {initialState.dog?.agility} agility.
                    {initialState.dog?.barking === 'Yes' ? ' When excited, you can hear their cheerful barks echoing through the air.' : ''}
                    {initialState.dog?.social === 'Yes' ? ' Social and friendly, they make friends easily and brighten up any room.' : ''}
                    {initialState.dog?.strangers === 'No' ? ' While they might be a bit reserved around strangers, their warmth shines through once they get to know you.' : ''}
                    Curious by nature, {initialState.dog?.firstName} loves exploring new scents and places, making each walk an adventure to remember.
                    {/* <Link className='see-more'>See More</Link> */}
                </Typography>
            </Box>
        </Box>
        <Box className="template-list-main ">
            <Box className="trophyBoxHead">
                <Typography className='heading'>
                    Completed Service
                </Typography>
            </Box>
            <Box className='profile-mid-section'>
                    {initialState && initialState.client?.pets?.map((item) => {
                        const allKeys = Object.keys(item.completed).filter(key => item.completed[key] === 'Yes');
                        return (
                            <>
                                {allKeys.map((subItem, subIndex) => (
                                    <Box className="item" key={subIndex}>
                                        <Typography>
                                            {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                                        </Typography>
                                    </Box>
                                ))}
                            </>
                        )
                    })}


                </Box>
            <Box className='profile-mid-section'>
                {/* Render completed services for the dog */}
                {/* Your logic here */}
            </Box>
        </Box>
    </Box>
)}

             {initialState.userType === 'client' && (
        <Box className="cartWrap profileCartWrap">
            <Box className="template-list-main template-list-about">
                <Box className="trophyBoxHead"

                >
                    <Typography className='heading'>
                        Meet Max
                    </Typography>

                </Box>
                <Box className="profile-mid-section">
                    <Typography className=''>
                        Max is a handsome Golden Retriever with a lustrous, golden coat that is soft to the
                        touch. He has a well-built and athletic body, with a muscular build and a wagging tail that
                        never seems to stop...
                        <Link className='see-more'>See More</Link>
                    </Typography>

                </Box>


            </Box>
            <Box className="template-list-main template-list-about">
                <Box className="trophyBoxHead"
                >
                    <Typography className='heading'>
                        Completed Service
                    </Typography>
                    {/* <Box className="service-btn">
                    <Button variant="text" sx={{color:'black', display:'flex'}}>Orientation</Button>
                    </Box> */}
                    <Box className="service-btn2" sx={{mx:3}}>
                    <Button variant="text" sx={{color:'black', display:'flex'}}>Orientation</Button>
                    </Box>

                    

                </Box>
                <Box className='profile-mid-section'>
                    {initialState && initialState.client?.pets?.map((item) => {
                        const allKeys = Object.keys(item.completed).filter(key => item.completed[key] === 'Yes');
                        return (
                            <>
                                {allKeys.map((subItem, subIndex) => (
                                    <Box className="item" key={subIndex}>
                                        <Typography>
                                            {subItem.charAt(0).toUpperCase() + subItem.slice(1)}
                                        </Typography>
                                    </Box>
                                ))}
                            </>
                        )
                    })}


                </Box>


            </Box>
        </Box>
        )}
    </>)
}
