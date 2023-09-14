import { Box, Button, Typography } from "@mui/material";
import { CustomButton } from "../../Components/Common";
import rightCircle from "../../assets/images/rightCircle.svg";
import React from "react";

const profileImg = require("../../assets/images/profileImg.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";
const profileTeam = require("../../assets/images/profile-team.svg").default;
export default function YourTeams({ setActive, initialState, setInitialState, details,teamData }) {
  const handleNextPage = () => {
   
    setInitialState({ ...initialState, userType: 'client',client :'client' });
    setActive(1);
  };
  
console.log('initial data...',initialState)

  return (
    <Box className="template-list-main">
        
        {initialState.userType === 'dog' && initialState.selected !== '' ? (
        <Box className="trophyBoxHead">
          <Typography className='header-text'>
            Client
          </Typography>
          {/* <CustomButton onClick={handleNextPage}
                          className='viewAllBtn'
                          title={"View All"}
                          color='#fff'
                          backgroundColor='#32B2AC'
          /> */}
        </Box>
      ) : (
        <Box className="trophyBoxHead">
          <Typography className='header-text'>
            {initialState.userType==='dog'? 'Your Pack': 'Your Team'}
          </Typography>
         { 
         (initialState.userType === 'client' && initialState.selected === '') && initialState.client === ''
         
         ?
         <CustomButton
         onClick={handleNextPage}
         className='viewAllBtn'
         title={"View All"}
         color='#fff'
         backgroundColor='#32B2AC'
       /> 
         : 
         ''
         }
        </Box>
      )}
    {initialState.userType === 'dog' && initialState.selected !== '' && 
    <Box className="item">
                      <Box className="itemImgWrap">
                          <img src={initialState?.userType === 'dog' ? details?.profileImage : profileImg} alt="profile" />
                          <Box>
                              <Typography>
                                  {initialState.userType === 'dog'
                                      ? `${details?.firstName || 'John'} ${details?.lastName || 'Smith'}`
                                      : 'Jon Smith'}
                              </Typography>
                              <Typography>Reward Points: 3214</Typography>
                          </Box>
                      </Box>
                      <Box>
                          <Button
                              onClick={() => {
                                  setInitialState({ ...initialState, selected: '', userType: 'client', client: '' });
                                  setActive(0);
                              } }
                          >
                              <img src={rightCircle} alt='close' />
                          </Button>
                      </Box>

                  </Box>
}
  
  {initialState.userType === 'dog' && initialState.selected === '' && details?.pets?.length > 0 &&
        details?.pets.map((pet, index) => (
          <Box key={index} className="item">
            <Box className="itemImgWrap">
              <img src={pet?.profileImage || petPlaceholder} alt={`profile-${index}`} />
              <Box>
                <Typography>{`${pet?.firstName || 'John'} ${pet?.lastName || 'Smith'}`}</Typography>
                <Typography>Reward Points: 3214</Typography>
              </Box>
            </Box>
            <Box>
              <Button
                onClick={() => {
                  setInitialState({ ...initialState, selected: pet, userType: 'dog' });
                  setActive(0);
                }}
              >
                <img src={rightCircle} alt="close" />
              </Button>
            </Box>
          </Box>
        ))
              }
      {
        (initialState.userType === 'client' &&  initialState.selected === ''  &&
        teamData?.Items?.slice(0, 2).map((item, index) => (
  <Box className="item" key={index}>
      <Box className="itemImgWrap">
          <img src={item?.profileImage ? item?.profileImage : profileTeam} alt="dog" />
          <Box>
              <Typography>{`${item?.firstName || ''} ${item?.lastName || ''}`}</Typography>
              <Typography>
                  Reward Points: 5550
              </Typography>
          </Box>
      </Box>
      <Box>
          <Typography>{item?.breed}</Typography>
          <Button onClick={() => {
              setInitialState({ ...initialState, selected: item, userType: 'client' });
              setActive(0);
              
          }}><img src={rightCircle} alt='close' /> </Button>
      </Box>
  </Box>
))
                 
      
 
   ) }
    </Box> // Add the missing closing </Box> tag hereelse condition then ho
    
  );
}
