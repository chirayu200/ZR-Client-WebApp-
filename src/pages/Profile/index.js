import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Container, Typography} from "@mui/material";
import {CustomButton, NotificationSection} from "../../Components/Common";
import {default as backArrow} from "../../assets/images/orangeArrow.svg";
import ParentProfile from "./ParentProfile";
import DogProfile from "./DogProfile";
import {CheckClientDetail, GetDogDetail} from "../../Services/APIs";


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
        GetDogDetail(clientDetail.sortKey,"iiii")
            .then((response) => {
                const [data] = response.data.Items;
                setDogDetail(data);
            })
    }, [clientDetail])
    const childComponent = [
        {title: 'Edit Profile', component: <ParentProfile userDetail={userDetail} handleNext={()=>setActive(1)}/>},
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