import { Box, Container, Divider, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import { CustomButton, CustomInput, Popup } from "../../Components/Common";
import Login from "./Login";
import { Signup } from "../../Services/APIs";

const logo = require("../../assets/images/logoWhiteBlue.svg").default;
const facebook = require("../../assets/images/facebook.svg").default;
const google = require("../../assets/images/google.svg").default;
const apple = require("../../assets/images/apple.svg").default;

export default function SignupScreen({ onLogin }) {
    const [value, setValue] = useState(1);
    const [loader, setLoader] = useState(false);
    const [activeScreen, setActiveScreen] = useState(0);
    console.log(activeScreen, "activeScreen");
    const [authStatus, setAuthStatus] = useState({
        from: '',
        success: false,
    });
    const [formErrors, setFormErrors] = useState({});
   
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errorData, setErrorData] = useState({
        type: "",
        msg: "",
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleInputChange = (event) => {
        const errors = {};
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const { name, value } = event.target;
        if (name === 'password' || name === "confirmPassword") {
            if (!passwordPattern.test(value)) {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: value,
                }));
                if (name === 'password') {
                    errors.password = "Password must be at least 8 characters long and include at least one letter, one digit, and one special character";
                    setFormErrors(errors);
                    return;
                }
                else{
                    errors.confirmPassword="Password and confirm password must match";
                    setFormErrors(errors);
                }
                    return;
            }
            else {
                errors.password = '';
                setFormErrors(errors);
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    [name]: value,
                }));
            }
        }
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
    };

    const checkEmailExist = async (event) => {
        const errors = {};
        const { value } = event.target;
        const response = await fetch(`https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev/client/checkEmailExists?email=${value}`);
        const result = await response.json();
        if (result.isExists) {
            errors.email = "Email Already Exist";
            setFormErrors(errors)
        }
        else {
            errors.email = '';
            setFormErrors(errors)
        }
    }
    const validateForm = () => {
        setErrorData((prevErrorData) => ({
            ...prevErrorData,
            type: '',
            msg: ''
        }));
        const errors = {};
        if (!formData.firstName?.trim()) {
            errors.firstName = "First Name is required";
        }
        if (!formData.lastName?.trim()) {
            errors.lastName = "Last Name is required";
        }
        if (!formData.email?.trim()) {
            errors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
        ) {
            errors.email = "Invalid email address";
        }
        if (!formData.password?.trim()) {
            errors.password = "Password is required";
        }
        if (formData.password?.trim().length ===  1) {
            errors.password = "Password length is too short";
        }
        if (formData.confirmPassword?.trim().length ===  1) {
            errors.confirmPassword = "Confirm Password length is too short";
        }
       
        if (!formData?.confirmPassword?.trim()) {
            errors.confirmPassword = "Confirm Password is required";
            formData.confirmPassword = '';
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = "Passwords does not match";
        }
        return errors;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {
            setLoader(true);
            delete formData["confirmPassword"];
            Signup(formData).then(response => {
                if (response) {
                    console.log(response, "response");                  
                    if (response.success) 
                    {
                        setLoader(false)                       
                        setAuthStatus({
                            from: formData.email,
                            success: response.success
                        });
                        setErrorData((prevErrorData) => ({
                            ...prevErrorData,
                            type: '',
                            msg: ''
                        }));
                        setActiveScreen(2)
                    } else {
                        setLoader(false)
                        console.log(response.data.error)
                        if (response.data.error) {
                            setErrorData((prevErrorData) => ({
                                ...prevErrorData,
                                type: 'error',
                                msg: response.data.error
                            }));
                        }
                    }
                }
            });
        } else {
            setFormErrors(errors);
        }
    };

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handlePrevious = (steps) => {
        console.log("steps", steps);
        setActiveScreen(0)
    }

    return (
        <Container className='signup-container'>

            {errorData.msg ?
                <Popup type={errorData.type || 'error'} errorText={errorData.msg || 'Something Went Wrong'} /> : null}
            <Box className='signup-header'>
                <img src={logo} alt='ZR Logo' className='' />
            </Box>
            <Box className='signup-main'>
                <Divider className='divider' />
                {activeScreen === 2 ? (
                    <ForgotPassword handlePrevious={handlePrevious} authState={authStatus}
                        setAuthState={setAuthStatus} onLogin={onLogin} />
                ) : (
                    <>
                        <Box className='signup-tabs-main'>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                className='signup-tabs'
                                variant='fullWidth'
                            >
                                <Tab label='Sign Up' />
                                <Tab label='Log In' />
                            </Tabs>
                        </Box>
                        {/* <Box> */}
                        {value === 0 ? (
                            <form onSubmit={handleSubmit}>
                                <Box className='signup-form'>
                                    <Box className='form-fullwidth-field'>
                                        <Box className='field-section'>
                                            <CustomInput
                                                label='First Name'
                                                type='text'
                                                fullWidth
                                                placeholder='First Name'
                                                name='firstName'
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                error={!!formErrors.firstName}
                                                helperText={formErrors.firstName}
                                            />
                                        </Box>
                                        <Box className='field-section'>
                                            <CustomInput
                                                label='Last Name'
                                                type='text'
                                                fullWidth
                                                placeholder='Last Name'
                                                name='lastName'
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                error={!!formErrors.lastName}
                                                helperText={formErrors.lastName}
                                            />
                                        </Box>
                                    </Box>
                                    <CustomInput
                                        label='Email'
                                        type='email'
                                        fullWidth
                                        placeholder='Email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={checkEmailExist}
                                        error={!!formErrors.email}
                                        helperText={formErrors.email}
                                    />
                                     
                                    <CustomInput
                                        label='Password'
                                        type='password'
                                        fullWidth
                                        placeholder='Password'
                                        showPassword={showPassword}
                                        onTogglePassword={handleTogglePassword}
                                        name='password'
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        error={!!formErrors.password}
                                        helperText={formErrors.password}
                                    />
                                    <CustomInput
                                        label='Confirm Password'
                                        type='password'
                                        fullWidth
                                        placeholder='Confirm Password'
                                        showPassword={showConfirmPassword}
                                        onTogglePassword={handleToggleConfirmPassword}
                                        name='confirmPassword'
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        error={!!formErrors.confirmPassword}
                                        helperText={formErrors.confirmPassword}
                                    />

                                    {errorData.msg ? (
                                        <Typography color="error" variant="body2"> {errorData.msg} </Typography>
                                      ):''}

                                    <CustomButton
                                        backgroundColor='#003087'
                                        isLoading={loader}
                                        title={"CREATE ACCOUNT"}
                                        type='submit'
                                    />
                                </Box>
                            </form>
                        ) : (
                            <Login setActiveScreen={setActiveScreen} onLogin={onLogin} authState={authStatus}
                                setAuthState={setAuthStatus} />
                        )}
                        {/* </Box> */}
                        <Box className='signup-footer'>
                            <Box className='line'></Box>
                            <Typography>Or Sign Up with</Typography>
                            <Box className='line'></Box>
                        </Box>
                        <Box className='social-signup'>
                            <CustomButton color='#003087' icon={facebook} />
                            <CustomButton color='#003087' icon={google} />
                            <CustomButton color='#003087' icon={apple} />
                        </Box>
                    </>
                )}
            </Box>


        </Container>
    );
}