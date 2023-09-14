import React,{useState,useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { CustomButton } from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function ConfirmBooking({handleNext}) {
	const [selectedOption, setSelectedOption] = useState({
        dog: {},
        serviceName: {},
        fromDate: '',
        sortKey: "",
        categoryName:{},
        roomName: ""
    });

	useEffect(() => {
        const storedSelectedOption = JSON.parse(localStorage.getItem("selectedOption")) || {
            dog: {},
            serviceName: {},
            fromDate: '',
            sortKey: "",
            categoryName: {},
            roomName: ""
        };
			console.log("Option of selected form is as follows------->",storedSelectedOption.dog.label);
           setSelectedOption(storedSelectedOption);
    }, []);
	return (
		<Box className='confirm-booking-main'>
			<Box className='display-booking-wrap'>
				<Box className='booking-wrap'>
					<Box className='display-attendee'>
						<Box className='attendee-header'>
							<Typography>Attendee</Typography>
							<Typography>Trainer</Typography>
						</Box>
						<Box className='attendee-value'>
							<Typography>{selectedOption.dog.label}</Typography>
							<Typography>Karen Pryor</Typography>
						</Box>
					</Box>
					<Box className='attendee-header'>
						<Typography>Booking Time & Date</Typography>
						<Box className='attendee-value'>
							<Typography className='value-weight'>May 4</Typography>
						</Box>
					</Box>
					<Box className='attendee-header'>
						<Typography>
							05:30 PM to 6:00 PM (<span>30 Minutes</span>)
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box className='booking-notes-wrap'>
				<Box className='booking-notes'>
					<Typography className='heading'>Notes</Typography>
					<Typography className='description'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Repudiandae at quasi aperiam nemo atque maxime. Consequuntur sequi
						ducimus, aspernatur earum dolor maxime dicta nobis tenetur
						repudiandae quis. Sed, a et.
					</Typography>
				</Box>
				<CustomButton
					className='book-btn'
					title={"Confirm"}
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
