import {Box, Typography} from '@mui/material';
import React from 'react'
import YourTeams from "./YourTeams";
import YourPack from "./YourPack";

const profileImg = require("../../assets/images/profileImg.svg").default;
const Dog = require("../../assets/images/dog-round.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";

export default function TeamPackHeader({setActive, initialState,setInitialState,details}) {
    const firstTwoPets = details?.pets?.slice(0, 2);

console.log('dog view all......',initialState.userType)
    return (
        <Box className="profileScreen">

            <Box className="yourTeamTop">

                <Box className="teamWrap">
                    <img src={initialState?.userType==='dog' ? firstTwoPets[0]?.profileImage : petPlaceholder} alt="profile"/>
                    <img src={initialState?.userType==='dog' ? firstTwoPets[1]?.profileImage : petPlaceholder} alt="profile"/>
                </Box>
                <Typography>Your {initialState.userType==='dog'?'Pack':"Team"}</Typography>
            </Box>
            <Box className="cartWrap profileCartWrap">

                <YourTeams setActive={setActive} initialState={initialState}
                           setInitialState={setInitialState} details={details}/>
                <YourPack setActive={setActive} initialState={initialState}
                          setInitialState={setInitialState} details={details}/>


            </Box>
            
        </Box>
    )
}
