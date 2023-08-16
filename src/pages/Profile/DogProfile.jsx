import React, {useState} from 'react';
import {Box, Button, InputLabel, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {CustomButton, CustomDropdown, CustomInput} from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;
const options = [
    {label: "Option 1", value: "option1"},
    {label: "Option 2", value: "option2"},
    {label: "Option 3", value: "option3"},
];
const DogProfile = () => {
    const [alignment, setAlignment] = React.useState('yes');


    const [selectedOption, setSelectedOption] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [formData, setFormData] = useState({
        location: '',
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        referralSource: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        zipCode: '',
        emergencyName: '',
        emergencyEmail: '',
        emergencyPhoneNumber: '',
        emergencyRelationship: '',
        isLiabilityWaiverChecked: false
    });

    const [errors, setErrors] = useState({});
    const onSelectImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            if (imageFile) {
                setSelectedImage(URL.createObjectURL(imageFile));
            }
        }
    };


    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        if (errors[name]) {
            setErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }
    };

    const handleLiabilityWaiverCheck = () => {
        setFormData(prevData => ({
            ...prevData,
            isLiabilityWaiverChecked: !prevData.isLiabilityWaiverChecked
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basic validation: Check if required fields are filled
        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'mobileNumber',
            'address1',
            'address2',
            'state',
            'city',
            'zipCode',
            'emergencyEmail',
            'emergencyPhoneNumber',

        ];

        const newErrors = {};
        let hasErrors = false;

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
                hasErrors = true;
            }
        });

        // Additional validation: Check email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            hasErrors = true;
        }

        if (hasErrors) {
            setErrors(newErrors);
            return;
        }

        // Perform form submission and API call here
        // ...


    };


    return (
        <Box className='profile-main'>
            <Box className='dp-section'>
                <img
                    src={selectedImage ? selectedImage : 'https://s3-alpha-sig.figma.com/img/7b3c/835d/f1dff291fc821211e847e359bb77f85b?Expires=1692576000&Signature=TTNOG7uioQbh4y5bX4nJat1kESmaPnN7yaKihz6M86R6-z0w~6GMvWmckS77zkOf9WILqDNQ22M23AZpLb1jL5n1rMc0fhpUqxE1WTcn~abXNWPoqbqp2x9iuDQGOpe7nkEUUcaYgeQqq3GazHgVHxW21uD4NGVsfbjfRX7h6E1EjyNwGHTf4LHa50Uy6zGIbkEootbjUoXFqYWpRNTesVHs7fe0Df2bhxMvJFzRpiE19w8GI6BLS7lqyGgy9j5tMO9ilYfGzMe8YWIW7jxAC1fqHT4HCbsWMhVboV7tNerSET-6v0JpbQFcDVeXqICsYd9JPbfDl6v78nT2-fe8Qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                    alt={'profile'}/>
                <Box className='img-input'>
                    <img src={require('../../assets/images/camera-plus-outline.svg').default}
                         alt={'dp'}/>
                    <input type={'file'} onChange={onSelectImage}/>
                </Box>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box className='form-section'>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'First Name'}
                            name='firstName'
                            className='form-inputs'
                            placeholder='First Name'
                            fullWidth
                            value={formData.firstName}
                            onChange={handleInputChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Last Name'}
                            name='lastName'
                            className='form-inputs'
                            placeholder='Last Name'
                            fullWidth
                            value={formData.lastName}
                            onChange={handleInputChange}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Date of Birth</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={dateIcon}
                            date
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Gender'}
                            name='gender'
                            className='form-inputs'
                            placeholder='Gender'
                            fullWidth
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Acquisition Sources'}
                            name='address1'
                            className='form-inputs'
                            placeholder='Address 1'
                            fullWidth
                            value={formData.address1}
                            onChange={handleInputChange}
                            error={!!errors.address1}
                            helperText={errors.address1}
                        />
                    </Box>

                    <Box className='input-item-wrap'>
                        <InputLabel>Breed</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={downArrow}
                        />

                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Allergies'}
                            name='address2'
                            className='form-inputs'
                            placeholder='Address 2'
                            fullWidth
                            value={formData.address2}
                            onChange={handleInputChange}
                            error={!!errors.address2}
                            helperText={errors.address2}
                        />
                    </Box>


                    <Typography className='section-heading'>Tell us about your dog</Typography>
                    <Box className='input-item-wrap q-and-a'>
                        <Box className='input-toggle-wrap'>
                            <Typography>Does your dog bark at other dogs when out on a walk or at you for
                                attention? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="no">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Is your dog afraid of strangers or certain groups of people? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="no">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Has your dog ever bitten a person or another dog, regardless or injury (not
                                including nipping or play biting)? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="no">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Is your dog very possessive about his/her food or toys? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="no">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Do you believe your dog is able to skip basic obedience and take advanced
                                classes or agility?</Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="no">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Do you believe your dog is able to skip basic obedience and take advanced
                                classes or agility?</Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Orientation">Orientation</ToggleButton>
                                <ToggleButton className='toggle-btn' value="Evaluation">Evaluation</ToggleButton>
                                <ToggleButton className='toggle-btn' value="Agility">Agility</ToggleButton>
                                <ToggleButton className='toggle-btn' value="Agility">Agility</ToggleButton>

                            </ToggleButtonGroup></Box>

                        <Box className='input-toggle-wrap'>
                            <Typography className='heading'>Description</Typography>
                            <TextField value='Add notes (Optional)' className='text-field'/>
                        </Box>

                    </Box>


                    <Typography className='section-heading'>Vaccination Details</Typography>

                    <Box className='input-item-wrap'>
                        <Box className='liability-btn-wrap upload'>
                            <Button className="expiryBtn" onClick={handleLiabilityWaiverCheck}>
                                Upload Documents
                            </Button>

                        </Box>
                    </Box>
                    <Box className='input-item-wrap'>

                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Rabbis Exp Date</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={dateIcon}
                            date
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Bordetella Exp Date</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={dateIcon}
                            date
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Combo Shot Exp Date</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={dateIcon}
                            date
                        />
                    </Box>


                    <Box className='input-item-wrap'>

                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomButton
                            className='book-btn'
                            title={"Update Profile"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon/>}
                            fullWidth
                            type="submit"
                            // onClick={handleNext}

                        />
                    </Box>
                </Box>
            </form>
        </Box>
    )
}
export default DogProfile;