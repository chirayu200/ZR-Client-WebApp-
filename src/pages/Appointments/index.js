import React, {useState} from "react";
import {Box, Container, Typography} from "@mui/material";


import {CustomButton, NotificationSection} from "../../Components/Common";
import ConfirmBooking from "./ConfirmBooking";
import BookAppointment from "./BookAppointment";
import Checkout from "./Checkout";
import BookingTerms from "./BookingTerms";
import BookingSuccess from "./BookingSuccess";
import BuyCredit from "./BuyCredit";
import {useNavigate} from "react-router-dom";
import { getLocalData } from "../../Utils";


const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Appointment() {
    const [active, setActive] = useState(0);
    const navigate = useNavigate();
    const [categoryId,setCategoryId] = useState('');
    const [serviceId,setServiceId] = useState('');
      
    // const ClientId = encodeURIComponent(getLocalData('clientId'));
    const selected={
        categoryId:categoryId,
        serviceId:serviceId
    }
    const childComponent = [
        {title: "Book An Appointment", component: <BookAppointment handleNext={() => setActive(1)} setCategoryId={setCategoryId} setServiceId={setServiceId}/>},
        {title: "Confirm Booking", component: <ConfirmBooking handleNext={() => setActive(2)}/>},
        {title: "Checkout", component: <Checkout handleNext={() => setActive(3)} setPage={setActive}/>},
        {title: "Book An Appointment", component: <BookingTerms handleNext={() => setActive(4)}/>},
        {title: "", component: <BookingSuccess handleBack={() => setActive(0)}/>},
        {title: "Buy Credit", component: <BuyCredit handleBack={() => setActive(0)} selected={selected} />},

    ]
  const manageClick = () => {
    // handleClickOpen();
    setActive(1);
  };
    return (
        <Container className='appointment-container'>
            <Box className='appointment-header'>
                {active === 4 ? <Box></Box> : <>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => {
                                    if (active === 0) {
                                        navigate('/')
                                    } else {
                                        setActive(active - 1)
                                    }
                                }}
                            />
                            <Typography className='header-text'>{childComponent[active].title}</Typography>
                        </Box>
                        {/* {active === 5 && ( */}
                            {/* <Box className='shop-cart' onClick={manageClick}>
                                <Typography>Available Credits</Typography>
                            </Box> */}
                        {/* )} */}
                    </Box>
                </>}

                <NotificationSection/>
            </Box>
            {childComponent[active].component}
        </Container>
    );
}
