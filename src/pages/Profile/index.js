import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import {CustomButton, NotificationSection} from "../../Components/Common";
import {default as backArrow} from "../../assets/images/orangeArrow.svg";
import ParentProfile from "./ParentProfile";
import DogProfile from "./DogProfile";
import {CheckClientDetail, GetDogDetail} from "../../Services/APIs";
import PublicProfile from "./PublicProfile";
import Team from './Team'
import AddPet from "./AddPet";
import LearnDog from "./LearnDog"


export default function ProfileMain({clientDetail}) {
    const [active, setActive] = useState(0)
    const [userDetail, setUserDetail] = useState('')
    const [dogDetail, setDogDetail] = useState('')
    const navigate = useNavigate();
    useEffect(() => {
        CheckClientDetail(clientDetail.sortKey)
            .then((response) => {
            const [data] = response.data.Items;
            setUserDetail(data);
        })
        GetDogDetail(clientDetail.sortKey,"#PET#2U3jAO3JcJLBwlJWyyjuoM6VnJl")
            .then((response) => {
                const [data] = response.data.Items;
                setDogDetail(data);
            })
    }, [clientDetail])
    const childComponent = [
        {title: 'Public Profile', component: <PublicProfile userDetail={userDetail} handleNext={()=>setActive(1)}/>},
        {title: 'Team', component: <Team userDetail={userDetail} handleNext={()=>setActive(2)}/>},
        {title: 'Add Pet', component: <AddPet userDetail={userDetail} handleNext={()=>setActive(3)}/>},
        {title: 'Learn Dog', component: <LearnDog userDetail={userDetail} handleNext={()=>setActive(4)}/>},
        {title: 'Edit Profile', component: <ParentProfile userDetail={userDetail} handleNext={()=>setActive(5)}/>},
        {title: 'Edit Dog Profile', component: <DogProfile dogDetail={dogDetail}/>},

    ]
    return (
        <Container className='appointment-container'>
            <Box className='appointment-header'>
                {active === 4 ? <Box></Box> : <>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => {
                                    if (active === 0) {
                                        navigate('/')
                                    }
                                }}
                            />
                            <Typography className='header-text'>{childComponent[active].title}</Typography>
                        </Box>
                        {active === 5 && (
                            <Box className='shop-cart'>
                                <Typography>Available Credits</Typography>
                            </Box>
                        )}
                    </Box>
                </>}

                <NotificationSection/>
            </Box>
            {childComponent[active].component}
        </Container>
    )
}