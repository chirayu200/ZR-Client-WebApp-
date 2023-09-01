import React from "react";
import { CustomButton } from "../../Components/Common";
import { Box, Container, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { ReactComponent as InstagramSvg } from '../../assets/images/instagramsvg.svg';
import TwitterIcon from '@mui/icons-material/Twitter';


const backArrow = require("../../assets/images/orangeArrow.svg").default;
const notifications = require("../../assets/images/notification0.png");


export default function AboutApp({ setActive }) {
    return (
        <>
            <Container className='appointment-container'>
                <Box className='appointment-header d-flex'>
                    <Box className='top-header shop-header'>
                        <Box className='first-box'>
                            <CustomButton
                                className='arrow-btn'
                                color='#E35205'
                                icon={backArrow}
                                backgroundColor='#E7EFF9'
                                onClick={() => setActive(0)}
                            />
                            <Typography className='header-text-blue font-weight-700 f-18'>About App</Typography>
                        </Box>

                    </Box>
                    <Box sx={{ paddingLeft: '15px' }}>
                                        <img src={notifications} alt="Notification" className="setting-image" onClick={() => setActive(3)} />
                                    </Box>
                </Box>
                <Box className='item-detail-wrap'>
                    <Box className='top-section'>
                        <Typography className='header-text-blue' style={{
                            fontFamily: 'Univers LT Std',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '19px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            color: '#003087'
                        }}>What’s New</Typography>
                        <Typography className="header-text-black font-weight-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac felis tristique consectetur. Etiam a sapien dignissim, vehicula ipsum quis, consequat elitLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat ipsum ac felis tristique consectetur. Etiam a sapien dignissim, vehicula ipsum quis, consequat elit
                        </Typography>
                    </Box>
                    <Box className='top-section'>
                        <Typography className='header-text-blue' style={{
                            fontFamily: 'Univers LT Std',
                            fontSize: '16px',
                            fontWeight: 700,
                            lineHeight: '19px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                            color: '#003087'
        }}>About this app</Typography>
                        <Box className='mid-section'>
                            <Box className='mid-item'>
                                <Typography className="header-text-black font-weight-700">Version</Typography>
                                <Typography className="header-text-black font-weight-700">1.0.1</Typography>
                            </Box>
                            <Box className='mid-item'>
                                <Typography className="header-text-black font-weight-700">Updated on</Typography>
                                <Typography className="header-text-black font-weight-700">May 15, 2023</Typography>
                            </Box>
                            <Box className='mid-item'>
                                <Typography className="header-text-black font-weight-700">Required OS</Typography>
                                <Typography className="header-text-black font-weight-700">iOS 16.5 and up</Typography>
                            </Box>
                            <Box className='mid-item'>
                                <Typography className="header-text-black font-weight-700">Ratings</Typography>
                                <Box>
                                    <StarIcon className="icon-style" />
                                    <StarIcon className="icon-style" />
                                    <StarIcon className="icon-style" />
                                    <StarIcon className="icon-style" />
                                    <StarIcon className="icon-style" />
                                </Box>

                            </Box>
                        </Box>
                        <Typography className="header-text-black font-weight-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat
                            ipsum ac felis tristique consectetur. Etiam a sapien dignissim,
                            vehicula ipsum quis, consequat elit
                        </Typography>
                        <Typography className="header-text-black font-weight-700">
                            Phasellus eu fermentum augue. Nullam lobortis nibh quis elit feugiat tincidunt. Nunc neque erat, porttitor in blandit sit amet, pulvinar vitae lectus. Pellentesque et orci tellus. Proin pretium in magna eu euismod.
                        </Typography>
                        <Typography className="font-weight-400 header-text-orange">KEEP ZOOMING!</Typography>
                        <Box className='mid-section mt-23'>
                            <Box className='mid-item'>
                                <Typography className="header-text-black font-weight-400">Follow us on:
                                <Stack flexDirection="row" gap={'10px'} alignItems="center"><FacebookIcon className="facebook-style"/> <InstagramSvg /> <TwitterIcon className="twiter-style"/></Stack>
                                </Typography>
                                <a href="/" className='header-text-blue'>Rate our app</a>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}