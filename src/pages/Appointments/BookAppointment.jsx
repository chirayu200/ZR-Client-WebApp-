import React, { useEffect, useRef, useState } from "react";
import { Box, InputLabel, FormHelperText, Link, TextField, Typography } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CustomButton, CustomDropdown } from "../../Components/Common";
import { GetAllPets, getServiceCategories, GetAllTrainersAvailability, getAllRooms, getServiceByCategory } from "../../Services/APIs";
import { CalenderDateFormat } from "../../Utils";
import { GetCategory, getAllService } from "../../Services/APIs/checkout";
import { FlashOnRounded } from "@mui/icons-material";
import { getLocalData } from "../../Utils";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;
// const categoryOptions = [
//     {label: "Enrollments", value: "enrollment"},
//     {label: "Appointments", value: "appointment"},

// ];



export default function BookAppointment({ handleNext, setServiceId }) {

    const locationId = encodeURIComponent(getLocalData('locationId'));

    const [selectedOption, setSelectedOption] = useState({
        dog: {},
        serviceName: {},
        fromDate: '',
        sortKey: "",
        categoryName:{},
        roomName: ""
    });

    const [petsOption, setPetOption] = useState([])
    const [trainerAvailability, setTrainerAvailability] = useState([])
    const [serviceOptions, setServiceOptions] = useState([])
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [roomOptions, setRoomOptions] = useState([]);
    const [notes, setNotes] = useState('');

    const [formDataError, setFormDataError] = useState({
        dog:'',
        categoryName:'',
        serviceName:'',
        roomName:'',
        fromDate:'',
    })


  

// Check if either 'dog' or 'categoryName' has an error
const anyOfTheFieldsHaveError = !!formDataError.dog || !!formDataError.categoryName;

    console.log(anyOfTheFieldsHaveError)
    console.log(formDataError.dog);
    useEffect(() => {
        const storedSelectedOption = JSON.parse(localStorage.getItem("selectedOption")) || {
            dog: {},
            serviceName: {},
            fromDate: '',
            sortKey: "",
            categoryName: {},
            roomName: ""
        };

        setSelectedOption(storedSelectedOption);
    }, []);

    // Save selectedOption to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem("selectedOption", JSON.stringify(selectedOption));
        
    }, [selectedOption]);


    useEffect(() => {
        GetAllPets().then((response) => {
            if (response) {
                const optionList = response.data.Items.map((item) => ({
                    label: `${item.firstName || ''} ${item.lastName || ''}`,
                    value: item,
                }))
                setPetOption(optionList);
            }

        })

        getServiceCategories('appointment').then((response) => {
            if (response) {
                console.log(response);
                const optionList = response.data.Items.map((item) => ({
                    label: `${item.name}`,
                    value: item,
                }))
                setCategoryOptions(optionList);
            }
        })

        getAllRooms().then((response) => {
            console.log("Response is as follows-->", response);
            if (response) {
                const optionList = response.data.Items.map((item) => ({
                    label: item.name,
                    value: item,
                }))
                setRoomOptions(optionList);
            }
        })


    }, [])
    const handleDropdownChange = (name, value) => {
        setSelectedOption({ ...selectedOption, [name]: value });
        setFormDataError((prevErrors) => ({
            ...prevErrors,
            [name]: " "
        }));
        
        alert(formDataError.dog);
        console.log(value);

        // setCategoryId(value.value.sortKey);
        if (name === 'categoryName') {
            let categoryId = value.value.sortKey
            getServiceByCategory(categoryId).then((response) => {
                if (response) {
                    const optionList = response.data.Items.map((item) => ({
                        label: item.categoryName,
                        value: item,
                    }))
                    setServiceOptions(optionList);
                }

            })
        }
        // setServiceId(value.value.serviceId)
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
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    const handleBoxClick = () => {
        fileInputRef.current.click();
    };
    const handleDateChange = (name, value) => {
       
        setSelectedOption({ ...selectedOption, [name]: CalenderDateFormat(value) || '' })
        let payload = {
            locationId:locationId,
            fromDate: CalenderDateFormat(value)
        }
        if (selectedOption.serviceName) {
            payload.categoryName = selectedOption.serviceName.label || '';
            payload.serviceName = selectedOption.categoryName.value.name;

        }
        GetAllTrainersAvailability(payload).then((response) => {

            console.log(response.data, "hello response")
            if (response.statusCode === 200) {
                const convertedArray = response.data.Items.map(range => {
                    const listObjects = range.availability.map(value => ({
                        slot: value,
                        active: false
                    }));
                    return { TrainerName: range.TrainerName, availability: listObjects };
                });

                console.log(convertedArray, "updated");
                setTrainerAvailability(convertedArray);
            }

        })
    }
    console.log(trainerAvailability, "trainer");

    const formatTimeRange = (timeRange) => {
        const [start, end] = timeRange
            .slice(1, -1) // Remove parentheses
            .split('-')
            .map(time => {
                const [hour, minute] = time.split(':');
                const parsedHour = parseInt(hour, 10);
                const adjustedHour = parsedHour === 0 ? 12 : (parsedHour > 12 ? parsedHour - 12 : parsedHour);
                return new Date(0, 0, 0, adjustedHour, parseInt(minute, 10));
            });

        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true, // Use AM/PM format
        };

        const formattedStart = start.toLocaleTimeString([], options);
        const formattedEnd = end.toLocaleTimeString([], options);

        return `${formattedStart} - ${formattedEnd}`;
    };
    const handleSlotClick = (item, slot, index, selectedIndex) => {
        let list = [...trainerAvailability];
        const convertedArray = list.map(range => {
            const listObjects = range.availability.map(value => ({
                slot: value.slot,
                active: false
            }));
            return { TrainerName: range.TrainerName, availability: listObjects };
        });

        convertedArray[selectedIndex].availability[index].active = true;
        setTrainerAvailability(convertedArray)
    }

    const handleNotes = (event) => {
        const { value } = event.target
        setNotes(value);
    }
    const validateForm = () => {
        
        let hasErrors = false;
        if (Object.keys(selectedOption.dog).length === 0) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                dog: "Select dog"
            }));
            hasErrors = true;
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                dog:''
            }));
        }
        if (Object.keys(selectedOption.categoryName).length === 0) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                categoryName: "Select category"
            }));
            hasErrors = true;
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                categoryName:''
            }));
        }
        if (Object.keys(selectedOption.serviceName).length === 0) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                serviceName: "Select service"
            }));
            hasErrors = true;
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                serviceName:''
            }));
        }
        if (!selectedOption.roomName) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                roomName: "Select room"
            }));
            hasErrors = true;
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                roomName:''
            }));
        }
        if (!selectedOption.fromDate) {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                fromDate: "Select date"
            }));

            hasErrors = true;
        } else {
            setFormDataError((prevErrors) => ({
                ...prevErrors,
                fromDate:''
            }));
        }
        if(trainerAvailability.length ===0){
            alert("No trainer is availiable");
            hasErrors = true;
        }
        else{

        }
                return  !hasErrors
    }

    const bookAppointment = () =>{
       
        let valid=validateForm();
        if(!valid){
            // handleNext();
        } 
        else{
            handleNext();
        }
    }

   
    return (
        <Box className='appointment-main'>
            <Box className='field-section'>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select your dog</InputLabel>
                    <CustomDropdown
                        placeHolder='Select your dog'
                        value={selectedOption.dog}
                        onChange={handleDropdownChange}
                        name={'dog'}
                        options={petsOption}
                        icon={downArrow}
                        // error={!!formDataError.dog}
                        // helperText={formDataError.dog}
                    />
                    <FormHelperText className="error-text mt-10">{formDataError.dog}</FormHelperText>
                </Box>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select Category</InputLabel>
                    <CustomDropdown
                        value={selectedOption.categoryName}
                        placeHolder='Select Category'
                        onChange={handleDropdownChange}
                        options={categoryOptions}
                        icon={downArrow}
                        name={'categoryName'}

                    />
                    <FormHelperText className="error-text mt-10">{formDataError.categoryName}</FormHelperText>
                </Box>
            </Box>
            <Box className={`field-section ${formDataError.dog !== '' ? 'mt-15' : ''}`}>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select Service</InputLabel>
                    <CustomDropdown
                        value={selectedOption.serviceName}
                        placeHolder='Select Type'
                        onChange={handleDropdownChange}
                        options={serviceOptions}
                        icon={downArrow}
                        name={'serviceName'}
                    />
                    <FormHelperText className="error-text mt-10">{formDataError.serviceName}</FormHelperText>
                </Box>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select Room</InputLabel>
                    <CustomDropdown
                        value={selectedOption.roomName}
                        placeHolder='Select Type'
                        onChange={handleDropdownChange}
                        options={roomOptions}
                        icon={downArrow}
                        name={'roomName'}
                    />
                    <FormHelperText className="error-text mt-10">{formDataError.roomName}</FormHelperText>
                </Box>


            </Box>
            <Box className='field-section'>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select Date</InputLabel>
                    <CustomDropdown
                    value={selectedOption.fromDate}
                    onChange={handleDateChange}
                    name={'fromDate'}
                    icon={dateIcon}
                    date

                    />
                    <FormHelperText className="error-text mt-10">{formDataError.fromDate}</FormHelperText>
                </Box>
                <Box className='appointment-dropdown'></Box>

            </Box>

            {trainerAvailability.length > 0 && <Typography className='available-slots'>Availability</Typography>}
            {trainerAvailability.length > 0 && <Box className='field-section'>
                {trainerAvailability.map((item, index) => (
                    <Box className='appointment-dropdown'>
                        <Box className='slots-wrap' key={index}>
                            <Typography className='slot-title'>{item.TrainerName}</Typography>
                            <Box className='slots-display'>
                                {item?.availability?.map((subItem, subIndex) => (
                                    <CustomButton
                                        color='#003087'
                                        title={formatTimeRange(subItem.slot)}
                                        onClick={() => handleSlotClick(item, subItem.slot, subIndex, index)}
                                        className={`slots ${subItem.active && 'active'}`}
                                    />
                                ))}

                                {/* active */}
                                {/*<CustomButton*/}
                                {/*    color='#003087'*/}
                                {/*    title={"01:00am - 02:00pm"}*/}
                                {/*    className='slots active'*/}
                                {/*/>*/}

                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>}

            <Box className='field-section'>
                <Box className='appointment-dropdown'>
                    <InputLabel>Add Notes (Optional)</InputLabel>
                    <TextField value={notes} placeholder="Add notes(Optional)" className='text-field' onChange={handleNotes} />
                </Box>
                <Box className='appointment-dropdown'>
                    <Box
                        className='drag-drop-box'
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <img src={dragDrop} alt='drag' />
                        <Typography className='drop-box-text' onClick={handleBoxClick}>
                            <Link className='drop-box-span'>Click to upload</Link>
                            {isDragOver ? "Release to drop" : " or Drag and Drop"}
                        </Typography>
                        {selectedFile && <Typography>{selectedFile.name}</Typography>}
                        <input
                            ref={fileInputRef}
                            type='file'
                            accept='image/*'
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                    </Box>
                </Box>
            </Box>
            <Box className='field-section'>
                <Box className='appointment-dropdown'>
                    <CustomButton
                        className='book-btn'
                        title={"Book"}
                        color='#fff'
                        backgroundColor='#32B2AC'
                        iconJsx={<ChevronRightIcon />}
                        fullWidth
                        onClick={bookAppointment}
                    />
                </Box>
                <Box className='appointment-dropdown'></Box>
            </Box>
        </Box>
    );
}
