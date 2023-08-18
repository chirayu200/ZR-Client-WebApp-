import React from 'react';
import {Box, Link, Typography} from "@mui/material";

export default function ProfileAbout({initialState}) {

    return (<>
        <Box className="cartWrap profileCartWrap">
            <Box className="template-list-main ">
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
            <Box className="template-list-main ">
                <Box className="trophyBoxHead"
                >
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


            </Box>
        </Box>
    </>)
}