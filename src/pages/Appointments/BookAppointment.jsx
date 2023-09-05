import React, {useEffect, useRef, useState} from "react";
import {Box, InputLabel, Link, TextField, Typography} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton, CustomDropdown} from "../../Components/Common";
import {GetAllPets, GetAllServiceCategories, GetAllTrainersAvailability} from "../../Services/APIs";
import {CalenderDateFormat} from "../../Utils";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;
const categoryOptions = [
    {label: "Enrollments", value: "enrollment"},
    {label: "Appointments", value: "appointment"},

];

export default function BookAppointment({handleNext}) {
    const [selectedOption, setSelectedOption] = useState({
        pets: {},
        serviceName: {},
        fromDate: '',
        categoryName: ""
    });
    const [petsOption, setPetOption] = useState([])
    const [trainerAvailability, setTrainerAvailability] = useState([])
    const [serviceOptions, setServiceOptions] = useState([])
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
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
        GetAllServiceCategories('appointment').then((response) => {
            if (response) {
                const optionList = response.data.Items.map((item) => ({
                    label: item.name,
                    value: item,
                }))
                setServiceOptions(optionList);
            }

        })

    }, [])
    const handleDropdownChange = (name, value) => {
        setSelectedOption({...selectedOption, [name]: value});
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
        setSelectedOption({...selectedOption, [name]: CalenderDateFormat(value) || ''})
        let payload = {
            fromDate: CalenderDateFormat(value)
        }
        if (selectedOption.serviceName) {
            payload.categoryName = selectedOption.serviceName.label || '';
            payload.serviceName = selectedOption.categoryName.value;

        }
        GetAllTrainersAvailability(payload).then((response) => {
            console.log(response.data, "hello response")
            if (response.statusCode === 200) {
                const convertedArray = response.data.map(range => {
                    const listObjects = range.availability.map(value => ({
                        slot: value,
                        active: false
                    }));
                    return {TrainerName: range.TrainerName, availability: listObjects};
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
    const handleSlotClick = (item, slot, index,selectedIndex) => {
        let list = [...trainerAvailability];
        const convertedArray = list.map(range => {
            const listObjects = range.availability.map(value => ({
                slot: value.slot,
                active: false
            }));
            return {TrainerName: range.TrainerName, availability: listObjects};
        });

        convertedArray[selectedIndex].availability[index].active = true;
        setTrainerAvailability(convertedArray)
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
                    />
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
                </Box>
            </Box>
            <Box className='field-section'>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select appointment Type</InputLabel>
                    <CustomDropdown
                        value={selectedOption.serviceName}
                        placeHolder='Select Type'
                        onChange={handleDropdownChange}
                        options={serviceOptions}
                        icon={downArrow}
                        name={'serviceName'}
                    />
                </Box>
                <Box className='appointment-dropdown'>
                    <InputLabel>Select Date</InputLabel>
                    <CustomDropdown
                        value={selectedOption.fromDate}
                        onChange={handleDateChange}
                        name={'fromDate'}
                        icon={dateIcon}
                        date
                    />
                </Box>

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
                                        onClick={() => handleSlotClick(item, subItem.slot, subIndex,index)}
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
                    <TextField value='Add notes (Optional)' className='text-field'/>
                </Box>
                <Box className='appointment-dropdown'>
                    <Box
                        className='drag-drop-box'
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <img src={dragDrop} alt='drag'/>
                        <Typography className='drop-box-text' onClick={handleBoxClick}>
                            <Link className='drop-box-span'>Click to upload</Link>
                            {isDragOver ? "Release to drop" : " or Drag and Drop"}
                        </Typography>
                        {selectedFile && <Typography>{selectedFile.name}</Typography>}
                        <input
                            ref={fileInputRef}
                            type='file'
                            accept='image/*'
                            style={{display: "none"}}
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
                        iconJsx={<ChevronRightIcon/>}
                        fullWidth
                        onClick={handleNext}
                    />
                </Box>
                <Box className='appointment-dropdown'></Box>
            </Box>
        </Box>
    );
}
