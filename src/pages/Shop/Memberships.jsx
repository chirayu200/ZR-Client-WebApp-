
import { Box, CircularProgress, Typography, Button, Select, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import React, { useState, useEffect } from "react";
import {
	CustomInput, CustomButton
} from "../../Components/Common";

import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { default as searchIcon } from "../../assets/images/searchIcon.svg";
import { GetAllFeaturedItems } from "../../Services/APIs";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const badges = require("../../assets/images/badges.svg").default;
const hundred = require("../../assets/images/hundred.svg").default;
const gift = require("../../assets/images/gift.svg").default;

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


export default function Memberships({ handleNext, clientDetail }) {

	const [selectedOption, setSelectedOption] = useState("Filters");
	const [open, setOpen] = React.useState(false);
	const [activeStep, setActiveStep] = React.useState(0);
	const [featureItem, setFeatureItem] = useState([]);
	const [loader, setLoader] = useState(true)
	const images = [
		{
			label: 'San Francisco – Oakland Bay Bridge, United States',
			imgPath:
				'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
		},
		{
			label: 'Bird',
			imgPath:
				'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
		},
		{
			label: 'Bali, Indonesia',
			imgPath:
				'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
		},

	];
	const maxSteps = images.length;

	useEffect(() => {

		GetAllFeaturedItems().then((response) => {

			const data = response.data.Items.map(item => ({
				list: item.benefits,
				...item
			}))
			setFeatureItem(data);
			setLoader(false)
		})
		


	}, [])


	const handleStepChange = (step) => {
		setActiveStep(step);
	};
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
		<>
		{loader ? <Box className='loader'> <CircularProgress size={60}/> </Box> :
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
						icon={searchIcon}
						className='card-input search'
						placeholder='Search'
						fullWidth
					/>
				</Box>
				<Box className='slider-wrap'>
					<Typography className='heading'>Featured Items</Typography>
					<AutoPlaySwipeableViews
						index={activeStep}
						onChangeIndex={handleStepChange}
						enableMouseEvents
						autoplay={true}
					>
						{featureItem && featureItem.map((item, index) => (



							<Box className='slider-section' key={index}>
								<Box className='image-section'>
									{item.featuredImage ? <img
										src={item.featuredImage} alt='dog'
									/> :

										<img
											src='https://s3-alpha-sig.figma.com/img/58f4/53aa/3ac7189fa8550c36bdf84e8f8d35eafb?Expires=1693180800&Signature=JH-3dYnVldbSqUtM~LlJ56gJPQd-w-VzUrz~bsKoTIfQZ8xkhv2nTIIrbhiMzpbrHxuFRyiyId7Ur6Are6HP29MwBsAM5GiicK~LvGemKfwA1evGBCd28Q4EeKg1HxMa~r8SrQKyABuQZCmG7YNUYr~VbkUmL27hbxwWBNGJS66R1ePdDoK6-q2JaHRZD6YvyD9rljQWUSsQ5cBGoLaGYnzE1ixoIatv5SmTBVRlKrjvluT6nUFfTEDtCgOxmGJZacx1vgU1O90lbWe5PmEFnGjTXIPhhMfjN5ImLrEukCWomw9z7cemXeYVPp~YbPtRk40HaXomdEpHhzR7cb0jCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
											alt='dog'
										/>
									}

								</Box>
								<Box className='content-section'>
									<Typography className="heading">{item.title}</Typography>
									<Box>
										<Typography>{item.description}</Typography>

									</Box>
									<Button onClick={() => {
										handleNext('Featured Items');
									}}> View Detail </Button>
								</Box>
							</Box>


						))}
					</AutoPlaySwipeableViews>
					<MobileStepper
						steps={featureItem.length}
						position="static"
						activeStep={activeStep}
					/>

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
				<Box className="historyBox" onClick={() => {
						handleNext('History', clientDetail);

					}}>
					
					<Typography>Purchase History</Typography>
					<Typography>Lorem ipsum dolor sit amet. </Typography>
					
					
				</Box>
			</Box>
		</Box>
}
</>
	);
}
