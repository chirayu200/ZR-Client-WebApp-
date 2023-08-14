import React, {useState} from "react";
import {Box, Container, Typography} from "@mui/material";


import {CustomButton, NotificationSection} from "../../Components/Common";
import AchievementMain from './AchievementMain';
import TrophyShelf from './TrophyShelf';
import AllJourney from './AllJourney';
import IndividualJourney from './IndividualJourney';
import {useNavigate} from "react-router-dom";


const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Achievements() {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const childComponent = [
        {title: "Trophy Shelf", component: <AchievementMain setActive={setActive} />},
        {title: "Trophies", component: <TrophyShelf handleNext={() => setActive(2)}/>},
        {title: "All Journey", component: <AllJourney handleNext={() => setActive(3)}/>},
        {title: "Individual Journey", component: <IndividualJourney handleNext={() => setActive(4)}/>},
       
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
                                    } else {
                                        if(active === 2){
                                            setActive(0)
                                        }
                                        else{
                                            setActive(active - 1)
                                        }
                                        
                                    }
                                }}
                            />
                            <Typography className='header-text'>{childComponent[active].title}</Typography>
                        </Box>
                       
                    </Box>
                </>}

                <NotificationSection/>
            </Box>
            {childComponent[active].component}
        </Container>
    );
}
