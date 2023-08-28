import React, {useEffect, useState} from "react";
import {Box, Button, Link, Typography} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
    ConfirmAccountByOtp,
    ResendConfirmationCode,
    ResendForgotPasswordCode,
    ResetPassword
} from "../../Services/APIs/account";
import {CustomButton, CustomInput} from "../../Components/Common";

const pinCode = require("../../assets/images/paste.svg").default;
const passwordSucces = require("../../assets/images/passSuccess.svg").default;

const ForgotPassword = ({handlePrevious, authState, setAuthState, onLogin}) => {

    const [steps, setSteps] = useState(0);
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);
    const [isCounting, setIsCounting] = useState(true);
    const [formErrors, setFormErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const [PasswordLength, setPasswordLength] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
                ResendForgotPasswordCode(formData).then((response) => {
                    if (response?.success) {
                        setSteps(steps + 1)
                    }else{
                        setFormErrors({ email: response.data.error });
                       // errors.email =  ;
                    }
                  
                })
            }
            if (steps === 1 && authState?.success) {
                
                if (formData.confirmationCode) {
                    ConfirmAccountByOtp({
                        email: formData.email,
                        confirmationCode: formData.confirmationCode,
                    }).then((response) => {
                        if (response?.success) {
                            setSteps(steps + 1);
                            handlePrevious(0);
                            setFormErrors((prevFormErrors) => ({
                                ...prevFormErrors,
                                code: '', 
                            }));
                        } else {
                            setError(true);
                            setTimeout(() => {
                                setError(false);
                            }, 10000)
                            // setFormErrors((prevFormErrors) => ({
                            //     ...prevFormErrors,
                            //     code: 'Invalid confirmation code.', 
                            // }));
                        }
                    });
                } else {
                    setFormErrors((prevFormErrors) => ({
                        ...prevFormErrors,
                        code: 'Code is required.',
                    }));
                }
    
                } else if (steps === 1) {
                   //code is required
                   if(formData.confirmationCode){
                    setSteps(steps + 1);
                   }else{
                    setFormErrors((prevFormErrors) => ({
                      ...prevFormErrors,
                      code: 'Code is required.',
    
                    }));         
    
                }

            }  if (steps === 2) {
                setErrorData((prevErrorData) => ({
                    ...prevErrorData,
                    type: '',
                    msg: ''
                }));
            
                setPasswordError(false);
            
                if (formData.newPassword && formData.confirmPassword) {
                    setPasswordError(false);
                  
                    if (formData.newPassword.trim().length < 2 && formData.confirmPassword.trim().length < 2) {
                        setPasswordLength(true);
                    }  
                        
                      else if (formData.newPassword === formData.confirmPassword) {
                        ResetPassword(formData).then((response) => {
                            setFormErrors((prevFormErrors) => ({
                                ...prevFormErrors,
                                confirmPassword: '',
                            }));
                            if (response?.success) {
                                setSteps(3);
                            } else {
                                setPasswordError(false);
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
                        setFormErrors((prevFormErrors) => ({
                            ...prevFormErrors,
                            confirmPassword: 'Passwords do not match',
                        }));
                    }
                } else {
                    setPasswordError(true);
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
                            placeholder='confirmationCode'
                            name='confirmationCode'
                            icon={pinCode}
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
                            fullWidth
                            placeholder='new password'
                            showPassword={showPassword}
                            onTogglePassword={handleTogglePassword}
                            name='password'
                            value={formData.newPassword}
                            onChange={(e => setFormData({...formData, newPassword: e.target.value}))}
                            // error={!!formErrors.firstName}
                            // helperText={formErrors.firstName}
                        />
                       
                        <Box sx={{mt:2}}>
                        <CustomInput
                            label='Confirm Password'
                            type='password'
                            fullWidth
                            showPassword={showConfirmPassword}
                            onTogglePassword={handleToggleConfirmPassword}
                            placeholder='confirm Password'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={(e => setFormData({...formData, confirmPassword: e.target.value}))}
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
                                        <Typography color="error" variant="body2" sx={{mt:2}}> Password lenght is too short </Typography>
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
