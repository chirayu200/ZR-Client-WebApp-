import { Box,  Typography} from "@mui/material";
import React, {useState} from "react";
import { CustomDropdown, CustomInput} from "../../Components/Common";
import {default as searchIcon} from "../../assets/images/searchIcon.svg";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;

const options = [
    {label: "Option 1", value: "option1"},
    {label: "Option 2", value: "option2"},
    {label: "Option 3", value: "option3"},
];
export default function VisitHistory({handleBack}) {
    const [selectedOption, setSelectedOption] = useState("Filters");

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };
    return (
      
            <Box className='explore-main'>
                <Box className='filter-section'>
                    <CustomDropdown
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        options={options}
                        icon={downArrow}
                    />
                    <CustomInput
                        type='text'
                        name='search'
                        value='Search'
                        icon={searchIcon}
                        className='card-input search'
                        placeholder='Search'
                        fullWidth
                    />
                </Box>
                <Box className='history-box'>
                    <Box className='display-booking-wrap'>
                        <Box className='booking-wrap'>
                            <Box className='display-attendee'>
                                <Box className='attendee-header'>
                                    <Typography>Attendee</Typography>
                                    <Typography>Trainer</Typography>
                                </Box>
                                <Box className='attendee-value'>
                                    <Typography>Max</Typography>
                                    <Typography>Karen Pryor</Typography>
                                </Box>
                            </Box>
                            <Box className='attendee-header'>
                                <Box className='attendee-value'>
                                    <Typography className='value-weight'>12 May</Typography>
                                </Box>
                                <Box className='attendee-header with-footer'>
                                    <Typography>
                                        05:30 PM to 6:00 PM (<span>30 Minutes</span>)
                                    </Typography>
                                    <Typography className='checked-in'>Checked In</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='display-booking-wrap'>
                        <Box className='booking-wrap'>
                            <Box className='display-attendee'>
                                <Box className='attendee-header'>
                                    <Typography>Attendee</Typography>
                                    <Typography>Trainer</Typography>
                                </Box>
                                <Box className='attendee-value'>
                                    <Typography>Max</Typography>
                                    <Typography>Karen Pryor</Typography>
                                </Box>
                            </Box>
                            <Box className='attendee-header'>
                                <Box className='attendee-value'>
                                    <Typography className='value-weight'>12 May</Typography>
                                </Box>
                                <Box className='attendee-header with-footer'>
                                    <Typography>
                                        05:30 PM to 6:00 PM (<span>30 Minutes</span>)
                                    </Typography>
                                    <Typography className='cancel'>Cancel</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='display-booking-wrap'>
                        <Box className='booking-wrap'>
                            <Box className='display-attendee'>
                                <Box className='attendee-header'>
                                    <Typography>Attendee</Typography>
                                    <Typography>Trainer</Typography>
                                </Box>
                                <Box className='attendee-value'>
                                    <Typography>Max</Typography>
                                    <Typography>Karen Pryor</Typography>
                                </Box>
                            </Box>
                            <Box className='attendee-header'>
                                <Box className='attendee-value'>
                                    <Typography className='value-weight'>12 May</Typography>
                                </Box>
                                <Box className='attendee-header with-footer'>
                                    <Typography>
                                        05:30 PM to 6:00 PM (<span>30 Minutes</span>)
                                    </Typography>
                                    <Typography className='absent'>Absent</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='display-booking-wrap'>
                        <Box className='booking-wrap'>
                            <Box className='display-attendee'>
                                <Box className='attendee-header'>
                                    <Typography>Attendee</Typography>
                                    <Typography>Trainer</Typography>
                                </Box>
                                <Box className='attendee-value'>
                                    <Typography>Max</Typography>
                                    <Typography>Karen Pryor</Typography>
                                </Box>
                            </Box>
                            <Box className='attendee-header'>
                                <Box className='attendee-value'>
                                    <Typography className='value-weight'>12 May</Typography>
                                </Box>
                                <Box className='attendee-header with-footer'>
                                    <Typography>
                                        05:30 PM to 6:00 PM (<span>30 Minutes</span>)
                                    </Typography>
                                    <Typography className='cancel'>Cancel</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
       
    );
}
