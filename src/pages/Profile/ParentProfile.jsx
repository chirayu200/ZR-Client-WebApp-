import React, { useEffect, useState } from 'react';
import { Box, Button, InputLabel, Typography } from "@mui/material";
import { CustomButton, CustomDropdown, CustomInput } from "../../Components/Common";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ProfileModals } from "../../Components/Modals";
import { Country, State } from 'country-state-city';
import { UpdateClientDetail } from "../../Services/APIs";
import { getLocalData } from "../../Utils";


const downArrow = require("../../assets/images/dropdownArrow.svg").default;

const referralSourcesOptions = [
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Friends", value: "Friends" },
    { label: "Whatsapp", value: "Whatsapp" },
    { label: "Twitter", value: "Twitter" },
    { label: "FaceBook", value: "FaceBook" },
    { label: "Family", value: "Family" },
    { label: "Instagram", value: "Instagram" },
    { label: "Others", value: "Others" },
];
const locationOptions = Country.getAllCountries().map((item) => ({
    label: item.name,
    value: item
}))

const ParentProfile = ({ initialState,clientDetail, handleNext }) => {
    // const getLocations = [];
    const clientId=getLocalData('clientId');
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);
    const [stateOptions, setStateOptions] = useState([]);
    const [getLocations,setGetLocations] = useState('');
    const [getStates,setGetStates]= useState('')
    const [formData, setFormData] = useState({
        clientId: getLocalData('clientId'),
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
        birthDate: '',
        postalCode: '',
        emergencyContactName: '',
        emergencyContactEmail: '',
        emergencyContactPhone: '',
        emergencyContactRelationShip: '',
        isLiabilityWaiverSigned: false,
        signature: null,
        policyCheck: false,
    });

    useEffect(() => {
        getLocationsData();
        console.log("DATA IS AS FOLLOWS--->",clientDetail);
        if (initialState) {
            setFormData(clientDetail)
        }
    }, [])


    const getLocationsData = async () =>{
      let response= await fetch('https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev/locations');
      const jsonData = await response.json();
      console.log(jsonData.data.Items);
      console.log(jsonData.data.Items.length)
      const locationOptions = jsonData.data.Items.map((item) => ({
        label: item.locationName,
        value: item.locationName
    }))
    setGetLocations(locationOptions)
    const stateOptions=jsonData.data.Items.map((item) => ({
        label: item.state,
        value: item.state

    }))
    setGetStates(stateOptions)
    }

    const [errors, setErrors] = useState({});
    const onSelectImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            if (imageFile) {

                setFormData({ ...formData, profileImage: URL.createObjectURL(imageFile) })
            }
        }
    };


    const handleDropdownChange = (name, value) => {

        if (name === 'location' && value) {
            const options = State.getStatesOfCountry(value.value.isoCode)
                .map((item) => ({
                    label: item.name,
                    value: item
                }))

            setStateOptions(options)
        }
        setFormData({ ...formData, [name]: value?.label || '' })
        if (errors[name]) {
            setErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
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


    const handleSubmit = (event) => {
      event.preventDefault();

        // Basic validation: Check if required fields are filled
        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'mobilePhone',
            'addressLine1',
            'addressLine2',
            'state',
            'city',
            'postalCode',
            'emergencyContactName',
            'emergencyContactPhone',
        ];

        const newErrors = {};
        let hasErrors = false;

        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required';
                hasErrors = true;
            }
        });

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
        form.append('locationId', formData.clientId);
        form.append('firstName', formData.firstName);
        form.append('email', formData.email);
        // form.append('location', formData?.location || '');
        form.append('lastName', formData.lastName);
        form.append('mobilePhone', formData.mobilePhone);
        form.append('workPhone', '');
        form.append('homePhone', '');
        form.append('profileImage', formData.profileImage || '');
        form.append('addressLine1', formData.addressLine1);
        form.append('addressLine2', formData.addressLine2);
        form.append('state', formData?.state);
        form.append('city', formData.city);
        form.append('postalCode', formData.postalCode);
        // form.append('birthDate', formData.birthDate||'');
        form.append('referralSource', formData.referralSource);
        form.append('emergencyContactName', formData.emergencyContactName);
        form.append('emergencyContactPhone', formData.emergencyContactPhone);
        form.append('emergencyContactEmail', formData.emergencyContactEmail);
        form.append('emergencyContactRelationShip', formData.emergencyContactRelationShip);
        form.append('signatureImage', formData.signature);
        form.append('isLiabilityWaiverSigned', true);
        form.append('updatedBy', '10000');
        form.append('status', 1);

        UpdateClientDetail(form, formData.sortKey).then((response) => {
            if (response) {
                setConfirmOpen(true);
            }
        })

    };
    const handleActionBtn = (type) => {
        if (type === 'notNow') {
            setConfirmOpen(false);
           
        } else if (type === 'yes') {
            setConfirmOpen(false);
            setTeamOpen(true);

        }
    }


    return (
        <Box className='profile-main'>
            <Box className='dp-section'>
                <img
                    src={formData?.profileImage ? formData?.profileImage : 'https://s3-alpha-sig.figma.com/img/113f/a25a/235312cc53dcd4c8780648145d59e3c2?Expires=1692576000&Signature=DQzFy6mNoe093Tu552CMN4nwwW0nU42rEroD07e71QJWs48DDCsgnsgvfnaCOaMbOon3Mj7is0UY2pDJfIOUONFU8zwxhWWJZDNUrS2ABweppFf7actt4IHk79tiHW36IA4KiwUn3rBVI2SjdLHeU-2IW3PKJvVAUfWpI0ISeLtRdH1ctUL5PS-YTrdSJa5eMfalB80~U7TtuZo2NaagKTaTLV7~eSWZ9GxY0E76TRqcBk5RpUj9bCMHOdqBJI1-bkgHc0xHxfkYc0tOEANljLZjBAzChNMf0fzu8huGK~WKKAKUVPYaYXa3rGwIZxE9eSABevElK2r6lOj-K6bauA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
                    alt={'profile'} />
                <Box className='img-input'>
                    <img src={require('../../assets/images/camera-plus-outline.svg').default}
                        alt={'dp'} />
                    <input type={'file'} onChange={onSelectImage} />
                </Box>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box className='form-section'>
                    <Box className='input-item-wrap'>
                        <InputLabel>Select Location</InputLabel>
                        <CustomDropdown
                            value={formData.location}
                            placeHolder={formData.location || 'Select Location'}
                            onChange={handleDropdownChange}
                            // options={locationOptions}
                            options={getLocations}
                            icon={downArrow}
                            name='location'
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
                            name='mobilePhone'
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
                            value={formData.referralSource}
                            placeHolder={formData.referralSource || 'Referral Sources'}
                            name='referralSources'
                            onChange={handleDropdownChange}
                            options={referralSourcesOptions}
                            icon={downArrow}
                            error={!!errors.referralSource}
                            helperText={errors.referralSource}

                        />
                    </Box>
                    <Typography className='section-heading'>Address Details</Typography>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Address 1'}
                            name='addressLine1'
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
                            name='addressLine2'
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
                            value={formData.state}
                            placeHolder={formData.state || 'Select State'}
                            name='state'
                            onChange={handleDropdownChange}
                            // options={stateOptions}
                            options ={getStates}
                            icon={downArrow}
                            error={!!errors.state}
                            helperText={errors.state}
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
                            name='postalCode'
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
                            name='emergencyContactName'
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
                            name='emergencyContactEmail'
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
                            name='emergencyContactPhone'
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
                            name='emergencyContactRelationShip'
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
                            <Button className="expiryBtn" onClick={() => setOpen(true)}>
                                Liability Waiver
                            </Button>
                            {(formData.isLiabilityWaiverSigned) && <CheckCircleIcon />}
                        </Box>
                    </Box>
                    <Box className='input-item-wrap'>

                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomButton
                            className='book-btn'
                            title={"Update"}
                            color='#fff'
                            disabled={formData.signature === null}
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon />}
                            fullWidth
                            type="submit"
                        />
                    </Box>
                </Box>
            </form>
            <ProfileModals fullWidth open={open} handleClose={() => setOpen(false)} setFormData={setFormData}
                formData={formData} />
            <ProfileModals open={confirmOpen} type={'confirm'} handleActionBtn={handleActionBtn} />

            <ProfileModals open={teamOpen} handleClose={() => setTeamOpen(false)} type={'team'}
                handleNext={handleNext} />
        </Box>
    )
}
export default ParentProfile;