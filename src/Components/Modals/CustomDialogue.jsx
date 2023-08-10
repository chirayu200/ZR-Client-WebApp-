import * as React from "react";
import {Box, Button} from "@mui/material";
import { CustomButton } from "../Common";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useNavigate } from "react-router-dom";

import { Link, Typography } from "@mui/material";
const back = require("../../assets/images/chevron-up.svg").default;

export const CustomDialogue = ({ open, handleClose, fullWidth, handleNext, type,className }) => {

	const navigate = useNavigate();
	return (
		<>
		<Dialog
					fullWidth={fullWidth}
					maxWidth={fullWidth ? "md" : ""}
					open={open}
					onClose={handleClose}
					className={className}
				>
			{type === "appointment" ?
				<>
					<DialogActions className='dialog-actions'>
						<CustomButton
							className='arrow-btn'
							color='#003087'
							icon={back}
							backgroundColor='#E7EFF9'
							onClick={handleClose}
						/>
						<Typography>what do you have in mind?</Typography>
					</DialogActions>

					<DialogContent>
						<Box className='schedule-section-wrap'>
							<Box className='schedule-section-box'>
								<Box className='schedule-section-action'>
									<CustomButton onClick={handleNext}
										className='action-btn'
										color='#E35205'
										backgroundColor='#FFF'
										title='Explore Schedule'
									/>
									<Typography>Classes, Workshop, Events</Typography>
								</Box>
							</Box>
							<Box className='schedule-section-box'>
								<Box className='schedule-section-action'>
									<CustomButton onClick={() => navigate('/appointment')}
										className='action-btn'
										color='#003087'
										backgroundColor='#FFF'
										title='Book an Appointment'
									/>
									<Typography>Evaluation, Private Gym, Private Training</Typography>
								</Box>
							</Box>
							<Typography className='header-text'>
								Not Sure? <Link className='dialog-link'><span> Send Us a Message</span> </Link>
							</Typography>
						</Box>
					</DialogContent>
					</> :
				


					<DialogContent>
						<Box className="checktext">
						<Typography>Booking Confirmed</Typography>
						<Typography>If this booking consist any product, to receive this bundle you need to visit the store.</Typography>
						</Box>
						<Button onClick={handleNext}
							className='confirmCheckBtn'
							
						>Confirm</Button>
					</DialogContent>
				

			}
			</Dialog>
		</>
	);
};
