import { Box, Button, Typography } from "@mui/material";
import { CustomButton } from "../../Components/Common";
import rightCircle from "../../assets/images/rightCircle.svg";
import React from "react";

const profileImg = require("../../assets/images/profileImg.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";
const profileTeam = require("../../assets/images/profile-team.svg").default;
export default function YourTeams({ setActive, initialState, setInitialState, details }) {
  const handleNextPage = () => {
    setActive(1);
    setInitialState({ ...initialState, userType: 'client' });
  };

  console.log(initialState, 'detailsdetaifls');

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
          <CustomButton
            onClick={handleNextPage}
            className='viewAllBtn'
            title={"View All"}
            color='#fff'
            backgroundColor='#32B2AC'
          />
        </Box>
      )}
 {initialState.userType === 'dog' && initialState.selected !== '' && (
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
                                  setInitialState({ ...initialState, selected: details, userType: 'dog' });
                                  setActive(0);
                              } }
                          >
                              <img src={rightCircle} alt='close' />
                          </Button>
                      </Box>

                  </Box>
 )
                            }

      {initialState.userType === 'dog' && details?.pets?.length > 0 ? (
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
                  setInitialState({ ...initialState, selected: details, userType: 'dog' });
                  setActive(0);
                }}
              >
                <img src={rightCircle} alt="close" />
              </Button>
            </Box>
          </Box>
        ))
      ) : (
        <><Box className="item">
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
                                  setInitialState({ ...initialState, selected: details, userType: 'dog' });
                                  setActive(0);
                              } }
                          >
                              <img src={rightCircle} alt='close' />
                          </Button>
                      </Box>

                  </Box><Box className="item">
                          <Box className="itemImgWrap">
                              <img src={initialState?.userType === 'dog' ? details?.profileImage : profileTeam} alt="profile" />
                              <Box>
                                  <Typography>
                                      {initialState.userType === 'dog'
                                          ? `${details?.firstName || 'John'} ${details?.lastName || 'Smith'}`
                                          : 'Lilly Bloom'}
                                  </Typography>
                                  <Typography>Reward Points: 3965</Typography>
                              </Box>
                          </Box>
                          <Box>
                              <Button
                                  onClick={() => {
                                      setInitialState({ ...initialState, selected: details, userType: 'dog' });
                                      setActive(0);
                                  } }
                              >
                                  <img src={rightCircle} alt='close' />
                              </Button>
                          </Box>

                      </Box></>
      )
    }
    </Box> // Add the missing closing </Box> tag hereelse condition then ho
    
  );
}
