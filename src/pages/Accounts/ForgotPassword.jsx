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
    const [formData, setFormData] = useState({
        email: "",
        confirmationCode: '',
        newPassword: '',
        confirmPassword: '',

    });
    useEffect(() => {
        if (authState?.from !== '') {
            console.log(authState, "auth")
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
        console.log("counter", counter);

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
    const handleNext = () => {
        const errors = validateForm();
        // if (Object.keys(errors).length === 0) {
        console.log(errors);
        if (steps !== 3) {
            if (steps === 0) {
                ResendForgotPasswordCode(formData).then((response) => {
                    console.log('ResendForgotPasswordCode', response);
                    setSteps(steps + 1)
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
                setSteps(steps + 1);
            } else {
                if (formData.newPassword === formData.confirmPassword) {
                    delete formData['confirmPassword']
                    ResetPassword(formData).then((response) => {
                        setSteps(3);
                    })
                } else {
                    setFormErrors((prevFormErrors) => ({
                        ...prevFormErrors,
                        confirmPassword: 'Password Not Matched',
                    }));
                }
            }

        } else {
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
                    <Typography variant='body1' className='forgot-description'>
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
                            placeholder='code'
                            name='code'
                            icon={pinCode}
                            value={formData.confirmationCode}
                            onChange={(e) => setFormData({...formData, confirmationCode: e.target.value})}
                            // error={!!formErrors.firstName}
                            // helperText={formErrors.firstName}
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
                            name='password'
                            value={formData.newPassword}
                            onChange={(e => setFormData({...formData, newPassword: e.target.value}))}
                            // error={!!formErrors.firstName}
                            // helperText={formErrors.firstName}
                        />

                        <CustomInput
                            label='Confirm Password'
                            type='password'
                            fullWidth
                            placeholder='confirm Password'
                            name='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={(e => setFormData({...formData, confirmPassword: e.target.value}))}
                            error={!!formErrors.confirmPassword}
                            helperText={formErrors.confirmPassword}
                        />
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
