import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { CustomButton, NotificationSection } from "../../Components/Common";
import { default as backArrow } from "../../assets/images/orangeArrow.svg";
import ParentProfile from "./ParentProfile";
import DogProfile from "./DogProfile";
import { CheckClientDetail } from "../../Services/APIs";
import PublicProfile from "./PublicProfile";

import AddPet from "./AddPet";

import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TeamPackHeader from "./TeamPackHeader";


export default function ProfileMain({ clientDetail }) {
    const [active, setActive] = useState(0)
    const navigate = useNavigate();
    const [isCompleted, setIsCompleted] = useState(false)
    const [initialState, setInitialState] = useState({
        userType: 'client',
        client: "",
        dog: "",
        selected: "",
    })
    console.log('sctive statuss....', active)
    // useEffect(() => {
    //     CheckClientDetail(clientDetail.sortKey)
    //         .then((response) => {
    //             const [data] = response.data.Items;
    //             setInitialState({...initialState, client: data})

    //         })

    // }, [clientDetail])

    const childComponent = [
        {
            title: 'Profile',
            component: <PublicProfile
                handleNext={() => setActive(1)}
                setActive={setActive}
                initialState={initialState}
                setInitialState={setInitialState}
                details={clientDetail}
            />
        },
        {
            title: 'Profile',
            component: <TeamPackHeader initialState={initialState}
                setInitialState={setInitialState}
                setActive={setActive}
                details={clientDetail}

            />
        },
        {
            title: 'Add Pet',
            component:
                <AddPet initialState={initialState}
                    setInitialState={setInitialState}
                    handleNext={() => setActive(0)}
                />
        },

        {
            title: 'Edit Profile', component:
                <ParentProfile initialState={initialState}
                    handleNext={() => setActive(4)}
                    clientDetail={clientDetail}
                    setActive={setActive}

                />
        },
        {
            title: 'Edit Dog Profile', component:
                <DogProfile initialState={initialState}
                    setInitialState={setInitialState}
                    setActive={setActive}
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
                                // if (initialState.userType==='dog') {
                                // window.location.reload();
                                // navigate('/')
                                //     setActive(0)
                                // } else if(childComponent[active].title === 'Team') {
                                //     setActive(0)
                                // }
                                // else if(childComponent[active].title === 'Add Pet') {
                                //     setActive(1)
                                // }
                                // else if(childComponent[active].title === 'Edit Profile') {
                                //     setActive(0)
                                // }
                                // else if(childComponent[active].title === 'Edit Dog Profile') {
                                //     setActive(1)
                                // }
                                // setActive(active-1)
                                if (active === 0 && initialState?.userType === 'dog') {
                                    setInitialState({ ...initialState, userType: 'client' })
                                }
                                else {
                                    setActive(active - 1);
                                }
                            }}
                        />
                        <Typography className='header-text'>{childComponent[active].title}</Typography>
                    </Box>
                    {(active === 0 || active === 1) && (
                        // <Box className='shop-cart'>
                        <Box className='modal-header profile-content'>
                            <Button className='close-button' onClick={() => {

                                if (initialState.userType === 'client') {
                                    setActive(3)
                                } else {
                                    setActive(4)

                                }
                                if (initialState.userType === 'dog') {
                                    if (active !== 0) {
                                        setActive(2)
                                    }
                                    else {
                                        setActive(4)
                                    }

                                }
                                //  else{
                                //      if(initialState.userType==='dog')
                                //      {
                                //          setActive(4)
                                //      }else{
                                //          setActive(3)
                                //      }
                                //  }

                            }}>
                                {/* {active === 0||active===1 ? <PersonAddOutlinedIcon/> : <EditOutlinedIcon/>} */}
                                {active === 0 ? <EditOutlinedIcon /> : <PersonAddOutlinedIcon />}
                            </Button>
                        </Box>

                    )}
                </Box>


                <NotificationSection />
            </Box>
            {childComponent[active].component}
        </Container>

    )
}