
import { Box, Typography, Button, Select,MenuItem } from "@mui/material";
import React, { useState } from "react";
import {
	CustomInput, CustomButton
} from "../../Components/Common";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const badges = require("../../assets/images/badges.svg").default;
const hundred = require("../../assets/images/hundred.svg").default;
const gift = require("../../assets/images/gift.svg").default;



export default function Memberships({handleNext}) {

	const [selectedOption, setSelectedOption] = useState("Filters");
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(!open);
	};

	const handleDropdownChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<Box className='membership-main'>
			<Box className='filter-slider-wrap'>
				<Box className='membership-filters'>
				<Select
					label="Available Credits"
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={selectedOption}
					onChange={handleDropdownChange}
					className='dropdown-select'
					endAdornment={
						<CustomButton
							className='arrow-btn'
							color='#E35205'
							icon={downArrow}
							onClick={handleOpen}
							backgroundColor='#E7EFF9'
						/>
					}
				>
					
						<MenuItem className="dropItem">
							<Typography>Class</Typography>
							<Typography>5</Typography>
						</MenuItem>
						<MenuItem className="dropItem">
							<Typography>Appointments</Typography>
							<Typography>5</Typography>
						</MenuItem>
						<MenuItem className="dropItem">
							<Typography>Woerkshops</Typography>
							<Typography>5</Typography>
						</MenuItem>
						<MenuItem className="dropItem">
							<Typography>Store Credit</Typography>
							<Typography>5</Typography>
						</MenuItem>
						<Button className="expiryBtn" >See Expiry Status</Button>
					
				</Select>
					<CustomInput
						type='text'
						name='search'
						value='Search'
						className='card-input'
						placeholder='Search'
						fullWidth
					/>
				</Box>
				<Box className='slider-wrap'>
					<Typography className='heading'>Featured Items</Typography>
					<Box className='slider-section'>
						<Box className='image-section'>
							<img
								src='https://s3-alpha-sig.figma.com/img/58f4/53aa/3ac7189fa8550c36bdf84e8f8d35eafb?Expires=1691971200&Signature=ZiH9YG7e5M3HvehO05CnTmBOZm31WsfOaKmf3UUV-x6Iv7KhCK4lfW1Y0tNhPX68obQxD0dKOniZqWqtSN1vCfj7xdfaVGBY~EOwJJgXRCoi43DWSZUc57Px-KrfM0zuxww5A4qWW82r0mXGsYt0Wmg19W1pjhd1uoefoKT88pc385OZExfEOZHHhq-xfmkoNmQV95M6rE4OhBxejGtH8gkxryf6rT8R~SrRbVTGH4UOiuRiH~3-ZHTpEmNrcz5keUHRtG9gZW8OF1iPVpO479LFn~qOvWhSCl~PsI-YF7gZvGgVcQqRjBB4toPnSyeoBNaBHFSCtE-0X1aUUqg8Jg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
								alt='dog'
							/>
						</Box>
						<Box className='content-section'>
							<Typography className="heading">New Puppy Bundle</Typography>
							<Box>
								<Typography>New Puppy BundleNew Puppy Bundle</Typography>
								<Typography>New Puppy BundleNew Puppy Bundle</Typography>
								<Typography>New Puppy BundleNew Puppy Bundle</Typography>
								<Typography>New Puppy BundleNew Puppy Bundle</Typography>
							</Box>
							<Button onClick={()=> {
								handleNext('Featured Items');


							}}> View Detail </Button>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box className="memberRight">
				<Box className="memBox">
					<Box onClick={() => {
						handleNext('Membership');

					}}>
						<Typography>Memberships</Typography>
						<Typography>Lorem ipsum dolor sit amet. </Typography>
					</Box>
					<img src={badges} alt="badges" />
				</Box>
				<Box className="bundleBox">
                     <Box>
					 <img src={hundred} alt="badges" />
					 <Typography>Purchase Session</Typography>
					 <Typography>Lorem ipsum dolor sit amet. </Typography>
					 </Box>
					 <Box onClick={() => {
						 handleNext('Bundle');

					 }}>
					 <img src={gift} alt="badges" />
					 <Typography>Bundles</Typography>
					 <Typography>Lorem ipsum dolor sit amet. </Typography>
					 </Box>
				</Box>
				<Box className="historyBox">

					 <Typography>Purchase History</Typography>
					 <Typography>Lorem ipsum dolor sit amet. </Typography>
					 </Box>
			</Box>
		</Box>
	);
}
