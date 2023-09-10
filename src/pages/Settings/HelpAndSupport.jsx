import React, { useState } from "react";
import { CustomButton, CustomInput, NotificationSection } from "../../Components/Common";
import { Box, Container, FormHelperText, Typography, TextField } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from '@mui/icons-material/Search';
import './settingStyle.css';
import { getFeedBack } from '../../Services/APIs/security';

const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function HelpAndSupport({ setActive, franchiseeId, locationId, clientId }) {

    const [feedBack, setFeedBack] = useState('');
    const [formDataError, setFormDataError] = useState({
        feedBackError: '',

    })
    const body = {
        locationId: locationId,
        clientId: clientId,
        createdBy: clientId,
        feedback: feedBack,
        franchiseeId: franchiseeId
    }

    const getFeedBackValue = (value) => {
        if (!value) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                feedBackError: "Feed back is required"
            }));
            setFeedBack(value);
        }
        else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                feedBackError: ""
            }));
            setFeedBack(value);
        }

        
    }

    const setFeedBackValue = () => {
        if (!feedBack) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                feedBackError: "Feed back is required"
            }));
        }
        else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                feedBackError: ""
            }));
            getFeedBack(body).then((response) => {
                setActive(0);
                setFeedBack('');
                console.log(response);
            })
        }

    }

    return (
        <>
            <Container className='appointment-container'>
                <Box className='appointment-header d-flex'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => setActive(0)}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>Help & Support</Typography>
                        </Box>
                    </Box>
                    <NotificationSection />
                </Box>
                <Typography className='header-text-blue font-weight-700 f-16'>How can we help you today?</Typography>
                <CustomInput
                    type='text'
                    name='Name'
                    placeholder='Search queries'
                    fullWidth
                    className='card-input search-bar'
                    sx={{ mt: 2 }}
                    icon={<SearchIcon />}
                />

                <Typography sx={{ mt: 2 }} className='header-text-blue font-weight-700 f-16'>Top Categories</Typography>
                <CustomButton
                    className='book-btn-help-support br-50  item-detail-btn-sub header-text-black font-weight-700 f-14'
                    title={"Trouble on devices"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn-help-support br-50 item-detail-btn-sub header-text-black font-weight-700 f-14'
                    title={"Help with your account"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn-help-support br-50 item-detail-btn-sub header-text-black font-weight-700 f-14'
                    title={"Bundles"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn-help-support br-50 item-detail-btn-sub header-text-black font-weight-700 f-14'
                    title={" Special Pricing"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <Typography sx={{ mt: 2 }} className='header-text-blue font-weight-700 f-16'>Feedback</Typography>
                <Typography sx={{ mt: 2 }} className='header-text-black font-weight-400 f-14'>Leave Your Feedback</Typography>
                <Box className='field-section' sx={{ mt: 2 }}>
                    <Box className='appointment-dropdown'>
                        <TextField value={feedBack} placeholder="Leave your feedback here..." className='text-field height-90 header-text-blue font-weight-400 f-14' onChange={(e) => getFeedBackValue(e.target.value)} />
                    </Box>
                    <FormHelperText className="error-text mt-10">{formDataError.feedBackError}</FormHelperText>
                </Box>
                <Box className='field-section' sx={{ mt: 3 }}>
                    <Box className='appointment-dropdown'>
                        <CustomButton
                            className='book-btn'
                            title={"Send"}
                            color='#fff'
                            // disabled={selectedValue !== "payBy"}
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon />}
                            fullWidth
                            onClick={setFeedBackValue}
                        />

                    </Box>
                </Box>

            </Container>
        </>
    )
}