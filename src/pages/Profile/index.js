import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";
import { CustomButton, NotificationSection } from "../../Components/Common";
import { default as backArrow } from "../../assets/images/orangeArrow.svg";
import { ReactComponent as AddDogIcon } from "../../assets/images/addDog.svg";
import ParentProfile from "./ParentProfile";
import DogProfile from "./DogProfile";
import { CheckClientDetail } from "../../Services/APIs";
import PublicProfile from "./PublicProfile";

import AddPet from "./AddPet";
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import TeamPackHeader from "./TeamPackHeader";

export default function ProfileMain({ clientDetail ,teamData}) {
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
                teamData={teamData}
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
                    handleNext={() => setActive(0)}
                    clientDetail={clientDetail}
                    setActive={setActive}
                    setInitialState={setInitialState}

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
                                
                                if (childComponent[active].title === 'Profile') {
                                    if(active===0){
                                        if(initialState.userType === 'client' && initialState.selected !== ''){
                                            setInitialState({ ...initialState, userType: 'client', selected : '' })
                                            setActive(0)
                                        }else {
                                            if(initialState.userType === 'dog'){
                                                setInitialState({ ...initialState, userType: 'client', selected : '' })
                                            setActive(0) 
                                            }else{
                                                navigate('/') 
                                            }
                                            
                                            
                                        }
                                       
                                    }else{
                                      // window.location.reload();
                                        setInitialState({ ...initialState, userType: 'client', selected : '' })
                                            setActive(0)
                                    }
                               
                                }  if(childComponent[active].title === 'Team') {
                                    setActive(0)
                                }
                                 if(childComponent[active].title === 'Add Pet') {
                                    setActive(1)
                                }
                                 if(childComponent[active].title === 'Edit Profile') {
                                    setActive(0)
                                }
                                 if(childComponent[active].title === 'Edit Dog Profile') {
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
                                {active === 0 ? <EditOutlinedIcon/> : <AddDogIcon/>}
                                {/* {active === 0 ? <EditOutlinedIcon/> : (initialState.userType === 'dog' && initialState.selected ==='') ? <addDogIcon /> : <PersonAddOutlinedIcon />} */}
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