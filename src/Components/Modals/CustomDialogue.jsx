import React, {useEffect, useState} from "react";
import {Box, Button, Link, Typography} from "@mui/material";
import {CustomButton} from "../Common";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import {useNavigate} from "react-router-dom";
import {default as Earned} from "../../assets/images/earned.svg";
import CircularProgress from "@mui/material/CircularProgress";
import {default as adjDogOne} from "../../assets/images/adjDogOne.svg";
import {LinearProgressBar} from "../Common";
import { CreateDogProfile } from '../../Services/APIs';
import Snackbar from '@mui/material/Snackbar';


const back = require("../../assets/images/chevron-up.svg").default;
const greyClosing = require("../../assets/images/greyClosing.svg").default;

export const CustomDialogue = ({open, handleClose, fullWidth, handleNext, type, className, data,reloadPage}) => {
   
    // const buttonStyle = {
    //     width: '38px', // Adjust the width as needed
    //   };

    const navigate = useNavigate();
    const [state, setState] = React.useState({
        snackOpen: false,
        message:'Something Went wrong',
        vertical: 'top',
        horizontal: 'right',
      });
      const { vertical, horizontal, snackOpen, message } = state;
      const handleClick = (newState) => {
        console.log("handleclick");
        setState({ ...newState, snackOpen: true });
      };
    
      const handleSnackClose = (newState) => {
        setState({ ...state, snackOpen: false });
      };
   
    const validateForm = () => {
        const errors = {};
        if (!data.firstName?.trim()) {
            errors.firstName = "First Name is required";
        }
        if (!data.lastName?.trim()) {
            errors.lastName = "Last Name is required";
        }
        if (!data.breed?.trim()) {
            errors.breed = "Breed is required";
        }
        if (!data.birthDate?.trim()) {
            errors.birthDate = "Birth date is required";
        }
        if (!data.gender?.trim()) {
            errors.gender = "Gender is required";
        } 
       
        return errors;
    };
    const handleDogCreation = () => {
        // const errors = validateForm();
        console.log("errors", data);
        CreateDogProfile(data).then(response => {
            if (response) {
               
                if(response.statusCode===200){
                   
                    handleClick({ vertical: 'top', horizontal: 'right', message:'Dog Successfully added' })
                    reloadPage();
                }
                else{
                    handleClick({ vertical: 'top', horizontal: 'right',message:'Something went wrong, Try again' })
                }
                

            }
        });

    };
    
    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={fullWidth ? "md" : ""}
                open={open}
                onClose={handleClose}
                className={className}
            >
                  {type === "profile" ?
                    <>
                        

                        <DialogContent>
                                <Box className="checktext">
                                    <Typography>Complete Your Dog Profile</Typography>
                                    <Typography>In order to book a service, you will have to complete your profile. Do you want to complete it now?</Typography>
                                </Box>
                                <Box className="profileBtnWrap">
                                <Button onClick={handleClose}
                                        className='confirmCheckBtn'

                                >Skip</Button>
                                <Button onClick={ () => {
          handleDogCreation();
          handleClose();
        }}
                                  
                                        className='confirmCheckBtn'

                                >Yes, I want</Button>
                                </Box>
                            </DialogContent>
                    </> :
                type === "appointment" ?
                    <Box className="mindDialog">
                        <DialogActions className='dialog-actions'>
                            <CustomButton 
                                className='arrow-btn'
                                color='#003087'
                                icon ={back} 
                                backgroundColor='#E7EFF9'
                                onClick={handleClose}
                                
                            />
                            <Typography>what do you have in mind?</Typography>
                        </DialogActions>

                        <DialogContent>
                            <Box className='schedule-section-wrap'>
                                <Box className='schedule-section-box'>
                                    <Box className='schedule-section-action f-21'>
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
                                    <Box className='schedule-section-action f-14'>
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
                    </Box> :
                    
                
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
                                        value={70}
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
                                <Box className="linearProgressWrap">
                                    <span>70%</span>
                                <LinearProgressBar  classes='modalProgress' value={70}  />
                                </Box>
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
            <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        message={message}
        key={vertical + horizontal}
      />
        </>
    );
};
