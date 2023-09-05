import {Box, Button, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react'
import {LinearProgressBar} from '../../Components/Common';
import ProfileAbout from "./ProfileAbout";
import {ProfileModals} from "../../Components/Modals";
import YourPack from "./YourPack";
import YourTeams from "./YourTeams";
import {GetDogDetail} from "../../Services/APIs";

const profileImg = require("../../assets/images/profileImg.svg").default;
const profileBadge = require("../../assets/images/profileBadge.svg").default;
const Dog = require("../../assets/images/dog-round.svg").default;


export default function PublicProfile({handleNext, setActive, initialState, setInitialState,details}) {
    const [selected, setSelected] = useState(0)

    const [open, setOpen] = useState(false)
    // const [isConnect, setIsConnect] = useState(true);
    console.log(initialState, "eeeeeeeeeeeeeeeeeeeeeeee")
    useEffect(() => {
        if (initialState.userType === 'dog' && initialState.selected) {
            GetDogDetail(initialState.client.sortKey, initialState.selected.sortKey)
                .then((response) => {
                    const [data] = response.data.Items;
                    setInitialState({...initialState, dog: data, userType: 'dog'});

                })
        }
    }, [initialState.selected])
    // const handleCompleteProfile = () => {
    //     if (initialState.userType === 'dog') {
    //         setActive(4)
    //     } else {
    //         setActive(3)
    //     }
    // }
    // Assuming birthDate is a string in the format 'DD-MM-YYYY'
// Assuming birthDate is a string in the format 'DD-MM-YYYY'
let birthDate = initialState?.dog?.birthDate;
let yearsDiff = 0;
let monthsDiff = 0;

// Check if birthDate is defined and not empty
if (birthDate && birthDate?.length > 0) {
  const [month, day, year] = birthDate?.split('-'); // Adjusted the order of day and month
  const birthDateObj = new Date(`${year}-${month}-${day}`);
  const currentDate = new Date();

  yearsDiff = currentDate.getFullYear() - birthDateObj.getFullYear();
  monthsDiff = currentDate.getMonth() - birthDateObj.getMonth();

  if (currentDate.getDate() < birthDateObj.getDate()) {
    monthsDiff--;
  }

  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff = 12 + monthsDiff;
  }
}




    return (
        <Box className="profileScreen">
            <Box className="profilArea">
                <Box>
                    <img src={initialState.userType === 'dog' ? initialState.selected?.profileImage : details.profileImage} alt="profile"/>
                    <img src={profileBadge} alt="profile"/>
                </Box>
                <Box>
                <Typography>{initialState.userType === 'client' ? `${details?.firstName || 'John'} ${details?.lastName || 'Smith'}` : initialState.selected.firstName} </Typography>
                <Typography>{initialState.userType === 'dog' ? `${initialState.selected?.breed}`  : 'Reward Points : 3102'} </Typography>
                {initialState.userType === 'client' ? <Typography>1 Year Old</Typography> :
                        <Typography>{`${yearsDiff} years and ${monthsDiff} months`} </Typography>}
                    <Typography>{initialState.userType === 'dog' ? "ZR Sherman Oaks" : "Gold Membership"}</Typography>
                   

                    <Box className="profileProgressWrap">
                        <LinearProgressBar classes='achieveProgress' value={60}/>
                        {initialState.userType === 'client' ?
                            // <Button onClick={handleCompleteProfile}>Complete Profile</Button> 
                            <Button>Complete Profile</Button>:
                            <Typography>60%</Typography>}

                    </Box>
                </Box>

            </Box>
            <Box className="topStack trophyTopStack profileStack">
                <Button className={selected === 2 && 'active'} onClick={() => setSelected(2)}>About</Button>
                <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Profiles</Button>
                <Button className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Trophies</Button>
            </Box>
            {/* {selected === 2 ? <ProfileAbout initialState={initialState}/> : selected === 0 && !isConnect ? */}
            {selected === 2 ? <ProfileAbout initialState={initialState}/> : selected === 0 ?

                <Box className="cartWrap profileCartWrap">
                    {initialState.userType === 'dog' && initialState.selected !== '' ?
                        <>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState} details={details}/>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState} details={details}/>
                        </>
                        : <>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState} details={details}/>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState} details={details}/>
                        </>}


                </Box> : <Box className='profile-no-data'>

                    <Typography>There’s nothing to see here.</Typography>
                    <Button onClick={() => {
                        setOpen(true);
                    }}>Connect</Button>
                </Box>}
            <ProfileModals open={open} handleClose={() => setOpen(false)} type={'invite'}
                           handleNext={() => {
                               setOpen(false);
                               setSelected(0);
                            //    setIsConnect(false)
                           }}/>
        </Box>

    )
}
