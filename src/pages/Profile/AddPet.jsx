import React, { useState, useRef } from 'react'
import {  Box, Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { CustomButton, CustomDropdown, CustomInput } from "../../Components/Common";
import {CustomDialogue} from "../../Components/Modals";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const uploadProfile = require("../../assets/images/uploadProfile.svg").default;
const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },

];
const options = [
	{ label: "Option 1", value: "option1" },
	{ label: "Option 2", value: "option2" },
	{ label: "Option 3", value: "option3" },
];
export default function AddPet({ handleNext,initialState }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [learnDog, setLearnDog] = useState(false);
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        gender: '',
        breed: '',
        birthDate: ''
    });
    const [errors, setErrors] = useState({});
    const [expanded, setExpanded] = React.useState(false);
    const [alignment, setAlignment] = React.useState('Yes');
    const [open, setOpen] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleToggleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
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

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

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
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
        {!learnDog? 
            ( <Box className="addPetWrap">
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
                <Box className='appointment-dropdown'>
					
					<CustomDropdown
                    placeHolder='Date of Birth'
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={dateIcon}
						date
					/>
				</Box>
                <Box className='input-item-wrap'>

                    <CustomDropdown
                        value={formData.location}
                        placeHolder={formData.location || 'Gender'}
                        onChange={handleDropdownChange}
                        options={genderOptions}
                        icon={downArrow}
                        name='gender'
                        error={!!errors.location}
                        helperText={errors.location}
                    />
                </Box>
                <Box className='input-item-wrap'>
                    <CustomInput
                        type='text'

                        name='breed'
                        className='form-inputs'
                        placeholder='Breed'
                        fullWidth
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                </Box>
                <CustomButton
               
						className='book-btn'
						title={"Continue"}
						color='#fff'
						backgroundColor='#32B2AC'
						iconJsx={<ChevronRightIcon />}
						fullWidth
                        onClick={() => setLearnDog(true)}
					/>

            </Box>

        </Box>):
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
                    <Typography >
                        Is your dog afraid of strangers or certain groups of people?
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
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
                    <Typography >
                    Is your dog very possessive about his/her  food or toys? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
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
                    <Typography >
                    Has your dog ever bitten a person or another dog, regardless or injury (not including nipping or play biting)? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
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
                    <Typography >
                    Does your dog bark at other dogs when out on a walk or at you for attention? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
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
                    <Typography >
                    Do you believe your dog is able to skip basic obedience and take advanced classes or agility? 
                    </Typography>

                </AccordionSummary>
                <AccordionDetails>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleToggleChange}
                        aria-label="Platform"
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
               onClick={() => setOpen(true)}
           />
           <CustomDialogue
                type={'profile'}
                open={open}
                className={'checkoutModal'}
                handleClose={() => setOpen(false)}
                fullWidth
                handleNext={() => {

                    setOpen(false)
                }}

            />
        </Box>
        )
            
        }
        </>
       
    )
}
