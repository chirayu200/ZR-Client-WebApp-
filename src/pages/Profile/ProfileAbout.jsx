import React from 'react';
import {Box, Link, Typography,Button} from "@mui/material";

export default function ProfileAbout({initialState,details}) {
console.log(details, 'initialStfdateinitialState');
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
                <Typography> {initialState.dog?.notes} </Typography>
            </Box>
        </Box>
        <Box className="template-list-main ">
            <Box className="trophyBoxHead">
                <Typography className='heading'>
                    Completed Service
                </Typography>
            </Box>
            <Box className='profile-mid-section'>
            {Object.keys(initialState?.dog?.completed || {}).map((key) => {
                        const value = initialState.dog.completed[key];
                        if (value === 'Yes') {
                            return (
                    <Box className="item" key={key}>
                    <Typography>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Typography>
                    </Box>
                            );
                        }
                        return null; 
                    })}
                </Box>
            <Box className='profile-mid-section'>            
            </Box>
        </Box>
    </Box>
)}

             {initialState.userType === 'client' && (
        <Box className="cartWrap profileCartWrap">
            <Box className="template-list-main template-list-about">
                <Box className="trophyBoxHead" >
                    <Typography className='heading'> Meet {details.firstName} </Typography>

                </Box>
                <Box className="profile-mid-section">
                    <Typography className=''>
                      {details.yourSelf}
                        {/* <Link className='see-more'>See More</Link> */}
                    </Typography>

                </Box>


            </Box>
            {/* <Box className="template-list-main template-list-about">
                <Box className="trophyBoxHead"
                >
                    <Typography className='heading'>
                        Completed Service
                    </Typography>
                   
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


            </Box> */}
        </Box>
        )}
    </>)
}
