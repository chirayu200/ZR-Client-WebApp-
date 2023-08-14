import React, {useState} from 'react'
import {Box, Button, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {CustomDialogue} from "../../Components/Modals";

const Earned = require("../../assets/images/earned.svg").default;
const Unearned = require("../../assets/images/unearned.svg").default;
const adjDogOne = require("../../assets/images/adjDogOne.svg").default;

export default function TrophyShelf({handleNext}) {
  const [selected, setSelected] = useState(0)
    const [open, setOpen] = useState(false)
  return (
    <>
     <Box className="topStack trophyTopStack">
                <Button className={selected === 0 && 'active'} onClick={() => setSelected(0)}>Earned</Button>
                <Button className={selected === 1 && 'active'} onClick={() => setSelected(1)}>Up Next</Button>
            </Box>
            {/* 
      <Box className="earnedFlex">
        <Button>
          <img src={Earned} alt='trophy' />
          <Typography>Superdog</Typography>
        </Button>
        <Button>
          <img src={Earned} alt='trophy' />
          <Typography>Superdog</Typography>
        </Button>
      </Box>
      <Typography className='earnTitle'>In Progress</Typography>
      <Box className="earnedFlex">
        <Button onClick={handleNext}>
          <img src={Unearned} alt='trophy' />
          <Typography>Superdog</Typography>
        </Button>
        <Button>
          <img src={Unearned} alt='trophy' />
          <Typography>Superdog</Typography>
        </Button>
      </Box>
      <Typography className='earnTitle'>Unearned</Typography>
      <Box className="earnedFlex">
        <Button>
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
          <Typography>Superdog</Typography>
        </Button>
        <Button>
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
          <Typography>Superdog</Typography>
        </Button>
      </Box> */}


            {selected === 1 ? <>
                <Typography className='earnTitle'>In Progress</Typography>
                <Box className="earnedFlex">
                    <Button onClick={() => setOpen(true)}>
                        <img src={Unearned} alt='trophy'/>
                        <Typography>Superdog</Typography>
                    </Button>
                    <Button onClick={() => setOpen(true)}>
                        <img src={Unearned} alt='trophy'/>
                        <Typography>Superdog</Typography>
                    </Button>
                </Box>
                <Typography className='earnTitle'>Unearned</Typography>
                <Box className="earnedFlex">
                    <Button onClick={() => setOpen(true)}>
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
                        <Typography>Superdog</Typography>
                    </Button>
                    <Button onClick={() => setOpen(true)}>
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
                        <Typography>Superdog</Typography>
                    </Button>
                </Box>
            </> : <><Box className="earnedFlex">
                <Button onClick={() => setOpen(true)}>
                    <img src={Earned} alt='trophy'/>
                    <Typography>Superdog</Typography>
                </Button>
                <Button onClick={() => setOpen(true)}>
                    <img src={Earned} alt='trophy'/>
                    <Typography>Superdog</Typography>
                </Button>
            </Box></>}

            <CustomDialogue
                type={selected === 0 ? "earned" : 'nextUp'}
                open={open}
                className={'dogModal'}
                handleClose={() => setOpen(false)}
                fullWidth
                handleNext={() => {

                    setOpen(false)
                }}

            />
        </>
    )
}
