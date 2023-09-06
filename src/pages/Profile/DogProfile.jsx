import React, {useEffect, useState} from 'react';
import {Box, Button, InputLabel, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {CustomButton, CustomDropdown, CustomInput} from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {dateFormat} from "../../Utils";
import {UpdateDogProfile} from "../../Services/APIs";
import {ProfileModals} from "../../Components/Modals";



const dateIcon = require("../../assets/images/calenderDate.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";

const DogProfile = ({initialState,setActive}) => {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        clientId: "",
        firstName: "",
        lastName: "",
        profileImage: "",
        birthDate: "",
        gender: "",
        acquisitionSource: "",
        breed: "",
        notes: "",
        veterinarian: "",
        allergies: "",
        barking: "",
        strangers: "",
        biting: "",
        possessive: "",
        advanced: "",
        social: "",
        completed: [],
        rabiesExpiration: "",
        bordetellaExpiration: "",
        dhppExpiration: "",

    });
    const [completeObj, setCompleteObj] = useState({
        orientation: 'No',
        evaluation: 'No',
        agility: 'No',
        tricks: 'No'
    })
    useEffect(() => {
        if (initialState&&initialState.selected) {
            console.log("Initial state ",initialState.selected.sortKey);
            setFormData(initialState.selected);
            console.log(initialState.selected);
        }
       

    }, [])
    const handleChange = (name, value) => {
        console.log(name, "name<=>value", value)
        if (name === 'completed') {

            setFormData({
                ...formData,
                [name]: value,

            });
            setCompleteObj({...completeObj, [value]: 'Yes'})
        }
        setFormData({...formData, [name]: value})
    };
    const onSelectImage = (e) => {
        console.log('selectedd');
        if (e.target.files && e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            if (imageFile) {
                setFormData({...formData, profileImage: URL.createObjectURL(imageFile)})
            }
        }
    };
    const onSelectImageVacination = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const imageFile = e.target.files[0];
            if (imageFile) {
                setFormData({...formData, vacinationReport: URL.createObjectURL(imageFile)})
            }
        }
    };


    const handleDateChange = (name, value) => {
        setFormData({...formData, [name]: dateFormat(value) || ''})
        if (errors[name]) {
            setErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }

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


    const handleSubmit = (event) => {
        event.preventDefault();
        const requiredFields = [
            'firstName',
            'lastName',
        ];

        const newErrors = {};
        let hasErrors = false;

        requiredFields.forEach(field => {
            if (!formData[field].trim()) {
                newErrors[field] = 'This field is required';
                hasErrors = true;
            }
        });


        if (hasErrors) {
            setErrors(newErrors);
            return;
        }


        const form = new FormData();
        form.append('clientId', formData.clientId);
        form.append('firstName', formData.firstName || "");
        form.append('lastName', formData.lastName || '');
        form.append('profileImage', formData.profileImage || '');
        form.append('birthDate', formData.birthDate || '');
        form.append('gender', formData.gender || '');
        form.append('acquisitionSource', formData.acquisitionSource || '');
        form.append('breed', formData.breed || '');
        form.append('notes', formData.notes || '');
        form.append('veterinarian', formData.veterinarian || '');
        form.append('allergies', formData.allergies || '');
        form.append('barking', formData.barking || '');
        form.append('strangers', formData.strangers || '');
        form.append('biting', formData.biting || '');
        form.append('possessive', formData.possessive || '');
        form.append('advanced', formData.advanced || '');
        form.append('social', formData.social || '');
        form.append('completed[orientation]', completeObj['orientation']||'');
        form.append('completed[evaluation]', completeObj['evaluation']||'');
        form.append('completed[agility]', completeObj['agility']||'');
        form.append('completed[tricks]', completeObj['tricks']||'');
        form.append('rabiesExpiration', formData.rabiesExpiration || '');
        form.append('bordetellaExpiration', formData.bordetellaExpiration || '');
        form.append('dhppExpiration', formData.dhppExpiration || '');
        form.append('updatedBy', '1000');
        form.append('status', 1);
        console.log(form, 'alldata', formData);
        UpdateDogProfile(form,initialState.selected.sortKey).then((response) => {
            if (response) {
                setConfirmOpen(true);
            }
        })

    };

    function calculateAge() {

        const dateOfBirth = new Date(formData.birthDate);
        const currentDate = new Date();
        const birthYear = dateOfBirth.getFullYear();
        const birthMonth = dateOfBirth.getMonth();
        const birthDay = dateOfBirth.getDate();

        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        let years = currentYear - birthYear;
        let months = currentMonth - birthMonth;
        let weeks = Math.floor((currentDate - dateOfBirth) / (7 * 24 * 60 * 60 * 1000));

        if (months < 0 || (months === 0 && currentDay < birthDay)) {
            years--;
            months += 12;
        }

        return {years, months, weeks};
    }

    const handleActionBtn = (type) => {
        if(type === 'yes'){
            setActive(2)
        }
        else if(type === 'notNow'){
            setActive(0)
        }
        setConfirmOpen(false);

    }
    return (
        <Box className='profile-main'>
            <Box className='dp-section'>
                <img
                    src={formData?.profileImage ? formData?.profileImage : petPlaceholder}
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
                            value={formData.birthDate}
                            onChange={handleDateChange}
                            name={'birthDate'}
                            icon={dateIcon}
                            date
                        />
                        <InputLabel>{formData?.birthDate && `Age: ${calculateAge().weeks} weeks Old`}</InputLabel>
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Gender'}
                            name='gender'
                            className='form-inputs'
                            placeholder='Gender'
                            fullWidth
                            value={formData.gender}
                            onChange={handleInputChange}
                            error={!!errors.gender}
                            helperText={errors.gender}
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Acquisition Sources'}
                            name='acquisitionSource'
                            className='form-inputs'
                            placeholder='Acquisition Sources'
                            fullWidth
                            value={formData.acquisitionSource}
                            onChange={handleInputChange}
                            error={!!errors.acquisitionSource}
                            helperText={errors.acquisitionSource}
                        />
                    </Box>

                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Breed'}
                            name='breed'
                            className='form-inputs'
                            placeholder='breed'
                            fullWidth
                            value={formData.breed}
                            onChange={handleInputChange}
                            error={!!errors.breed}
                            helperText={errors.breed}
                        />

                    </Box>
                    <Box className='input-item-wrap'>
                        <CustomInput
                            type='text'
                            label={'Allergies'}
                            name='allergies'
                            className='form-inputs'
                            placeholder='Address 2'
                            fullWidth
                            value={formData.allergies}
                            onChange={handleInputChange}
                            error={!!errors.allergies}
                            helperText={errors.allergies}
                        />
                    </Box>


                    <Typography className='section-heading'>Tell us about your dog</Typography>
                    <Box className='input-item-wrap q-and-a'>
                        <Box className='input-toggle-wrap'>
                            <Typography>Does your dog bark at other dogs when out on a walk or at you for
                                attention? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.barking}
                                exclusive
                                name='barking'
                                onChange={(e) => handleChange('barking', e.target.value)}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="No">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Is your dog afraid of strangers or certain groups of people? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.strangers}
                                exclusive

                                onChange={(e) => handleChange('strangers', e.target.value)}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="No">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Has your dog ever bitten a person or another dog, regardless or injury (not
                                including nipping or play biting)? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.biting}
                                exclusive

                                onChange={(e) => handleChange('biting', e.target.value)}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="No">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Is your dog very possessive about his/her food or toys? </Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.possessive}
                                exclusive

                                onChange={(e) => handleChange('possessive', e.target.value)}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="No">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography>Do you believe your dog is able to skip basic obedience and take advanced
                                classes or agility?</Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.social}
                                exclusive

                                onChange={(e) => handleChange('social', e.target.value)}
                                aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="Yes">Yes</ToggleButton>
                                <ToggleButton className='toggle-btn' value="No">No</ToggleButton>

                            </ToggleButtonGroup></Box>
                        <Box className='input-toggle-wrap'>
                            <Typography className=''>Describe Your Dog</Typography>
                            <TextField value={formData.notes}
                                       onChange={handleInputChange}
                                       name={'notes'}
                                       placeholder={'Share your dog\'s unique story with the world!'}
                                       className='text-field'/>
                        </Box>
                        <Box className='input-toggle-wrap'>
                            <Typography variant='h6' fontWeight={700}>Completed</Typography>
                            <ToggleButtonGroup
                                color="primary"
                                value={formData.completed}
                                exclusive
                                aria-label="multiple options"
                                onChange={(e) => handleChange('completed', e.target.value)}
                                // aria-label="Platform"
                            >
                                <ToggleButton className='toggle-btn' value="orientation">Orientation</ToggleButton>
                                <ToggleButton className='toggle-btn' value="evaluation">Evaluation</ToggleButton>
                                <ToggleButton className='toggle-btn' value="agility">Agility</ToggleButton>
                                <ToggleButton className='toggle-btn' value="tricks">tricks</ToggleButton>

                            </ToggleButtonGroup></Box>


                    </Box>


                    <Typography className='section-heading'>Vaccination Details</Typography>

                    <Box className='input-item-wrap'>
                        <Box className='liability-btn-wrap upload'>
                            <Button className="expiryBtn">
                                Upload Documents
                                <Box className='img-input'>
                                    <input type={'file'} onChange={onSelectImageVacination}/>
                                </Box>
                            </Button>

                        </Box>
                    </Box>
                    <Box className='input-item-wrap'>

                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Rabbis Exp Date</InputLabel>
                        <CustomDropdown
                            value={formData.rabiesExpiration}
                            onChange={handleDateChange}

                            icon={dateIcon}
                            name={'rabiesExpiration'}
                            date
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Bordetella Exp Date</InputLabel>
                        <CustomDropdown
                            value={formData.bordetellaExpiration}
                            onChange={handleDateChange}
                            name={'bordetellaExpiration'}

                            icon={dateIcon}
                            date
                        />
                    </Box>
                    <Box className='input-item-wrap'>
                        {/*Date of Birdth*/}
                        <InputLabel>Combo Shot Exp Date</InputLabel>
                        <CustomDropdown
                            value={formData.dhppExpiration}
                            onChange={handleDateChange}
                            icon={dateIcon}
                            name={'dhppExpiration'}
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
                        />
                    </Box>
                </Box>
            </form>
            <ProfileModals open={confirmOpen} type={'dog'} handleActionBtn={handleActionBtn}/>
        </Box>
    )
}
export default DogProfile;