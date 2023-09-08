import React, { useEffect, useRef, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { CustomButton, CustomDropdown, CustomInput } from "../../Components/Common";
import { CustomDialogue } from "../../Components/Modals";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { dateFormat } from "../../Utils";
import { getLocalData } from "../../Utils";

const uploadProfile = require("../../assets/images/uploadProfile.svg").default;
const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";

const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },

];

const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
];
export default function AddPet({  initialState, handleNext }) {
    const clientId=getLocalData('clientId');
    // const encodedClientId = encodeURIComponent(clientId);
    const [selectedOption, setSelectedOption] = useState("");
    const [learnDog, setLearnDog] = useState(false);
    const [completeObj, setCompleteObj] = useState({
        orientation: 'No',
        evaluation: 'No',
        agility: 'No',
        tricks: 'No'
    })
    const [formData, setFormData] = useState({
        clientId:'',
        profileImage: '',
        firstName: '',
        lastName: '',
        gender: '',
        breed: '',
        birthDate: '',
        strangers: '',
        possessive: '',
        biting: '',
        barking: '',
        advanced: '',
        completed: {
            orientation: 'No',
            evaluation: 'No',
            agility: 'No',
            tricks: 'No'
        },
        acquisitionSource: 'Breeder',
        notes: "notes",
        veterinarian: true,
        allergies: "Yes",
        social: "Yes",
        rabiesExpiration: "",
        bordetellaExpiration: "",
        dhppExpiration: "",
        createdBy: "1000",
        status: 1,
    });

    const [errors, setErrors] = useState({
        firstName:''
    });
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    useEffect(() => {
       if (initialState) {
          console.log("Client ID is-->",clientId)
           setFormData({ ...formData,  clientId: clientId || '' })
        }

    }, [initialState])
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleToggleChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
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

    const handleDropdownChange = (name, value) => {
        setFormData({ ...formData, [name]: value?.label || '' })
        if (errors[name]) {
            setErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }

    };

    const handleDateChange = (name, value) => {
        setFormData({ ...formData, [name]: dateFormat(value) || '' })
        if (errors[name]) {
            setErrors((prevFormErrors) => ({
                ...prevFormErrors,
                [name]: "",
            }));
        }

    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragOver(false);

        const file = event.dataTransfer.files[0];
        setSelectedFile(file);
    };
    const handleFileChange = (event) => {
        console.log('clickedd');
        const file = event.target.files[0];
        const showImg = URL.createObjectURL(event.target.files[0])
        setSelectedFile(showImg);
        console.log("file", file);
        setFormData({ ...formData, profileImage: file || '' })
    };
    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.firstName?.trim()) {
            errors.firstName = "First Name is required"
        }
        if (!formData.lastName?.trim()) {
            errors.lastName = "Last Name is required";
        }
        if (!formData.breed?.trim()) {
            errors.breed = "Breed is required";
        }
        if (!formData.birthDate?.trim()) {
            errors.birthDate = "Birth date is required";
        }
        if (!formData.gender?.trim()) {
            errors.gender = "Gender is required";
        } 
       
        return errors;
    };

    const validateStepOne = () =>{
        let errors=validateForm();
        if(Object.keys(errors).length === 0){
            setLearnDog(true);
            
        }
        else{
            setLearnDog(false);
            setErrors(errors)
        }
    }

    return (
        <>
            {!learnDog ?
                (<Box className="addPetWrap">
                    <Box>

                    <Box
                            onClick={handleBoxClick}
                            className='profileUpload'
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <img src={uploadProfile} alt='drag' />
                            {selectedFile ?
                                <img src={selectedFile} alt={'dog-img'} className='profileImg' />
                                :
                                <img src={petPlaceholder} alt='dog' />}

                            <input
                                ref={fileInputRef}
                                type='file'
                                accept='image/*'
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                            />
                        </Box>



                    </Box>
                    <Box>
                        <Box className='input-item-wrap'>
                            <CustomInput
                                type='text'
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

                            <CustomDropdown
                                placeHolder={'Date of Birth'}                              
                                value={formData.birthDate}
                                onChange={handleDateChange}
                                icon={dateIcon}
                                name='birthDate'
                                date
                                error={!!errors.birthDate}
                                helperText={errors.birthDate}
                            />
                        </Box>
                        <Box className='input-item-wrap'>

                            <CustomDropdown
                                value={formData.gender}
                                placeHolder={formData.gender || 'Gender'}
                                onChange={handleDropdownChange}
                                options={genderOptions}
                                icon={downArrow}
                                name='gender'
                                error={!!errors.gender}
                                helperText={errors.gender}
                            />
                        </Box>
                        <Box className='input-item-wrap'>
                            <CustomInput
                                type='text'

                                name='breed'
                                className='form-inputs'
                                placeholder='Breed'
                                fullWidth
                                value={formData.breed}
                                onChange={handleInputChange}
                                error={!!errors.breed}
                                helperText={errors.breed}
                            />
                        </Box>
                        <CustomButton

                            className='book-btn'
                            title={"Continue"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon />}
                            fullWidth
                            onClick={() => validateStepOne()}
                        />

                    </Box>

                </Box>) :
                (
                    <Box className="learnDogScreen">
                        <Typography>Tell Us About Your Dog</Typography>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                < HelpOutlineIcon />
                                <Typography>
                                    Is your dog afraid of strangers or certain groups of people?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={formData.strangers}
                                    exclusive
                                    onChange={(e) => handleToggleChange('strangers', e.target.value)}
                                    aria-label="Platform"
                                    name="strangers"
                                >
                                    <ToggleButton value="Yes">Yes</ToggleButton>
                                    <ToggleButton value="No">No</ToggleButton>

                                </ToggleButtonGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                < HelpOutlineIcon />
                                <Typography>
                                    Is your dog very possessive about his/her food or toys?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={formData.possessive}
                                    exclusive
                                    onChange={(e) => handleToggleChange('possessive', e.target.value)}
                                    aria-label="Platform"
                                    name="possessive"
                                >
                                    <ToggleButton value="Yes">Yes</ToggleButton>
                                    <ToggleButton value="No">No</ToggleButton>

                                </ToggleButtonGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                < HelpOutlineIcon />
                                <Typography>
                                    Has your dog ever bitten a person or another dog, regardless or injury (not
                                    including nipping or play biting)?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={formData.biting}
                                    exclusive
                                    onChange={(e) => handleToggleChange('biting', e.target.value)}
                                    aria-label="Platform"
                                    name="biting"
                                >
                                    <ToggleButton value="Yes">Yes</ToggleButton>
                                    <ToggleButton value="No">No</ToggleButton>

                                </ToggleButtonGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                < HelpOutlineIcon />
                                <Typography>
                                    Does your dog bark at other dogs when out on a walk or at you for attention?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={formData.barking}
                                    exclusive
                                    onChange={(e) => handleToggleChange('barking', e.target.value)}
                                    aria-label="Platform"
                                    name="barking"
                                >
                                    <ToggleButton value="Yes">Yes</ToggleButton>
                                    <ToggleButton value="No">No</ToggleButton>

                                </ToggleButtonGroup>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                < HelpOutlineIcon />
                                <Typography>
                                    Do you believe your dog is able to skip basic obedience and take advanced classes or
                                    agility?
                                </Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <ToggleButtonGroup
                                    color="primary"
                                    value={formData.advanced}
                                    exclusive
                                    onChange={(e) => handleToggleChange('advanced', e.target.value)}
                                    aria-label="Platform"
                                    name="advanced"
                                >
                                    <ToggleButton value="Yes">Yes</ToggleButton>
                                    <ToggleButton value="No">No</ToggleButton>

                                </ToggleButtonGroup>
                            </AccordionDetails>
                        </Accordion>
                        <CustomButton

                            className='book-btn'
                            title={"Continue"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon />}
                            fullWidth
                            onClick={() => {

                                setOpen(true)
                            }}
                        />
                        
                    </Box>
                )

            }
            <CustomDialogue
                            type={'profile'}
                            open={open}
                            data={formData}
                            setErrors={setErrors}
                            initialState={initialState}
                            className={'checkoutModal'}
                            reloadPage={handleNext}
                            handleClose={() => setOpen(false)}
                            fullWidth
                            handleNext={() => {

                                setOpen(false)
                            }}

                        />
        </>

    )
}
