import React, {useEffect, useState} from "react";
import {Box, Button, Link, Typography} from "@mui/material";
import { ReactComponent as PinCode } from "../../assets/images/paste.svg";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
    ConfirmAccountByOtp,
    ResendConfirmationCode,
    ResendForgotPasswordCode,
    ResetPassword
} from "../../Services/APIs/account";
import {CustomButton, CustomInput} from "../../Components/Common";

//const pinCode = require("../../assets/images/paste.svg").default;
const passwordSucces = require("../../assets/images/passSuccess.svg").default;


const ForgotPassword = ({handlePrevious, authState, setAuthState, onLogin}) => {

    const [steps, setSteps] = useState(0);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);
    const [isCounting, setIsCounting] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const [PasswordLength, setPasswordLength] = useState(false);
    const [matchPassword, setCorrectPassword] = useState(false);
    const [loader, setLoader] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        confirmationCode: '',
        newPassword: '',
        confirmPassword: '',

    });
    const [errorData, setErrorData] = useState({
        type: "",
        msg: "",
    })
    useEffect(() => {        
        if (authState?.from !== '') {
           setFormData({email: authState.from})
        //    ResendConfirmationCode({email: authState?.from}).then((response) => {
        //     console.log('ResendConfirmationCode', response)
        // })
           setSteps(1)
        }
    }, [authState])

    useEffect(() => {
        if (isCounting) {
            const interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, 1000);

            setTimeout(() => {
                clearInterval(interval);
                setCounter(0);
                setIsCounting(false);
            }, 30000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [isCounting, authState]);

    const sendCodeAgain = async () => {


        if (authState?.from) {
            ResendConfirmationCode({email: authState?.from}).then((response) => {
                console.log('ResendConfirmationCode', response)
            })
        } else {
            ResendForgotPasswordCode({email: formData.email}).then((response) => {
                console.log('ResendForgotPasswordCode', response);
            })
        }
        if (counter !== 0) {
            setCounter(0);
            setIsCounting(false);
            setError(null);

        } else {
            setCounter(1);
            setIsCounting(true);
            // setIsCounting(true);
        }
    };
    const handleStepScreen = () => {
        if (steps === 0) {
            handlePrevious(steps);
        } else if (authState.from) {
            handlePrevious(0);

        } else {
            setSteps(steps - 1);
        }
    };
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));      
        if (formErrors[name]) {
            setFormErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }
    }
    const validateForm = () => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            errors.email = "Invalid email address";
        }
        if (!formData.email.trim()) {
            errors.email = "Please enter an email to proceed";
        }
        
        return errors;
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };


    const handleNext = () => {
        const errors = validateForm();
        // if (Object.keys(errors).length === 0) {
        console.log(errors);
        if (steps !== 3) {
            if (steps === 0) {
                setLoader(true)
                ResendForgotPasswordCode(formData).then((response) => {
                    
                    if (response?.success) {
                        setLoader(false)
                        setSteps(steps + 1)
                    }else{
                        setLoader(false)
                        setFormErrors({ email: response.data.error });
                       // errors.email =  ;
                    }
                  
                })
            }

            if (steps === 1 && authState.success) {
                ConfirmAccountByOtp({
                    email: formData.email,
                    confirmationCode: formData.confirmationCode
                }).then((response) => {
                    if (response?.success) {
                        handlePrevious(0);
                    } else {
                        setError(true);
                        setTimeout(() => {
                            setError(false);
                        }, 10000)
                    }
                    console.log(
                        response, 'ConfirmAccountByOtp'
                    )
                })
            } else if (steps === 1) {
                formData.confirmPassword = '';
                formData.newPassword = '';
                setPasswordLength(false);
                setError(false)
                setFormErrors((prevFormErrors) => ({
                    ...prevFormErrors,
                    confirmPassword: '',
                    newPassword: '',
                }));
                setErrorData((prevErrorData) => ({
                    ...prevErrorData,
                    type: '',
                    msg: ''
                }));
                   //code is required
                   if(formData.confirmationCode){
                    setError(false)
                    setSteps(steps + 1);
                   }else{
                    setError(true)        
                }

            }
           
             if (steps === 2) {
                setErrorData((prevErrorData) => ({
                    ...prevErrorData,
                    type: '',
                    msg: ''
                }));
                setPasswordError(false);
                setPasswordLength(false);
                setCorrectPassword(false)               

                if (formData.newPassword && formData.confirmPassword) {
                    setPasswordError(false);
                  
                    if (formData.newPassword.trim().length < 8 && formData.confirmPassword.trim().length < 8) {
                        setPasswordLength(true);
                    }  
                        
                      else if (formData.newPassword === formData.confirmPassword) {
                        setLoader(true)
                        ResetPassword(formData).then((response) => {
                            setFormErrors((prevFormErrors) => ({
                                ...prevFormErrors,
                                confirmPassword: '',
                                newPassword : ''
                            }));
                            if (response?.success) {
                                setLoader(false)
                                setSteps(3);
                            } else {
                                setLoader(false)
                                setPasswordError(false);
                                  setPasswordLength(false);
                                if (response.data.error) {
                                   
                                    setErrorData((prevErrorData) => ({
                                        ...prevErrorData,
                                        type: 'error',
                                         msg: response.data.error
                                    }));
                                }
                            }
                        });
                    } else {
                        setPasswordLength(false);
                        setPasswordError(false);
                        setErrorData((prevErrorData) => ({
                            ...prevErrorData,
                            type: '',
                            msg: ''
                        }));
                        setCorrectPassword(true)
                    }
                } else {
                    setPasswordError(true);   
                    setCorrectPassword(false)               
                }
            }
            
            

        } else {
            setPasswordError(false)  
            handlePrevious(steps);
        }

        // } else {
        //     // Form has errors, update the formErrors state
        //     setFormErrors(errors);
        // }

    }


    return (
        <Box className='forgot-main'>
            {steps !== 3 && (
                <Box>
                    <Button
                        variant='contained'
                        startIcon={<ArrowBackIosIcon/>}
                        className='circle-back-btn'
                        onClick={handleStepScreen}
                    />
                    <Typography variant='h3'>
                        {steps === 0
                            ? "FORGOT PASSWORD?"
                            : steps === 1
                                ? "Enter Code"
                                : "RESET PASSWORD"}
                    </Typography>
                    <Typography variant='body1' className='forgot-description' sx={{mt:1}}>
                        {steps === 0
                            ? "Don’t worry! It happens. Please enter the email associated with your account."
                            : steps === 1
                                ? `We’ve sent an email with an activation code at ${authState?.from || 'helloworld@gmail.com'}`
                                : "Please type something you’ll remember"}
                    </Typography>
                </Box>
            )}

            <Box>
                {steps === 0 ? (
                    <CustomInput
                        label='Email'
                        type='email'
                        fullWidth
                        placeholder='helloworld@gmail.com'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                        error={!!formErrors.email}
                        helperText={formErrors.email}
                    />
                ) : steps === 1 ? (
                    <>
                        <CustomInput
                            type='number'
                            fullWidth
                            placeholder='Code'
                            name='confirmationCode'
                            icon={<PinCode />}
                            value={formData.confirmationCode}
                            onChange={handleInputChange}
                            error={!!formErrors.confirmationCode}
                             helperText={formErrors.confirmationCode}
                        />
                        <Box className='send-code'>
                            {error ? (
                                <Typography className='error-danger'>
                                    Wrong code, please try again
                                </Typography>
                            ) : (
                                <Link
                                    className='forgot-link'
                                    disabled={counter !== 0}
                                    onClick={sendCodeAgain}
                                >
                                    {counter === 0 ? "Didn’t Receive yet?" : "Send Code Again"}
                                </Link>
                            )}

                            {counter !== 0 && (
                                <Typography className='forgot-description'>{`00.${counter < 10 ? "0" + counter : counter
                                }`}</Typography>
                            )}
                        </Box>
                    </>
                ) : steps === 2 ? (
                    <>
                       
                        <CustomInput
                            label='New Password'
                            type='password'
                            name='newPassword'
                            fullWidth
                            placeholder='New Password'
                            showPassword={showPassword}
                            onTogglePassword={handleTogglePassword}
                            value={formData.newPassword}
                            onChange={handleInputChange}
                             error={!!formErrors.newPassword}
                             helperText={formErrors.newPassword}
                        />
                       
                        <Box sx={{mt:2}}>
                        <CustomInput
                            label='Confirm Password'
                            type='password'
                            name='confirmPassword'
                            fullWidth
                            showPassword={showConfirmPassword}
                            onTogglePassword={handleToggleConfirmPassword}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            error={!!formErrors.confirmPassword}
                            helperText={formErrors.confirmPassword}
                        />
                        </Box>                   
                        {PasswordError && (
                            <Typography color="error" variant="body2" sx={{mt:2}}>
                                New Password and Confirm Password are required
                            </Typography>
                        )}
                        {!PasswordLength && errorData.msg ? (
                                        <Typography color="error" variant="body2" sx={{mt:2}}> {errorData.msg} </Typography>
                                      ):''}
                        {PasswordLength? (
                                        <Typography color="error" variant="body2" sx={{mt:2}}> Password lenght is too short, must be at least 8 characters </Typography>
                                      ):''}
                        {matchPassword? (
                                        <Typography color="error" variant="body2" sx={{mt:2}}> Password do not match </Typography>
                                      ):''}
                         </>
                ) : (
                    <Box className='password-success'>
                        <img src={passwordSucces} alt='success'/>
                        <Typography variant='h3'>Password changed</Typography>
                        <Typography variant='body1' className='forgot-description'>
                            Your password has been changed succesfully
                        </Typography>
                    </Box>
                )}
            </Box>
            <CustomButton
                disabled={!formData.email}
                backgroundColor='#003087'
                className="proceedBtn"
                isLoading={loader}
                title={
                    steps === 0
                        ? "PROCEED"
                        : steps === 1
                            ? "Verify"
                            : steps === 2
                                ? "RESET PASSWORD"
                                : "Back To Login"
                }
                onClick={handleNext}
            />
        </Box>
    );
};

export default ForgotPassword;
