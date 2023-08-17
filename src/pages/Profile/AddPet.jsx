import React, { useState, useRef } from 'react'
import { Typography, Box, Button, Link, InputLabel } from '@mui/material';
import { CustomButton, CustomDropdown, CustomInput } from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
export default function AddPet({ handleNext }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);
    const [stateOptions, setStateOptions] = useState([]);
    const [formData, setFormData] = useState({

        firstName: '',
        lastName: '',
        gender: '',
        breed: '',
        birthDate: ''
    });
    const [errors, setErrors] = useState({});

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
        <Box className="addPetWrap">
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
                        onClick={handleNext}
					/>

            </Box>

        </Box>
    )
}
