import {Box, Button, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react'
import {LinearProgressBar} from '../../Components/Common';
import ProfileAbout from "./ProfileAbout";
import Trophies from './Trophies';
import {ProfileModals} from "../../Components/Modals";
import YourPack from "./YourPack";
import YourTeams from "./YourTeams";
import {GetDogDetail,getClientProfileProgress,getYourFamilyMembers,
getFamilyPets,getPetProfileProgress} from "../../Services/APIs";

import { Email } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const profileImg = require("../../assets/images/profileImg.svg").default;
const profileBadge = require("../../assets/images/profileBadge.svg").default;
const Dog = require("../../assets/images/dog-round.svg").default;


export default function PublicProfile({details,handleNext, setActive, initialState, setInitialState}) {
   
    const [selected, setSelected] = useState(0)
    const [clientProgress, setclientProgess] = useState('')
    const [childProgress, setChildProgess] = useState('')
    const [getFamily, setFamilyMembers] = useState('')
    const [getTeamPets, setFamilyPets] = useState('')
    const [open, setOpen] = useState(false)
    const [isConnect, setIsConnect] = useState(true);

    console.log('active----',initialState)
    console.log(initialState, "detailssssss-----")

    useEffect(() => {
       
        setTimeout(() => {
          
            getClientProfileProgressDetails();   
               }, 2000);
            getYourTeam();
            getFamilyPetsDetails();
        if (initialState.userType === 'dog' && initialState.selected) {
            GetDogDetail(initialState.selected.clientId, initialState.selected.sortKey)
                .then((response) => {
                    const [data] = response.data.Items;
                    setInitialState({...initialState, dog: data, userType: 'dog'});
                    getPetProfileProgressDetails(data.sortKey)
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
    const getClientProfileProgressDetails = () => {
        getClientProfileProgress()
        .then((response) => {
            const data = response.data;
            setclientProgess(data.clientProfileProgress)  
          

        })    }
    const getPetProfileProgressDetails = (childId) => {
        getPetProfileProgress(childId)
        .then((response) => {
            const data = response.data;
            setChildProgess(data.clientProfileProgress)  
          

        })    }

    const getYourTeam= () => {
        getYourFamilyMembers().then((response) => {
            const result = response?.data;
            setFamilyMembers(result)         

        })    }


    const getFamilyPetsDetails = () => {
        getFamilyPets().then((response) => {
            const result = response?.data;
            setFamilyPets(result)         

        })    }
        
//let birthDate = initialState.dog.birthDate;
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
                    <img src={initialState.userType === 'dog' ? initialState.selected?.profileImage : details.profileImage} alt="profiles"/>
                    <img src={profileBadge} alt="profile"/>
                </Box>
                <Box>
                <Typography>{initialState.userType === 'client' && initialState.selected==='' ? `${details?.firstName || 'John'} ${details?.lastName || 'Smith'}` : initialState.selected.firstName} </Typography>
                <Typography>{initialState.userType === 'dog' ? `${initialState.selected?.breed}`  : 'Reward Points : 3102'} </Typography>
                {initialState.userType === 'client' ? <Typography></Typography> :
                        <Typography>{`${yearsDiff} years and ${monthsDiff} months`} </Typography>}
                    <Typography>{initialState.userType === 'dog' ? "ZR Sherman Oaks" : "Gold Membership"}</Typography>
                    <Typography>{initialState.userType === 'client' && "Body - Universe"}</Typography>

            {/*                   
                    <Typography>{initialState.userType === 'dog' ? "ZR Sherman Oaks" : "Gold Membership"}</Typography> */}
                   
                  {(initialState.userType === 'client' && initialState.selected ==='')|| initialState.userType === 'dog' ? <Box className="profileProgressWrap">
                        <LinearProgressBar classes='achieveProgress' value={initialState.userType==='client'? clientProgress*100 : childProgress * 100}/>
                        {initialState.userType === 'client' && initialState.selected !=='' && clientProgress < 1 ?
                            <Button onClick={handleCompleteProfile} >Complete Profile</Button> :
                            <Typography className='progessCircle'><CheckCircleIcon/></Typography>}

                    </Box> : ''}
                </Box>

            </Box>
            <Box className="topStack trophyTopStack profileStack" sx={{ width: '100%' }}>
                
                <Button className={selected === 2 && 'active'} onClick={() => setSelected(2)}>About</Button>
                <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Profiles</Button>
                <Button className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Trophies</Button>
                {/* {initialState.userType === 'client' && initialState.selected ==='' ? <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Profiles</Button>:''} */}


            </Box>
            {/* {selected === 2 ? <ProfileAbout initialState={initialState}/> : selected === 0 && !isConnect ? */}
             {selected === 2 ? <ProfileAbout initialState={initialState} details={details}/> : selected === 0 ?

                <Box className="cartWrap profileCartWrap">
                    {(initialState.userType === 'dog' && initialState.selected !== '') ?
                        <>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState} details={details} familyPets={getTeamPets}  teamData={getFamily}/>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState} details={details} teamData={getFamily} familyPets={getTeamPets}/>
                        </>
                        : <>
                            <YourTeams setActive={setActive} initialState={initialState}
                                       setInitialState={setInitialState} details={details} teamData={getFamily} familyPets={getTeamPets}/>
                            <YourPack setActive={setActive} initialState={initialState}
                                      setInitialState={setInitialState} details={details} familyPets={getTeamPets}  teamData={getFamily}/>
                        </>}

               </Box> : <Box className='profile-no-data'>

               <Trophies initialState={initialState} details={details}/>
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
