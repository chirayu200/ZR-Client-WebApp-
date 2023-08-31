import React from "react";
import { CustomButton,Toggle } from "../../Components/Common";
import { Box, Container,Grid, Typography } from "@mui/material";
// import "./style2.css";

const backArrow = require("../../assets/images/orangeArrow.svg").default;
const notifications = require("../../assets/images/notification0.png");


export default function Notifications({setActive}) {

    const handleCheck = () => {
        console.log("A");
    }
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
                            <Typography className='header-text-blue font-weight-700 f-18'>Notifications</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ paddingLeft: '15px' }}>
                                        <img src={notifications} alt="Notification" className="setting-image" onClick={() => setActive(3)} />
                                    </Box>
                </Box>
                <Grid container>
                    <Grid item xs={5.5} md={5.5} sm={5.5} className="display-flex">
                        <Typography className="header-text-black font-weight-700">Vaccination</Typography>
                        <Toggle onChange={handleCheck}/>
                    </Grid>
                    <Grid item xs={1} md={1} sm={1}/>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex">
                        <Typography className="header-text-black font-weight-700">Special Offers</Typography>
                        <Toggle onChange={handleCheck}/>
                    </Grid>

                  
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{marginTop:5}}>
                        <Typography className="header-text-black font-weight-700">Featured Item</Typography>
                        <Toggle onChange={handleCheck}/>
                    </Grid>
                    <Grid item xs={1} md={1} sm={1}/>
                    <Grid item xs={5.5} md={5.5} sm={5.5}  className="display-flex" sx={{marginTop:5}}>
                        <Typography className="header-text-black font-weight-700">New Bundle</Typography>
                        <Toggle onChange={handleCheck}/>
                    </Grid>
    

                </Grid>
            </Container>
        </>
    )
}