import {Box, Button, Typography} from "@mui/material";
import {CustomButton} from "../../Components/Common";
import {default as Dog} from "../../assets/images/dog-round.svg";
import rightCircle from "../../assets/images/rightCircle.svg";
import React from "react";


const profileImg = require("../../assets/images/profileImg.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";
export default function YourTeams({setActive, initialState, setInitialState}) {
    const handleNextPage = () => {
        setActive(1);
        setInitialState({...initialState, userType: 'client'})
    }

    return (
        <Box className="template-list-main ">
            {initialState.userType === 'dog' && initialState.selected !== '' ?
                <Box className="trophyBoxHead">
                    <Typography className='header-text'>
                        Client
                    </Typography>

                    <CustomButton onClick={handleNextPage}
                                  className='viewAllBtn'
                                  title={"View All"}
                                  color='#fff'
                                  backgroundColor='#32B2AC'
                    />
                </Box> :
                <Box className="trophyBoxHead">
                    <Typography className='header-text'>
                        Your Team
                    </Typography>

                    <CustomButton onClick={handleNextPage}
                                  className='viewAllBtn'
                                  title={"View All"}
                                  color='#fff'
                                  backgroundColor='#32B2AC'
                    />
                </Box>}


            <Box className="item">
                <Box className="itemImgWrap">
                    <img src={initialState.userType === 'dog' ? petPlaceholder : profileImg} alt="dog"/>
                    <Box>
                        <Typography>Ralph Edwards</Typography>
                        <Typography>
                            Reward Points: 3214
                        </Typography>
                    </Box>
                </Box>
                <Box>

                    <Button><img src={rightCircle} alt='close'/> </Button>
                </Box>
            </Box>


            <Box className="item">
                <Box className="itemImgWrap">
                    <img src={initialState.userType === 'dog' ? petPlaceholder : profileImg} alt="dog"/>
                    <Box>
                        <Typography>Ralph Edwards</Typography>
                        <Typography>
                            Reward Points: 3214
                        </Typography>
                    </Box>
                </Box>
                <Box>

                    <Button><img src={rightCircle} alt='close'/> </Button>
                </Box>
            </Box>


        </Box>
    )
}