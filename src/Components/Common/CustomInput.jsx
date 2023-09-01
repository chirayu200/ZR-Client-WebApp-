import React from "react";
import {
	Checkbox,
	TextField,
	InputLabel,
	InputAdornment,
	IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export const CustomInput = ({
	name,
	label,
	type,
	fullWidth,
	placeholder,
	showPassword,
	onTogglePassword,
	showCheckbox,
	icon,
	...rest
}) => {
	return (
		<>
			{label && <InputLabel>{label}</InputLabel>}
			<TextField
				variant='outlined'
				name={name}
				fullWidth={fullWidth}
				placeholder={placeholder}
				type={type === "password" && showPassword ? "text" : type}
				InputProps={

					type === "password"
						? {
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											edge='end'
											aria-label='toggle password visibility'
											onClick={onTogglePassword}
										>
											{showPassword ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: showCheckbox
						? {
								endAdornment: (
									<Checkbox
										defaultChecked
										disableTouchRipple
										disabled
										indeterminate
										indeterminateIcon={<CheckCircleIcon />}
										icon={<RadioButtonUncheckedIcon />}
									/>
								),
						  }
						: icon
						? {
								endAdornment: <img src={icon} alt='icon' />,
						  }
						: {}
				}
				{...rest}
			/>
		</>
	);
};
