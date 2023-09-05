import React from 'react';
import { Box, Typography, InputLabel, TextField, Link, Button } from "@mui/material";
const DogBadge = require("../../assets/images/dogBadge.svg").default;
const journey1 = require("../../assets/images/journey1.svg").default;
const journey2 = require("../../assets/images/jouney2.svg").default;
const blueCheck = require("../../assets/images/blueCheck.svg").default;
const fox = require("../../assets/images/fox.svg").default;
export default function AllJourney({handleNext}) {
  return (
    <>
      <Box className="journeyFlex">
        <Box className="jouneyItem" onClick={handleNext}>
          <Box>
            <img src={DogBadge} alt="dog" />
            <Typography>Agile Dog</Typography>
          </Box>
          <Box className="jonFlex">
            <Box>
              <img src={journey1} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 2</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 3</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              
            </Box>
          </Box>
        </Box>
        <Box className="jouneyItem">
          <Box>
            <img src={DogBadge} alt="dog" />
            <Typography>Alpha Dog</Typography>
          </Box>
          <Box className="jonFlex">
            <Box>
              <img src={journey1} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 2</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 3</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 4</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
             
            </Box>
          </Box>
        </Box>
        <Box className="jouneyItem">
          <Box>
            <img src={DogBadge} alt="dog" />
            <Typography>Alpha Dog</Typography>
          </Box>
          <Box className="jonFlex">
            <Box>
              <img src={journey1} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 2</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 3</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 4</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
              <Typography>Phase 5</Typography>
            </Box>
            <Box>
              <img src={journey2} alt="dog" />
              <img src={blueCheck} alt="dog" />
             
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="foxWrap">
      <img src={fox} alt="fox" />
      <Typography>Now, You are all set to go.</Typography>
      </Box>


    </>
  )
}
