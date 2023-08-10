import React from "react";

import { Box, IconButton, Link, Typography } from "@mui/material";
import { CustomButton } from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const videoImg = require("../../assets/images/videoImge.png");
export default function BookingTerms({ handleNext }) {
	return (
		<Box className='confirm-booking-main'>
			<Box className='display-booking-wrap video-main'>
				<Box className='booking-wrap'>
					<Typography className='heading'>Orientation Videos</Typography>
					<Box className='video-wrap'>
						<img src={videoImg} alt='video-img' />
						<IconButton>
							<PlayCircleIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>
			<Box className='booking-notes-wrap book-term'>
				<Box className='booking-notes'>
					<Typography className='heading'>Policy</Typography>
					<Typography className='description'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Repudiandae at quasi aperiam nemo atque maxime. Consequuntur sequi
						ducimus, aspernatur earum dolor maxime dicta nobis tenetur
						repudiandae quis. Sed, a et.
						<Link className='see-more'> See More</Link>
					</Typography>
				</Box>
				<Box className='booking-notes signature-box'>
					
						<Link className='see-more'> Sign Here</Link>
					
				</Box>
				<CustomButton
					className='book-btn'
					title={"Done"}
					color='#fff'
					backgroundColor='#32B2AC'
					iconJsx={<ChevronRightIcon />}
					fullWidth
					onClick={handleNext}
				/>
			</Box>
		</Box>
	);
}
