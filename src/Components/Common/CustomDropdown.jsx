import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { CustomButton } from "./CustomButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const CustomDropdown = ({
	value,
	onChange,
	options,
	placeHolder,
	icon,
	date,
}) => {
	const [open, setOpen] = React.useState(false);

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
				<Select
					value={value}
					label={placeHolder}
					onChange={onChange}
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					className='dropdown-select'
					endAdornment={
						<CustomButton
							className='arrow-btn'
							color='#E35205'
							icon={icon}
							onClick={handleOpen}
							backgroundColor='#E7EFF9'
						/>
					}
				>
					{options.map((option, index) => (
						<MenuItem key={index} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</Select>
			)}
		</FormControl>
	);
};

export default CustomDropdown;
