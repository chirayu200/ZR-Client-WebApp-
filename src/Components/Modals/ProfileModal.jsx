import * as React from "react";
import {useRef, useState} from "react";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from "react-router-dom";
import {Box, Button, Checkbox, Divider, InputLabel, Link, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton, CustomDropdown} from "../Common";
import SignaturePad from "react-signature-canvas";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const downArrow = require("../../assets/images/dropdownArrow.svg").default;

const options = [
    {label: "Option 1", value: "option1"},
    {label: "Option 2", value: "option2"},
    {label: "Option 3", value: "option3"},
    {label: "Select Client", value: "Select Client"},
];
const back = require("../../assets/images/chevron-up.svg").default;

export const ProfileModals = ({
                                  open, handleClose, fullWidth, type, setFormData,
                                  formData,
                                  handleActionBtn,
                                  handleNext,getclientOptions
                              }) => {
                                console.log('----getclientOptions --',getclientOptions)
    const [isSign, setIsSign] = useState(false);
    let sigCanvas = useRef(null);

    const navigate = useNavigate();


    const handleCloseModal = () => {
        const image = sigCanvas.toDataURL();
        setFormData({...formData, signature: image, isLiabilityWaiverSigned: true});
        handleClose()
    }
    const clearSignature = () => {
        sigCanvas?.current !== null && sigCanvas.clear();
        setFormData({...formData, signature: null});
        setIsSign(false)
    }

    const handleDropdownChange = (name, value) => {


    }

    return (
        <>
            <Dialog
                fullWidth={fullWidth}
                maxWidth={fullWidth ? "md" : ""}
                open={open}
                onClose={handleClose}
                className={`global-modal-main ${type === 'team' || type === 'invite' ? 'teams-main-wrap' : type === 'confirm' || type === 'dog' ? 'confirm-main-wrap' : ""}`}
            >
                {type === 'confirm' || type === 'dog' ?
                    <>
                        <Box className='confirm-main'>
                            <Typography className='modal-heading '>Profile Completed</Typography>
                            <Typography className='modal-description'>
                                {type === 'dog' ? "You have successfully completed your dog profile. Do you want to add another dog?" : "You have successfully completed your profile. Do you want to build your team now? Before adding someone to your team, they should already have an account created."}

                            </Typography>

                        </Box>
                        <DialogActions>
                            <Button className='red-btn' onClick={() => handleActionBtn('notNow')}>
                                Not Now
                            </Button>
                            <Divider className='profile-btn-divider'/>
                            <Button className='blue-btn' onClick={() => handleActionBtn('yes')}>Yes</Button>
                        </DialogActions></>
                    : type === 'team' || type === 'invite' ?
                        <>
                            <Box className='modal-header'>
                                <Button onClick={handleClose} className='close-button'><CloseIcon/></Button>
                            </Box>
                            <Box className={`team-main ${type === 'invite' && 'invite-main'}`}>
                                {type === 'invite' && <GroupsOutlinedIcon/>}

                                <Typography
                                    className='team-main-heading'>{type === 'invite' ? "Invite Team Members" : "Build Your Team"}</Typography>
                                <Box className='teams-content'>
                                    {type === 'invite' ?
                                        <Typography className='invite-para'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies
                                            accumsan aliquet.
                                        </Typography> : <>
                                            <InputLabel>Select Client</InputLabel>
                                            <CustomDropdown
                                                value={getclientOptions.value}
                                                placeHolder={'Select Clients'}
                                                //onChange={handleDropdownChange}
                                                options={getclientOptions}
                                               
                                                icon={downArrow}

                                            />
                                        </>}

                                </Box>
                                {type === 'invite' ? <CustomButton
                                        className='book-btn'
                                        title={"Invite Now"}
                                        color='#fff'
                                        backgroundColor='#32B2AC'
                                        onClick={handleNext}
                                    /> :
                                    <CustomButton
                                        className='book-btn'
                                        title={"Add To Your Team"}
                                        color='#fff'
                                        backgroundColor='#003087'
                                        fullWidth
                                        onClick={handleNext}
                                    />}


                            </Box>
                        </>
                        :

                        <DialogContent>
                            <Box className='modal-content-wrap'>
                                <Box className='modal-header'>
                                    <Typography className='heading'>Liability Wavier</Typography>
                                    <Button onClick={handleClose}><CloseIcon/></Button>
                                </Box>
                                <Box className='terms-box'>
                                    <Typography>I have voluntarily applied to participate in programs and activities at
                                        the
                                        Zoom
                                        Room. I am aware that there are inherent risks and hazards involved in
                                        activities
                                        and
                                        around dogs, and I am voluntarily participating in these activities with
                                        knowledge
                                        of
                                        potential dangersI have voluntarily applied to participate in programs and
                                        activities at
                                        the Zoom Room. I am aware that there are inherent risks and hazards involved in
                                        activities and around dogs, and I am voluntarily participating in these
                                        activities
                                        with
                                        knowledge of potential dangersI have voluntarily applied to participate in
                                        programs
                                        and
                                        activities at the Zoom Room. I am aware that there are inherent risks and
                                        hazards
                                        involved in activities and around dogs, and I am voluntarily participating in
                                        these
                                        activities with knowledge of potential dangers</Typography>
                                </Box>

                                <Box className='save-card'>
                                    <Checkbox checked={formData.policyCheck} onChane={(e) => setFormData({
                                        ...formData,
                                        policyCheck: e.target.checked
                                    })}/>
                                    <Typography>I agree to Zoom Room’s liability waiver and terms and
                                        conditions.</Typography>
                                </Box>
                                <Box className='booking-notes signature-box'>

                                    {formData.signature ?
                                        <img src={formData.signature} alt='signature' width={'300px'}
                                             height={'104px'}/> : isSign ? <SignaturePad
                                                penColor="black"
                                                ref={(ref) => {
                                                    sigCanvas = ref
                                                }}
                                                canvasProps={{className: 'signature-canvas',}}
                                            />
                                            :
                                            <Link className='see-more' onClick={() => setIsSign(true)}> Sign
                                                Here</Link>}


                                </Box>
                                <Box className='clear-link'>
                                    <Button onClick={clearSignature}>Clear</Button>
                                </Box>
                                <CustomButton
                                    className='book-btn'
                                    title={"Submit"}
                                    color='#fff'
                                    backgroundColor='#32B2AC'
                                    iconJsx={<ChevronRightIcon/>}
                                    fullWidth
                                    onClick={handleCloseModal}

                                />
                            </Box>
                        </DialogContent>
                }
            </Dialog>
        </>
    );
};
