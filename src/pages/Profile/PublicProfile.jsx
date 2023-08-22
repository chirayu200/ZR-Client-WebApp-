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


export default function PublicProfile({handleNext, setActive, initialState, setInitialState}) {
    const [selected, setSelected] = useState(0)

    const [open, setOpen] = useState(false)
    const [isConnect, setIsConnect] = useState(true);
    console.log(initialState, "initialState")
    useEffect(() => {
        if (initialState.userType === 'dog' && initialState.selected) {
            GetDogDetail(initialState.client.sortKey, initialState.selected.sortKey)
                .then((response) => {
                    const [data] = response.data.Items;
                    setInitialState({...initialState, dog: data, userType: 'dog'});

                })
        }
    }, [initialState.selected])
    const handleCompleteProfile = () => {
        if (initialState.userType === 'dog') {
            setActive(4)
        } else {
            setActive(3)
        }
    }
    return (
        <Box className="profileScreen">
            <Box className="profilArea">
                <Box>
                    <img src={initialState.userType === 'dog' ? Dog : profileImg} alt="profile"/>
                    <img src={profileBadge} alt="profile"/>
                </Box>
                <Box>
                    <Typography>{`${initialState[initialState.userType]?.firstName || 'John'} ${initialState[initialState.userType]?.lastName || 'Smith'}`} </Typography>
                    <Typography>{initialState.userType === 'dog' ? "Gold Retriever" : 'Reward Points : 3102'} </Typography>
                    <Typography>{initialState.userType === 'dog' ? "ZR Sherman Oaks" : "Gold Membership"}</Typography>
                    {initialState.userType === 'client' ? <Typography>Body - Universe</Typography> :
                        <Typography>1 Year Old</Typography>}

                    <Box className="profileProgressWrap">
                        <LinearProgressBar classes='achieveProgress' value={60}/>
                        {initialState.userType === 'client' ?
                            <Button onClick={handleCompleteProfile}>Complete Profile</Button> :
                            <Typography>60%</Typography>}

                    </Box>
                </Box>

            </Box>
            <Box className="topStack trophyTopStack profileStack">
                <Button className={selected === 2 && 'active'} onClick={() => setSelected(2)}>About</Button>
                <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Profiles</Button>
                <Button className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Trophies</Button>
            </Box>
            {selected === 2 ? <ProfileAbout initialState={initialState}/> : selected === 0 && !isConnect ?
                <Box className="cartWrap profileCartWrap">
                    {initialState.userType === 'dog' && initialState.selected !== '' ?
                        <>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState}/>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState}/>
                        </>
                        : <>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState}/>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState}/>
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
                               setIsConnect(false)
                           }}/>
        </Box>

    )
}
