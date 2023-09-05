import { Typography, Box, Button } from '@mui/material';
import React from 'react'
import { CustomButton } from '../../Components/Common';
import rightCircle from '../../assets/images/rightCircle.svg';
const profileImg = require("../../assets/images/profileImg.svg").default;
const Dog = require("../../assets/images/dog-round.svg").default;


export default function Team({ handleNext }) {
   
    return (
        <Box className="profileScreen">
            
           <Box className="yourTeamTop">

              <Box className="teamWrap">
                   <img src={profileImg} alt="profile" />
                   <img src={profileImg} alt="profile" />
              </Box>
              <Typography>Your Team</Typography>
           </Box>
            <Box className="cartWrap profileCartWrap">
                <Box className="template-list-main " style={{paddingTop:'94px'}}>
                  
                   
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
