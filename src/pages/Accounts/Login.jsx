import React, {useState} from "react";
import {Box, Checkbox, Link,Typography} from "@mui/material";
import {LoginCall} from '../../Services/APIs';
import {CustomButton, CustomInput} from "../../Components/Common";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function Login({setActiveScreen, setAuthState, authState,onLogin}) {

    const [errors, setErrors] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [loader, setLoader] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [CheckUser, setUserExist] = useState(false);
    const [InvalidUserErr, setInvalidErrors] = useState('');
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
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        }else{
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            errors.email = "Invalid email address";
        }
        }
        
        if (!formData.password.trim()) {
            errors.password = "Password is required";
        }
        // if (formData.password.length < 8) {
        //     errors.password ="Password must be at least 8 characters";
        //   }
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
                }else{
                    //invalid user
                    setUserExist(true)
                    setInvalidErrors('Invalid username or password.');
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
              {CheckUser && (<Typography color="error" variant="body2">{InvalidUserErr}</Typography>)}             
 
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
                    title={"LOG IN"}
                    type='submit'
                    isLoading={loader}
                    
                />
            </Box>
        </form>
    );
}
