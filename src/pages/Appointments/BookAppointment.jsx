import React, { useState, useRef } from "react";
import { Box, Typography, InputLabel, TextField, Link } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { CustomButton, CustomDropdown } from "../../Components/Common";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const dateIcon = require("../../assets/images/calenderDate.svg").default;
const dragDrop = require("../../assets/images/dragdrop.svg").default;
const options = [
	{ label: "Option 1", value: "option1" },
	{ label: "Option 2", value: "option2" },
	{ label: "Option 3", value: "option3" },
];

export default function BookAppointment({handleNext}) {
	const [selectedOption, setSelectedOption] = useState("");

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
		<Box className='appointment-main'>
			<Box className='field-section'>
				<Box className='appointment-dropdown'>
					<InputLabel>Select your dog</InputLabel>
					<CustomDropdown
						placeHolder='Select your dog'
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={downArrow}
					/>
				</Box>
				<Box className='appointment-dropdown'>
					<InputLabel>Select appointment Type</InputLabel>
					<CustomDropdown
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={downArrow}
					/>
				</Box>
			</Box>
			<Box className='field-section'>
				<Box className='appointment-dropdown'>
					<InputLabel>Select Date</InputLabel>
					<CustomDropdown
						value={selectedOption}
						onChange={handleDropdownChange}
						options={options}
						icon={dateIcon}
						date
					/>
				</Box>
				<Box className='appointment-dropdown'></Box>
			</Box>
			<Box className='field-section'>
				<Box className='appointment-dropdown'>
					<Typography className='available-slots'>Availability</Typography>
					<Box className='slots-wrap'>
						<Typography className='slot-title'>Karen Pryor</Typography>
						<Box className='slots-display'>
							<CustomButton
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots'
							/>
							{/* active */}
							<CustomButton
								// color={'#fff'}
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots active'
							/>
							<CustomButton
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots'
							/>
						</Box>
					</Box>
				</Box>
				<Box className='appointment-dropdown'>
					<Box className='slots-wrap'>
						<Typography className='slot-title'>Karen Pryor</Typography>
						<Box className='slots-display'>
							<CustomButton
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots'
							/>
							<CustomButton
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots'
							/>
							<CustomButton
								color='#003087'
								title={"01:00am - 02:00pm"}
								className='slots'
							/>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className='field-section'>
				<Box className='appointment-dropdown'>
					<InputLabel>Add Notes (Optional)</InputLabel>
					<TextField value='Add notes (Optional)' className='text-field' />
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
                        onClick={handleNext}
					/>
				</Box>
				<Box className='appointment-dropdown'></Box>
			</Box>
		</Box>
	);
}
