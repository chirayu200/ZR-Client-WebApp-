import React, {useState,useEffect} from "react";
import {Box, Typography} from "@mui/material";
import DynamicSidebar from "../Sidebar/DynamicSidebar";
import LocationSidebar from "../Sidebar/LocationSidebar";
import {CustomButton} from "./CustomButton";

const location = require("../../assets/images/location.svg").default;


export function Header({clientDetail}) {
    console.log(clientDetail?.lastName, "lastName")
    const [notifyOpen, setNotifyOpen] = useState(false);
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setTimeOfDay('Morning');
        } else if (currentHour >= 12 && currentHour < 17) {
            setTimeOfDay('Afternoon');
        } else {
            setTimeOfDay('Evening');
        }
    }, []);
    const capitalizeFirstLetter = (str) => {
        return str?.charAt(0)?.toUpperCase() + str?.slice(1);
    };
    return (
        <Box className='top-header'>
            <Typography className='header-text'>
                Good {timeOfDay} <span>{`${capitalizeFirstLetter(clientDetail?.firstName) || ""}  ${capitalizeFirstLetter(clientDetail.lastName) || ""}`}!</span>
            </Typography>
            <CustomButton onClick={() => {
                setNotifyOpen(true)

            }}
                          className='header-btn'
                          title={"Austria"}
                          color='#fff'
                          width='119px'
                          icon={location}

                          backgroundColor='#32B2AC'
            />
            <DynamicSidebar open={notifyOpen} handleClose={() => setNotifyOpen(false)}
                            Component={<LocationSidebar handleClose={() => setNotifyOpen(false)}
                                                        clientDetail={clientDetail}/>}/>
        </Box>
    );
}
