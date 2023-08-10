import React from "react";
import { Typography, Box, Link } from "@mui/material";
import { CustomButton } from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
const success = require("../../assets/images/successTickFilled.svg").default;
export default function BookingSuccess({ handleBack }) {
	const navigate = useNavigate();
	return (
		<Box className='booking-success'>
			<Box className='password-success'>
				<img src={success} alt='success' />

				<Typography variant='body1' className='forgot-description'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</Typography>
				<CustomButton
					className='book-btn'
					title={"Book Another"}
					color='#fff'
					backgroundColor='#32B2AC'
					iconJsx={<ChevronRightIcon />}
					fullWidth
					onClick={handleBack}
				/>
				<Link className='link-line' onClick={() => navigate("/")}>
					Back to Home
				</Link>
			</Box>
		</Box>
	);
}
