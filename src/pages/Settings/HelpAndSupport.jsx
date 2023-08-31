import React  from "react";
import { CustomButton,  CustomInput } from "../../Components/Common";
import { Box,Container, Typography,TextField } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RightArror from '../../assets/images/rightarrowsvg.svg'


const backArrow = require("../../assets/images/orangeArrow.svg").default;
const notifications = require("../../assets/images/notification0.png");


export default function HelpAndSupport({ setActive }) {

 
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
                    <Box sx={{ paddingLeft: '15px' }}>
                                        <img src={notifications} alt="Notification" className="setting-image" onClick={() => setActive(3)} />
                                    </Box>
                  </Box>
                <Typography className='header-text-blue font-weight-700 f-16'>How can we help you today?</Typography>
                

               
                <CustomInput
                    type='text'
                    name='Name'
                    placeholder='Search queries'
                    fullWidth
                    className='card-input'
                    sx={{ mt: 2, }}
                />
           

                <Typography sx={{ mt: 2 }} className='header-text-blue font-weight-700 f-16 '>Top Categories</Typography>


                
                <CustomButton 
                    className='book-btn item-detail-btn-sub header-text-black font-weight-700 f-14 btn-style'
                    title={"Trouble on devices"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2, }}
                    
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn item-detail-btn-sub header-text-black font-weight-700 f-14 btn-style'
                    title={"Help with your account"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn item-detail-btn-sub header-text-black font-weight-700 f-14 btn-style'
                    title={"Bundles"}
                    backgroundColor='white'
                    color='black'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{ mt: 2 }}
                // onClick={handleNext}
                />
                <CustomButton
                    className='book-btn item-detail-btn-sub header-text-black font-weight-700 f-14 btn-style'
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
                <Box className='field-section' sx={{mt:2}}>
                <Box className='appointment-dropdown'>
                    <TextField value='Leave your feedback here...' className='text-field height-90 header-text-blue font-weight-400 f-14' />
                </Box>
                </Box>
                <Box className='field-section' sx={{ mt: 8 }}>
                    <Box className='appointment-dropdown'>
                        <CustomButton
                            className='book-btn-payment'
                            title={"Send"}
                            color='#fff'
                            // disabled={selectedValue !== "payBy"}
                            backgroundColor='#32B2AC'
                            iconJsx={<img src={RightArror} alt="" srcset="" />}
                            fullWidth
                        // onClick={handleNext}
                        />
                    </Box>
                </Box>

            </Container>
        </>
    )
}