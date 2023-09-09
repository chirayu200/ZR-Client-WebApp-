import React, { useState } from "react";
import { CustomButton, CustomInput, NotificationSection } from "../../Components/Common";
import { Box, Checkbox, Container, Link, InputLabel, Typography, FormHelperText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { changePassword } from '../../Services/APIs/security';

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const biometric = require("../../assets/images/Biometric.png");

export default function Security({ setActive, cognitoId }) {

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = () => {
       setShowCurrentPassword(!showCurrentPassword);
    };

    const handleToggleNewPassword = () => {
        setShowNewPassword(!showNewPassword);
     };

     const handleToggleConfirmPassword = () => {
       setShowConfirmPassword(!showConfirmPassword);
     };

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
       
    })
    const [formDataError, setFormDataError] = useState({
        currentPasswordError: '',
        newPasswordError: '',
        confirmPasswordError: ''
    })

    // const isPasswordErrorPresent = () => {
    //     return (
    //         formDataError.currentPasswordError !== '' ||
    //         formDataError.newPasswordError !== '' ||
    //         formDataError.confirmPasswordError !== ''
    //     )
    // };

    const validateForm = () => {
        let hasErrors = false; // Initialize a flag to track errors
    
        if (!formData.currentPassword) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                currentPasswordError: "Current password is required"
            }));
            hasErrors = true; // Set the flag to true if an error is found
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                currentPasswordError: ""
            }));
        }
    
        if (!formData.newPassword) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                newPasswordError: "New password is required"
            }));
            hasErrors = true; // Set the flag to true if an error is found
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                newPasswordError: ""
            }));
        }
    
        if (!formData.confirmPassword) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                confirmPasswordError: "Confirm password is required"
            }));
            hasErrors = true; // Set the flag to true if an error is found
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                confirmPasswordError: ""
            }));
        }
    
        return !hasErrors; // Return true if no errors are found, false otherwise
    };
    
   
    const handleInputChange = (event) => {
        
        // const patternPassword=/^?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/

        const { name, value } = event.target;

        switch (name) {
            case 'currentPassword':
                if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/.test(formData.currentPassword)) {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        currentPasswordError: "Password must be 8+ characters with at least one letter, one digit, and special characters allowed"
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }
                else {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        currentPasswordError: ""
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }
                break;

            case 'newPassword':
                if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/.test(formData.newPassword)) {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        newPasswordError: "Password must be 8+ characters with at least one letter, one digit, and special characters allowed"
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                    
                }
                else {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        newPasswordError: ""
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }
                break;

            case 'confirmPassword':
                if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\-]{8,}$/.test(formData.confirmPassword)) {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: "Password must be 8+ characters with at least one letter, one digit, and special characters allowed"
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }
                else if (formData.newPassword !== formData.confirmPassword) {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: "New password and Confirm password must match"
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }
                else {
                    setFormDataError((prevErrors) => ({
                        ...prevErrors,
                        confirmPassword: ""
                    }))
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        [name]: value
                    }))
                }

                break;
            default:
                break;
        }

        console.log(formData.currentPassword);
    }

   
    const modifyPassword = () => {
        debugger;
        const body = {
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword
        }
        let passwordPresent = validateForm();
        if (!passwordPresent) {
            
                
        }
        else {
            changePassword(cognitoId,body).then((response) => {
                setActive(0); 
               setFormData({
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                   
                })
                console.log(response);
            })
        }
    }

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
                    <NotificationSection />
                </Box>
                <Typography className="header-text-blue font-weight-700">Change your password</Typography>
                <Box className='appointment-main'>
                    <Box className='field-section'>
                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">Current Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='currentPassword'
                                placeholder='Current Password'
                                fullWidth
                                className='card-input password'
                                onChange={handleInputChange}
                                value={formData.currentPassword}
                                showPassword={showCurrentPassword}
                                onTogglePassword={handleTogglePassword}
                            // error={!!formDataError.currentPasswordError}
                            // helperText={formDataError.currentPasswordError}
                            />
                            <FormHelperText className="error-text mt-10">{formDataError.currentPasswordError}</FormHelperText>

                        </Box>
                        {/* <Box sx={{display:'block'}}> <FormHelperText>{formDataError.currentPasswordError ? formDataError.currentPasswordError : ''}</FormHelperText></Box> */}


                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">New Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='newPassword'
                                placeholder='New Password'
                                fullWidth
                                className='card-input password'
                                onChange={handleInputChange}
                                value={formData.newPassword}
                                showPassword={showNewPassword}
                                onTogglePassword={handleToggleNewPassword}
                            />
                            <FormHelperText className="error-text mt-10">{formDataError.newPasswordError ? formDataError.newPasswordError : ''}</FormHelperText>
                        </Box>

                    </Box>
                    <Box className='field-section mt-15'>
                        <Box className='appointment-dropdown'>
                            <InputLabel className="header-text-black font-weight-400 f-14">Confirm Password</InputLabel>
                            <CustomInput
                                type='password'
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                fullWidth
                                className='card-input password'
                                onChange={handleInputChange}
                                value={formData.confirmPassword}
                                showPassword={showConfirmPassword}
                                onTogglePassword={handleToggleConfirmPassword}
                            />
                            <FormHelperText className="error-text mt-10">{formDataError.confirmPasswordError ? formDataError.confirmPasswordError : ''}</FormHelperText>
                        </Box>
                        <Box className='appointment-dropdown'></Box>

                    </Box>
                    <Box className='field-section mt-15'>
                        <Box className='appointment-dropdown'>
                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox sx={{ color: '#003087' }} />
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
                                onClick={modifyPassword}
                            />
                        </Box>
                        <Box className='appointment-dropdown'></Box>
                    </Box>
                </Box>
                <Box className='field-section' sx={{ mt: 3 }}>
                    <Typography className="header-text-blue font-weight-700 f-18">Update Biometric</Typography>
                    <Box className='appointment-dropdown' sx={{ mt: 3 }}>

                        <Box className='slots-wrap card-list-detail-wrap'>
                            {/* <Box className=''>
                            <img src={visaCard} alt='visa card' />
                        </Box> */}
                            <Box className='card-list-detail' sx={{ maxWidth: '10%' }}>
                                <img src={biometric} alt='bio' style={{ marginTop: '10px' }} />
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