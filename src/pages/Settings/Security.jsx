import React  from "react";
import { CustomButton, CustomInput, NotificationSection} from "../../Components/Common";
import { Box, Checkbox, Container,  Link, InputLabel, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const backArrow = require("../../assets/images/orangeArrow.svg").default;
const biometric = require("../../assets/images/Biometric.png");

export default function Security({ setActive }) {

    // const [showPassword, setShowPassword] = useState(false);
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
                            <Typography className='header-text-blue font-weight-700 f-18'>Security</Typography>
                        </Box>

                    </Box>
                    <NotificationSection/>
                </Box>
                <Typography className="header-text-blue font-weight-700">Change your password</Typography>
                <Box className='appointment-main'>
                    <Box className='field-section'>
                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">Current Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='password'
                                placeholder='Current Password'
                                fullWidth
                                className='card-input password'

                            />
                        </Box>
                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">New Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='password'
                                placeholder='New Password'
                                fullWidth
                                className='card-input password'

                            />
                        </Box>

                    </Box>
                    <Box className='field-section'>
                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">Confirm Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='password'
                                placeholder='Confirm Password'
                                fullWidth
                                className='card-input password'

                            />
                        </Box>
                        <Box className='appointment-dropdown'></Box>

                    </Box>
                    <Box className='field-section'>
                        <Box className='appointment-dropdown'>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox  sx={{ color: '#003087' }} />
                                <Typography className="header-text-black font-weight-400 f-14">Remember password</Typography>
                            </Box>

                        </Box>
                        <Box className='appointment-dropdown'></Box>
                    </Box>
                    <Box className='field-section'>
                        <Box className='appointment-dropdown'>
                            <CustomButton
                                className='book-btn'
                                title={"Save password"}
                                color='#fff'
                                // disabled={selectedValue !== "payBy"}
                                backgroundColor='#32B2AC'
                                iconJsx={<ChevronRightIcon />}
                                fullWidth
                            // onClick={handleNext}
                            />
                        </Box>
                        <Box className='appointment-dropdown'></Box>
                    </Box>
                </Box>
                <Box className='field-section' sx={{mt:3}}>
                    <Typography className="header-text-blue font-weight-700 f-18">Update Biometric</Typography>
                    <Box className='appointment-dropdown' sx={{mt:3}}>

                        <Box className='slots-wrap card-list-detail-wrap'>
                            {/* <Box className=''>
                            <img src={visaCard} alt='visa card' />
                        </Box> */}
                        <Box className='card-list-detail' sx={{maxWidth:'10%'}}>
                        <img src={biometric} alt='bio' style={{marginTop:'10px'}}/>
                        </Box>
                            <Box className='card-list-detail'>
                                <Box className='card-list-section'>
                                    <Box>
                                        <Typography className='heading'>
                                            Biometric
                                        </Typography>
                                        <Typography className='sub-heading'>
                                        Set on 05/2023
                                        </Typography>
                                    </Box>
                                    <Box className='color-btn-wrap'>
                                        <Link className='gray-btn'>Set as default</Link>
                                        <Link className='blue-btn'>Edit</Link>
                                        <Link className='red-btn'>Remove</Link>
                                    </Box>
                                </Box>
                               
                            </Box>
                        </Box>
                        <Box className='appointment-dropdown'></Box>
                    </Box>
                </Box>

            </Container>
        </>
    )
}