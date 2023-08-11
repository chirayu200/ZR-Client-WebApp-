import React from "react";
import {Autocomplete, FormControl, FormHelperText, TextField} from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {CustomButton} from "./CustomButton";

export const CustomDropdown = ({
                                   value,
                                   onChange,
                                   options,
                                   placeHolder,
                                   icon,
                                   date,
                                   error,
                                   helperText
                               }) => {
    const [open, setOpen] = React.useState(false);
    console.log(value, "value", options);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <FormControl className='custom-select' fullWidth>
            {date ? (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        className="custom-date-select"
                    />
                </LocalizationProvider>
            ) : (
                <Autocomplete
                    className='dropdown-select'
                    value={value}
                    onChange={onChange}
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    placeholder={placeHolder}
                    options={options ?? []}
                    getOptionLabel={(option) => option?.label}
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
                //     <Select
                //     value={value}
                //     onChange={onChange}
                //     open={open}
                //     onClose={handleClose}
                //     onOpen={handleOpen}
                //     inputProps={{'aria-label': 'Without label'}}
                //     className='dropdown-select'
                //     endAdornment={
                //     <CustomButton
                //     className='arrow-btn'
                //     color='#E35205'
                //     icon={icon}
                //     onClick={handleOpen}
                //     backgroundColor='#E7EFF9'
                //     />
                // }
                //     >
                //     <MenuItem disabled value={placeHolder}>
                // {placeHolder}
                //     </MenuItem>
                // {options.map((option, index) => (
                //     <MenuItem key={index} value={option.value}>
                // {option.label}
                //     </MenuItem>
                //     ))}
                //     </Select>

            )}
            {error && <FormHelperText>{helperText}</FormHelperText>}
        </FormControl>
    );
};

export default CustomDropdown;
