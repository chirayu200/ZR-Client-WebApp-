import { Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react'
import {LinearProgressBar} from '../../Components/Common';
import { CustomButton } from '../../Components/Common';
import rightCircle from '../../assets/images/rightCircle.svg';
const profileImg = require("../../assets/images/profileImg.svg").default;
const profileBadge = require("../../assets/images/profileBadge.svg").default;
const Dog = require("../../assets/images/dog-round.svg").default;


export default function PublicProfile({ handleNext }) {
    const [selected, setSelected] = useState(0)
    return (
        <Box className="profileScreen">
            <Box className="profilArea">
                <Box>
                    <img src={profileImg} alt="profile" />
                    <img src={profileBadge} alt="profile" />

                </Box>
                <Box>
                    <Typography>John Smith</Typography>
                    <Typography>Reward Points : 3102 </Typography>
                    <Typography>Gold Membership</Typography>
                    <Typography>Body - Universe</Typography>
                    <Box className="profileProgressWrap">
                        <LinearProgressBar classes='achieveProgress' />
                        <Button>Complete Profile</Button>
                    </Box>
                </Box>

            </Box>
            <Box className="topStack trophyTopStack profileStack">
                <Button>About</Button>
                <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Profiles</Button>
                <Button className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Trophies</Button>
            </Box>
            <Box className="cartWrap profileCartWrap">
                <Box className="template-list-main ">
                    <Box className="trophyBoxHead"

                    >
                        <Typography className='header-text'>
                            Your Team
                        </Typography>

                        <CustomButton onClick={handleNext}
                            className='viewAllBtn'
                            title={"View All"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                        />
                    </Box>
                    <Box className="item">
                        <Box className="itemImgWrap">
                            <img src={Dog} alt="dog" />
                            <Box>
                            <Typography>Ralph Edwards</Typography>
                            <Typography>
                            Reward Points: 3214
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            
                            <Button><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="itemImgWrap">
                            <img src={Dog} alt="dog" />
                            <Box>
                            <Typography>Ralph Edwards</Typography>
                            <Typography>
                            Reward Points: 3214
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            
                            <Button><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>


                </Box>
                <Box className="template-list-main ">
                    <Box className="trophyBoxHead"

                    >
                        <Typography className='header-text'>
                            Your Pack
                        </Typography>

                        <CustomButton
                            className='viewAllBtn'
                            title={"View All"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                        />
                    </Box>
                    <Box className="item">
                        <Box className="itemImgWrap">
                            <img src={Dog} alt="dog" />
                            <Box>
                            <Typography>Ralph Edwards</Typography>
                            <Typography>
                            Reward Points: 3214
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>Firedog</Typography>
                            <Button><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box className="itemImgWrap">
                            <img src={Dog} alt="dog" />
                            <Box>
                            <Typography>Ralph Edwards</Typography>
                            <Typography>
                            Reward Points: 3214
                            </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>Firedog</Typography>
                            <Button><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>


                </Box>
            </Box>
        </Box>
    )
}
