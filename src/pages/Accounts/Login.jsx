import React, {useState} from "react";
import {Box, Checkbox, Link} from "@mui/material";
import {LoginCall} from '../../Services/APIs';
import {CustomButton, CustomInput} from "../../Components/Common";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function Login({setActiveScreen, setAuthState, authState,onLogin}) {
    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
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
    };
    const validateForm = () => {
        const errors = {};
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            errors.email = "Invalid email address";
        }
        if (!formData.password.trim()) {
            errors.password = "Password is required";
        }

        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        const errors = validateForm();
        if (Object.keys(errors).length === 0) {

            console.log(formData);
            setLoader(true)
            LoginCall(formData).then((response) => {
                setLoader(false)
                if (response.success) {
                    onLogin(response)
                    setAuthState({
                        from: formData.email,
                        success: true,
                    })
                    setActiveScreen(2)
                    console.log(response);
                }
            });
        } else {

            setFormErrors(errors);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <Box className='signup-form'>
                <CustomInput
                    label='Email'
                    type='email'
                    name='email'
                    fullWidth
                    placeholder='Email'
                    showCheckbox
                    value={formData.email}
                    onChange={handleInputChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                />
                <CustomInput
                    label='Password'
                    type='password'
                    name='password'
                    fullWidth
                    placeholder='Password'
                    showPassword={showPassword}
                    onTogglePassword={handleTogglePassword}
                    value={formData.password}
                    onChange={handleInputChange}
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                />
                <Box className='remember-section'>
                    <Box>
                        {" "}
                        <Checkbox
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            indeterminate={rememberMe}
                            indeterminateIcon={<CheckCircleIcon/>}
                            icon={<RadioButtonUncheckedIcon/>}
                        />
                        Remember me
                    </Box>
                    <Link className='forgot-link' onClick={() => {
                        setAuthState({from: '', success: false});
                        setActiveScreen(2)
                    }}>
                        Forgot Password?
                    </Link>
                </Box>
                <CustomButton
                    backgroundColor='#003087'
                    title={"CREATE ACCOUNT"}
                    type='submit'
                    isLoading={loader}
                />
            </Box>
        </form>
    );
}