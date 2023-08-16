import React from 'react'
import { Box, Typography, InputLabel, TextField, Link, Button } from "@mui/material";
import { LeadershipBoard, CustomButton } from "../../Components/Common";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgressBar from '../../Components/Common/LinearProgress';

const Dog = require("../../assets/images/dog-round.svg").default;
const StarDog = require("../../assets/images/starDog.svg").default;
const adjDogOne = require("../../assets/images/adjDogOne.svg").default;
const badge1 = require("../../assets/images/badge1.svg").default;
const badge2 = require("../../assets/images/badge2.svg").default;
const badge3 = require("../../assets/images/badge3.svg").default;

export default function AchievementMain({ setActive }) {
   return (
      <>
         <Box className="dogSlides">
            <Button>
               <img src={Dog} alt="dog" />
               <Typography>Charlie</Typography>
            </Button>
            <Button className="active" >
               <img src={Dog} alt="dog" />
               <Typography>Cooper</Typography>
            </Button>
            <Button>
               <img src={Dog} alt="dog" />
               <Typography>Murphy</Typography>
            </Button>
         </Box>
         <Box className="trophyShelfWrap">
         <Box className="trophyShelfFlex">
            <Box className="item achievements-section">
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography className='header-text'>
                     Journey: <span>Agile Dog </span>
                  </Typography>

                  <CustomButton onClick={()=> setActive(2)}
                     className='viewAllBtn'
                     title={"View All Journey"}
                     color='#fff'
                     backgroundColor='#32B2AC'
                  />
               </Box>
               <Box className="dogProgress">
                  <img src={StarDog} alt="starDog" />
                  <Box>
                     <Typography>UNDER DOG</Typography>
                     <Typography>Class Attended: 4/5</Typography>
                     <Box className="linearProgressWrap">
                                    <span>70%</span>
                                <LinearProgressBar  classes='achieveProgress' />
                                </Box>

                  </Box>
               </Box>
               
               <Box className="trophyScroller">
                  <img src={badge1} alt="dog" />
                  <img src={badge2} alt="dog" />
                  <img src={badge3} alt="dog" />
                  <img src={badge1} alt="dog" />
                  <img src={badge2} alt="dog" />
               </Box>
            </Box>
            <Box className="item achievements-section">
               <Box
                  sx={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                  }}
               >
                  <Typography className='header-text'>
                     Trophies
                  </Typography>

                  <CustomButton onClick={()=> setActive(1)}
                     className='viewAllBtn'
                     title={"View Details"}
                     color='#fff'
                     backgroundColor='#32B2AC'
                  />
               </Box>
              
               <Box className="trophyScroller">
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
                  <Box className="progresswrap">
                     <CircularProgress
                        variant='determinate'
                        color='warning'
                        value={20}
                        className='circlePBar'
                     />
                     <img
                        src={adjDogOne}
                        alt='adjDogOne'
                        className='adjDogImg'
                     />
                  </Box>
               </Box>
            </Box>
         </Box>
         </Box>

         <LeadershipBoard />
      </>
   )
}
