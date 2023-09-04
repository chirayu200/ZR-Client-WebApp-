import React from "react";
import { CustomButton,  CustomInput } from "../../Components/Common";
import { Box, Container, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Location({ setActive, active }) {
    return (
        <>
            <Container className='appointment-container'>
                <Box className='appointment-header'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => setActive(0)}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>Location</Typography>
                        </Box>

                    </Box>
                </Box>
                <CustomInput
                    type='text'
                    name='Name'
                    placeholder='Change location'
                    fullWidth
                    className='card-input'
                />
                <CustomButton
                    className='book-btn-payment'
                    title={"Set as default"}
                    color='#fff'
                    // disabled={selectedValue !== "payBy"}
                    backgroundColor='#32B2AC'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    sx={{mt:70}}
                // onClick={handleNext}
                />
            </Container>
        </>
    )
}