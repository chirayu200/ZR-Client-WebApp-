import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Container, Typography} from "@mui/material";
import {CustomButton, NotificationSection} from "../../Components/Common";
import {default as backArrow} from "../../assets/images/orangeArrow.svg";
import ParentProfile from "./ParentProfile";
import DogProfile from "./DogProfile";
import {CheckClientDetail} from "../../Services/APIs";
import PublicProfile from "./PublicProfile";

import AddPet from "./AddPet";

import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TeamPackHeader from "./TeamPackHeader";


export default function ProfileMain({clientDetail}) {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const [isCompleted, setIsCompleted] = useState(false)
    const [initialState, setInitialState] = useState({
        userType: 'client',
        client: "",
        dog: "",
        selected: "",
    })

    // useEffect(() => {
    //     CheckClientDetail(clientDetail.sortKey)
    //         .then((response) => {
    //             const [data] = response.data.Items;
    //             setInitialState({...initialState, client: data})

    //         })

    // }, [clientDetail])
    useEffect(() =>{
        console.log(clientDetail);
    })

    const childComponent = [
        {
            title: 'Public Profile',
            component: <PublicProfile
                handleNext={() => setActive(1)}
                setActive={setActive}
                initialState={initialState}
                setInitialState={setInitialState}
            />
        },
        {
            title: 'Team',
            component: <TeamPackHeader initialState={initialState}
                                       setInitialState={setInitialState}
                                       setActive={setActive}
            />
        },
        {
            title: 'Add Pet',
            component:
                <AddPet initialState={initialState}
                        setInitialState={setInitialState}
                        handleNext={() => setActive(3)}
                />
        },

        {
            title: 'Edit Profile', component:
                <ParentProfile initialState={initialState}
                               clientDetail={clientDetail}
                               handleNext={() => setActive(4)}
                />
        },
        {
            title: 'Edit Dog Profile', component:
                <DogProfile initialState={initialState}
                />
        },

    ]

   
    return (
        <Container className='appointment-container'>
            <Box className='appointment-header'>

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
                                } else {
                                    // setActive(active - 1)
                                    setActive(0)
                                }
                            }}
                        />
                        <Typography className='header-text'>{childComponent[active].title}</Typography>
                    </Box>
                    {(active === 0 || active === 1) && (
                        // <Box className='shop-cart'>
                        <Box className='modal-header profile-content'>
                            <Button className='close-button' onClick={() => {

                                if(active===0)
                                {
                                    setActive(3)
                                }else{
                                    if(initialState.userType==='dog')
                                    {
                                        setActive(4)
                                    }else{
                                        setActive(3)
                                    }
                                }
                            }}>
                                {active === 0 ? <EditOutlinedIcon/>  : <PersonAddOutlinedIcon/> }
                            </Button>
                        </Box>

                    )}
                </Box>


                <NotificationSection/>
            </Box>
            {childComponent[active].component}
        </Container>
        
    )
}