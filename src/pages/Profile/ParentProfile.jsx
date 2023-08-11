import React, {useEffect, useState} from 'react';
import {Box, Button, InputLabel, Typography} from "@mui/material";
import {CustomButton, CustomDropdown, CustomInput} from "../../Components/Common";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;
const options = [
    {label: "Option 1", value: "option1"},
    {label: "Option 2", value: "option2"},
    {label: "Option 3", value: "option3"},
    {label: "Select Location", value: "Select Location"},
];
const ParentProfile = ({userDetail}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    console.log(userDetail, "userDetail")
    const [formData, setFormData] = useState({
        location: '',
        profileImage: "",
        firstName: '',
        lastName: '',
        email: '',
        mobilePhone: '',
        referralSource: '',
        addressLine1: '',
        addressLine2: '',
        state: '',
        city: '',
        postalCode: '',
        emergencyContactName: '',
        emergencyContactEmail: '',
        emergencyContactPhone: '',
        emergencyContactRelationShip: '',
        isLiabilityWaiverChecked: false
    });
    // useEffect(() => {
    //     setFormData(userDetail)
    // }, [userDetail])
    const [errors, setErrors] = useState({});
    const onSelectImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            if (imageFile) {
                setSelectedImage(URL.createObjectURL(imageFile));
            }
        }
    };


    const handleDropdownChange = (event,value) => {
        console.log(event,"dropdownvalue")
        setSelectedOption(value);
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
        const form = new FormData();
        form.append('locationId', '1db14353-2d7c-4a16-8fac-abd4b9c08edb');
        form.append('firstName', 'Harshit');
        form.append('lastName', 'Khatri');
        form.append('mobilePhone', '123-456-7890');
        form.append('workPhone', '');
        form.append('homePhone', '');
        form.append('profileImage', '');
        form.append('addressLine1', '123 Main St');
        form.append('addressLine2', '');
        form.append('state', 'California');
        form.append('city', 'Los Angeles');
        form.append('postalCode', '90001');
        form.append('birthDate', '01-01-1990');
        form.append('referralSource', 'Friend');
        form.append('emergencyContactName', '');
        form.append('emergencyContactPhone', '');
        form.append('emergencyContactEmail', '');
        form.append('emergencyContactRelationShip', '');
        form.append('signatureImage', '');
        form.append('isLiabilityWaiverSigned', 'true');
        form.append('updatedBy', '10000');
        form.append('status', '');
        // Perform form submission and API call here
        // ...

        console.log('Form data:', formData);
    };


    return (
        <Box className='profile-main'>
            <Box className='dp-section'>
                <img
                    src={selectedImage ? selectedImage : 'https://s3-alpha-sig.figma.com/img/113f/a25a/235312cc53dcd4c8780648145d59e3c2?Expires=1692576000&Signature=DQzFy6mNoe093Tu552CMN4nwwW0nU42rEroD07e71QJWs48DDCsgnsgvfnaCOaMbOon3Mj7is0UY2pDJfIOUONFU8zwxhWWJZDNUrS2ABweppFf7actt4IHk79tiHW36IA4KiwUn3rBVI2SjdLHeU-2IW3PKJvVAUfWpI0ISeLtRdH1ctUL5PS-YTrdSJa5eMfalB80~U7TtuZo2NaagKTaTLV7~eSWZ9GxY0E76TRqcBk5RpUj9bCMHOdqBJI1-bkgHc0xHxfkYc0tOEANljLZjBAzChNMf0fzu8huGK~WKKAKUVPYaYXa3rGwIZxE9eSABevElK2r6lOj-K6bauA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
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
                        <InputLabel>Select Location</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
placeHolder={'Select Location'}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={downArrow}
                            error={!!errors.location}
                            helperText={errors.location}
                        />
                    </Box>

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
                        <CustomInput
                            type='email'
                            label={'Email'}
                            name='email'
                            className='form-inputs'
                            placeholder='Email'
                            fullWidth
                            value={formData.email}
                            onChange={handleInputChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='tel'
                            label={'Mobile Number'}
                            name='mobileNumber'
                            className='form-inputs'
                            placeholder='Mobile Number'
                            fullWidth
                            value={formData.mobilePhone}
                            onChange={handleInputChange}
                            error={!!errors.mobilePhone}
                            helperText={errors.mobilePhone}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <InputLabel>Referral Sources</InputLabel>
                        <CustomDropdown
                            value={selectedOption}
                            onChange={handleDropdownChange}
                            options={options}
                            icon={downArrow}
                        />
                    </Box>
                    <Typography className='section-heading'>Address Details</Typography>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Address 1'}
                            name='address1'
                            className='form-inputs'
                            placeholder='Address 1'
                            fullWidth
                            value={formData.addressLine1}
                            onChange={handleInputChange}
                            error={!!errors.addressLine1}
                            helperText={errors.addressLine1}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Address 2'}
                            name='address2'
                            className='form-inputs'
                            placeholder='Address 2'
                            fullWidth
                            value={formData.addressLine2}
                            onChange={handleInputChange}
                            error={!!errors.addressLine2}
                            helperText={errors.addressLine2}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <InputLabel>State</InputLabel>
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
                            label={'City'}
                            name='city'
                            className='form-inputs'
                            placeholder='City'
                            fullWidth
                            value={formData.city}
                            onChange={handleInputChange}
                            error={!!errors.city}
                            helperText={errors.city}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Zip Code'}
                            name='zipCode'
                            className='form-inputs'
                            placeholder='Zip Code'
                            fullWidth
                            value={formData.postalCode}
                            onChange={handleInputChange}
                            error={!!errors.postalCode}
                            helperText={errors.postalCode}
                        />
                    </Box>
                    <Typography className='section-heading'>Emergency Contact Person Details</Typography>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Name'}
                            name='emergencyName'
                            className='form-inputs'
                            placeholder='Name'
                            fullWidth
                            value={formData.emergencyContactName}
                            onChange={handleInputChange}
                            error={!!errors.emergencyContactName}
                            helperText={errors.emergencyContactName}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='email'
                            label={'Email'}
                            name='emergencyEmail'
                            className='form-inputs'
                            placeholder='Email'
                            fullWidth
                            value={formData.emergencyContactEmail}
                            onChange={handleInputChange}
                            error={!!errors.emergencyContactEmail}
                            helperText={errors.emergencyContactEmail}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='tel'
                            label={'Phone Number'}
                            name='emergencyPhoneNumber'
                            className='form-inputs'
                            placeholder='Phone Number'
                            fullWidth
                            value={formData.emergencyContactPhone}
                            onChange={handleInputChange}
                            error={!!errors.emergencyContactPhone}
                            helperText={errors.emergencyContactPhone}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Relationship'}
                            name='emergencyRelationship'
                            className='form-inputs'
                            placeholder='Relationship'
                            fullWidth
                            value={formData.emergencyContactRelationShip}
                            onChange={handleInputChange}
                            error={!!errors.emergencyContactRelationShip}
                            helperText={errors.emergencyContactRelationShip}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <Box className='liability-btn-wrap'>
                            <Button className="expiryBtn" onClick={handleLiabilityWaiverCheck}>
                                Liability Waiver
                            </Button>
                            {formData.isLiabilityWaiverChecked && <CheckCircleIcon/>}
                        </Box>
                    </Box>
                    <Box className='input-item-wrap'>

                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomButton
                            className='book-btn'
                            title={"Update"}
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
export default ParentProfile;