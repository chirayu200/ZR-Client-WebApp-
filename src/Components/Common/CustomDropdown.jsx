import React, { useState } from "react";
import { Autocomplete, Backdrop, FormControl, FormHelperText, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { CustomButton } from "./CustomButton";
import dayjs from 'dayjs';

export const CustomDropdown = ({
    value,
    onChange,
    options = [],
    placeHolder,
    icon = null,
    date = false,
    name,
    error,
    helperText,
    disablePortal,
    freeSolo
}) => {
    const [open, setOpen] = useState(false);
    // const formattedValue = dayjs(value).format('MM-DD-YYYY');

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleChange = (_, newValue) => {
        onChange(name, newValue);
    };

    const handleDateChange = (newValue) => {
        onChange(name, newValue);
    };

    // const dateArr = {
    //     Su: "SUN",
    //     Mo: "MON",
    //     Tu: "TUE",
    //     We: "WED",
    //     Th: "THU",
    //     Fr: "FRI",
    //     Sa: "SAT",

    // }



    return (
        <>
            <FormControl className='custom-select' fullWidth>
                {date ? (
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            format={'MM-DD-YYYY'}
                            className="custom-date-select"
                            onChange={handleDateChange}
                            value={dayjs(value)}
                            // dayOfWeekFormatter={(day) => dateArr[day]}
                        // value={formattedValue}
                        // dayOfWeekFormatter={(day) => {
                        //     console.log(day);
                        //     return day.slice(0, 3).toUpperCase()
                        // }}
                        />
                    </LocalizationProvider>
                ) : (
                    <Autocomplete
                        className='dropdown-select'
                        value={value || ''}
                        disablePortal={false}
                        freeSolo={false}
                        onChange={handleChange}
                        open={open}
                        name={name}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        options={options}
                        isOptionEqualToValue={(option, value) => option.label === value}
                        getOptionLabel={(option) => option?.label || placeHolder}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment:
                                        <CustomButton
                                            className='arrow-btn'
                                            color='#E35205'
                                            icon={icon}
                                            onClick={handleOpen}
                                            backgroundColor='#E7EFF9'
                                        />

                                }}
                                variant="outlined"
                            />
                        )}
                    />
                )}

                <Backdrop open={open} style={{ zIndex: 1, background: '#00308780' }} />

            </FormControl>

            {error && <FormHelperText className={'Mui-error'}>{helperText}</FormHelperText>}</>
    );
};

export default CustomDropdown;
