import React from "react";
import { CustomButton, CustomInput } from "../../Components/Common";
import { Box, Container, Typography } from "@mui/material";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import searchbarsvg from '../../assets/images/searchbarsvg.svg'
import RightArror from '../../assets/images/rightarrowsvg.svg'

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const notifications = require("../../assets/images/notification0.png");

export default function Location({ setActive, active }) {
    return (
        <>
            <Container className='appointment-container'>
                <Box className='appointment-header'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => setActive(0)}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18' >Location</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ paddingLeft: '15px' }}>
                        <img src={notifications} alt="Notification" className="setting-image" onClick={() => setActive(3)} />
                    </Box>
                </Box>
                <CustomInput
                    type="text"
                    name="Name"
                    placeholder="Change location"
                    fullWidth
                    className="card-input"
                    icon={searchbarsvg}
                    
                    
                    

                />
                <CustomButton
                    className='book-btn-payment'
                    title={"Set as Default"}
                    color='#fff'
                    // disabled={selectedValue !== "payBy"}
                    backgroundColor='#32B2AC'
                    iconJsx={<img src={RightArror} alt="" srcset="" />}
                    fullWidth
                    sx={{ mt: 77,}}
                // onClick={handleNext}
                />
            </Container>
        </>
    )
}