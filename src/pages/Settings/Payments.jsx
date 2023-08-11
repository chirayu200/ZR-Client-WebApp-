import React from "react";
import { CustomButton, CustomInput } from "../../Components/Common";
import { Box, Container, Typography, Checkbox, Link } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const visaCard = require("../../assets/images/visaCard.svg").default;
const paymentMethod = require("../../assets/images/PaymentMethodIcon.png") 

export default function Payments({setActive,active}) {
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
                                onClick={() =>setActive(0)}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>Payments</Typography>
                        </Box>

                    </Box>
                </Box>
                <Box className='card-detail-wrap' sx={{mt:5}}>
                    <Box className='card-detail'>
                        <Typography className='header-text-blue font-weight-700 f-16'> Enter your card detail</Typography>
                        <Box className='input-section'>
                            <CustomInput
                                type='text'
                                name='Name'
                                placeholder='Name On the Card'
                                fullWidth
                                className='card-input'
                            />
                            <CustomInput
                                type='text'
                                name='monthYear'
                                placeholder='MM/YY'
                                // value={value}
                                className='card-input'
                            // onChange={handleInputChange}
                            />
                        </Box>
                        <Box className='input-section'>
                            <CustomInput
                                type='number'
                                name='number'
                                placeholder='Card Number'
                                className='card-input'
                                fullWidth
                                // icon={paymentMethod}
                            />
                            <CustomInput
                                type='number'
                                name='cvv'
                                className='card-input'
                                placeholder='CVV'
                            />
                        </Box>
                        <Box className='save-card'>
                            <Checkbox checked />
                            <Typography className="header-text-black font-weight-400 f-14">Save card for future use</Typography>
                        </Box>
                        <CustomButton
                            className='book-btn-payment'
                            title={"Add new card"}
                            color='#fff'
                            // disabled={selectedValue !== "payBy"}
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon />}
                            fullWidth
                            // onClick={handleNext}
                        />
                    </Box>
                    <Box className='appointment-dropdown' sx={{mt:1}}>
                        <Typography className='header-text-blue font-weight-700 f-16'>Saved Card</Typography>
                        <Box className='slots-wrap card-list-detail-wrap height-100'>
                            <Box className=''>
                                <img src={visaCard} alt='visa card' />
                            </Box>
                            <Box className='card-list-detail'>
                                <Box className='card-list-section'>
                                    <Box>
                                        <Typography className='header-text-black font-weight-400 f-14 line-height-19'>
                                            Visa ending in 1234
                                        </Typography>
                                        <Typography className='sub-heading'>
                                            Expiry 06/2024
                                        </Typography>
                                    </Box>
                                    <Box className='color-btn-wrap'>
                                        <Link className='gray-btn'>Set as default</Link>
                                        <Link className='blue-btn'>Edit</Link>
                                        <Link className='red-btn'>Remove</Link>
                                    </Box>
                                </Box>
                                {/* <Checkbox
                                    checked
                                    indeterminate
                                    indeterminateIcon={<CheckCircleIcon />}
                                    icon={<RadioButtonUncheckedIcon />}
                                /> */}
                            </Box>
                        </Box>
                        <Box className='appointment-dropdown' sx={{mt:3}}>
                            <Box className='slots-wrap card-list-detail-wrap height-100'>
                                <Box className=''>
                                    <img src={paymentMethod} alt='visa card' />
                                </Box>
                                <Box className='card-list-detail'>
                                    <Box className='card-list-section'>
                                        <Box>
                                            <Typography className='header-text-black font-weight-400 f-14 line-height-19'>
                                            Mastercard ending in 1234
                                            </Typography>
                                            <Typography className='sub-heading'>
                                                Expiry 06/2024
                                            </Typography>
                                        </Box>
                                        <Box className='color-btn-wrap'>
                                            <Link className='gray-btn'>Set as default</Link>
                                            <Link className='blue-btn'>Edit</Link>
                                            <Link className='red-btn'>Remove</Link>
                                        </Box>
                                    </Box>
                                    {/* <Checkbox
                                        checked
                                        indeterminate
                                        indeterminateIcon={<CheckCircleIcon />}
                                        icon={<RadioButtonUncheckedIcon />}
                                    /> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Container>

        </>
    )
}