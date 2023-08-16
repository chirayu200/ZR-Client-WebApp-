import { Typography, Box } from '@mui/material';
import React from 'react'
const step1 = require("../../assets/images/step1.svg").default;
const step2 = require("../../assets/images/step2.svg").default;
const left = require("../../assets/images/leftvector.svg").default;
const right = require("../../assets/images/rightVector.svg").default;
const blueCheck = require("../../assets/images/blueCheck.svg").default;
export default function IndividualJourney() {
  return (
    <>
      <Box className="individualJon">
        <Box className="box odd">
          <Box className="imgBox">
            <img src={step1} alt="step" />
            <img src={blueCheck} alt="step" />
            <img src={right} alt="step" />
          </Box>
          <Box className="textBox">
            <Typography>Playometric Jump</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        </Box>
        <Box className="box even">
          <Box className="imgBox">
            <img src={step2} alt="step" />
            <img src={blueCheck} alt="step" />
            <img src={left} alt="step" />
          </Box>
          <Box className="textBox">
            <Typography>Playometric Jump</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        </Box>
        <Box className="box odd">
          <Box className="imgBox">
            <img src={step2} alt="step" />
            <img src={blueCheck} alt="step" />
            <img src={right} alt="step" />
          </Box>
          <Box className="textBox">
            <Typography>Playometric Jump</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        </Box>
        <Box className="box even">
          <Box className="imgBox">
            <img src={step2} alt="step" />
            <img src={blueCheck} alt="step" />
            <img src={left} alt="step" />
          </Box>
          <Box className="textBox">
            <Typography>Playometric Jump</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}
