import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { CustomButton } from "../../Components/Common";

const logo = require("../../assets/images/logo.svg").default;
const SplashScreen = ({ handleNext }) => {


	return (
		<Container className='splash-container'>
			<Box className='typo-logo'>
				<img src={logo} alt='ZR Logo' className='splash-logo' />

				<Typography>We Don't Train Dogs.</Typography>
				<Typography>We Train The People Who Love Them.</Typography>
			</Box>
			<Box className='splash-btn' >
				<CustomButton
					title='GET STARTED'
					onClick={handleNext}
					backgroundColor='#003087'
				/>

				{/* Roadblock - Based on discussion hiding button */}
				{/* <CustomButton
					title='EXPLORE AS GUEST'
					onClick={handleNext}
					color='#003087'
					disabled
				/> */}
			</Box>
		</Container>
	);
};

export default SplashScreen;
