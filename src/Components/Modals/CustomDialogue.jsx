import * as React from "react";
import {Box, Button, Link, Typography} from "@mui/material";
import {CustomButton} from "../Common";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {useNavigate} from "react-router-dom";
import {default as Earned} from "../../assets/images/earned.svg";
import CircularProgress from "@mui/material/CircularProgress";
import {default as adjDogOne} from "../../assets/images/adjDogOne.svg";
import LinearProgressBar from "../Common/LinearProgress";


const back = require("../../assets/images/chevron-up.svg").default;
const greyClosing = require("../../assets/images/greyClosing.svg").default;

export const CustomDialogue = ({open, handleClose, fullWidth, handleNext, type, className}) => {
    console.log(type, "type")
    const navigate = useNavigate();
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={fullWidth ? "md" : ""}
                open={open}
                onClose={handleClose}
                className={className}
            >
                {type === "appointment" ?
                    <>
                        <DialogActions className='dialog-actions'>
                            <CustomButton
                                className='arrow-btn'
                                color='#003087'
                                icon={back}
                                backgroundColor='#E7EFF9'
                                onClick={handleClose}
                            />
                            <Typography>what do you have in mind?</Typography>
                        </DialogActions>

                        <DialogContent>
                            <Box className='schedule-section-wrap'>
                                <Box className='schedule-section-box'>
                                    <Box className='schedule-section-action'>
                                        <CustomButton onClick={handleNext}
                                                      className='action-btn'
                                                      color='#E35205'
                                                      backgroundColor='#FFF'
                                                      title='Explore Schedule'
                                        />
                                        <Typography>Classes, Workshop, Events</Typography>
                                    </Box>
                                </Box>
                                <Box className='schedule-section-box'>
                                    <Box className='schedule-section-action'>
                                        <CustomButton onClick={() => navigate('/appointment')}
                                                      className='action-btn'
                                                      color='#003087'
                                                      backgroundColor='#FFF'
                                                      title='Book an Appointment'
                                        />
                                        <Typography>Evaluation, Private Gym, Private Training</Typography>
                                    </Box>
                                </Box>
                                <Typography className='header-text'>
                                    Not Sure? <Link className='dialog-link'><span> Send Us a Message</span> </Link>
                                </Typography>
                            </Box>
                        </DialogContent>
                    </> :
                    
                
                    type === 'earned' ?
                    <DialogContent>
                        <Box className="modalCont">
                            <Button onClick={handleClose}><img src={greyClosing} alt="greyClosing" /> </Button>
                            <img src={Earned} alt='trophy'/>
                            {/*<Typography>Superdog</Typography>*/}
                            <Box>
                                <Typography>Buck earned<span>Superdog</span></Typography>
                                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                            </Box>
                          
                            <CustomButton onClick={() => navigate('/appointment')}
                                                      className='action-btn'
                                                      color='#fff'
                                                      backgroundColor='#003087'
                                                      title='Share'
                                        />

                            
                        </Box> </DialogContent> : 
                        type === 'nextUp' ?
                        <DialogContent>
                            
                            <Box className="modalCont" >
                            <Button onClick={handleClose}><img src={greyClosing} alt="greyClosing" /> </Button>
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
                                <Box>
                                    <Typography>Superdog</Typography>
                                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                                </Box>
                                <LinearProgressBar  color={'#003087'} />
                            </Box>
                            </DialogContent>
                            :
                


                            <DialogContent>
                                <Box className="checktext">
                                    <Typography>Booking Confirmed</Typography>
                                    <Typography>If this booking consist any product, to receive this bundle you need to
                                        visit the store.</Typography>
                                </Box>
                                <Button onClick={handleNext}
                                        className='confirmCheckBtn'

                                >Confirm</Button>
                            </DialogContent>


                }
            </Dialog>
        </>
    );
};