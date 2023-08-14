import {Avatar, Box, Container, Link, Stack, Typography} from "@mui/material";
import React, {useState} from "react";
import {CustomButton, Header, LeadershipBoard, NotificationSection} from "../../Components/Common";
import {CustomDialogue} from "../../Components/Modals";
import CircularProgress from "@mui/material/CircularProgress";
import HistoryIcon from '@mui/icons-material/History';
import VisitHistory from './VisitHistory';
import ExploreService from "./ExploreServices";
import BookService from './BookService';
import Checkout from "../Appointments/Checkout";
import YourSchedule from "../../Components/Common/YourSchedule";
import BuyCredit from "../Appointments/BuyCredit";
import BookingSuccess from "../Appointments/BookingSuccess";

const warning = require("../../assets/images/warning.svg").default;
const next = require("../../assets/images/nextArrow.svg").default;
// const nextArrow = require("../../assets/images/chevron-up-orange.svg").default;
const back = require("../../assets/images/backArrow.svg").default;
// const dog = require("../../assets/images/dog.png");
const dog1 = require("../../assets/images/dog-obedience-training.png");
const adjStart = require("../../assets/images/adjStart.svg").default;
const adjBon = require("../../assets/images/adjbon.svg").default;
const adjDogOne = require("../../assets/images/adjDogOne.svg").default;
const adjDogtwo = require("../../assets/images/adjDogtwo.svg").default;
const adjDogThree = require("../../assets/images/adjDogThree.svg").default;
const adjDogFour = require("../../assets/images/adjDogFour.svg").default;
const adjDogFive = require("../../assets/images/adjDogFive.svg").default;
// const simpleBar = require("../../assets/images/simpleBar.svg").default;
// const dottedBar = require("../../assets/images/dottedBar.svg").default;
const backArrow = require("../../assets/images/orangeArrow.svg").default;

export default function Home({clientDetail}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const [activeSteps, setActiveSteps] = useState(0);
    const handleSelectedItems = (item) => {
        setSelected(item)
        setActiveSteps(3)
    }
    const childComponents = [
        {title: "", component: ''},
        {title: "Visit History", component: <VisitHistory handleBack={() => setActiveSteps(0)}/>},
        {
            title: "Explore Services",
            component: <ExploreService handleBack={() => setActiveSteps(0)} handleNext={handleSelectedItems}/>
        },
        {
            title: "Book Service",
            component: <BookService handleBack={() => setActiveSteps(0)} handleNext={() => setActiveSteps(4)}
                                    selected={selected}/>
        },
        {
            title: "Checkout",
            component: <Checkout handleBack={() => setActiveSteps(4)} handleNext={() => setActiveSteps(5)}
                                 buyNow={() => setActiveSteps(5)}/>
        },
        {
            title: "Buy Credit",
            component: <BuyCredit handleBack={() => setActiveSteps(0)} selected={selected}
                                  handleNext={() => setActiveSteps(6)}/>
        },
        {title: "", component: <BookingSuccess handleBack={() => setActiveSteps(0)}/>},

    ]




    return (
        <>
            {activeSteps === 0 ?
                <Container className='dashboard-container'>
                    <Box>
                        <Box className='dashboard-header'>
                            <Header clientDetail={clientDetail}/>
                            <NotificationSection/>
                        </Box>
                        <Box className='warning-section'>
                            <img src={warning} alt='warning'/>
                            <Typography>Only 2 more days until New Year Sale ends.</Typography>
                        </Box>
                        <Box className='dashboard-mid-section'>
                            {/*to uncoomet this section you need to comment the classname and then uncomment the only schedule section class and comment the below boxes then uncommnt this section*/}
                            <Box
                                className='schedule-section second-section'
                                // className='schedule-section'
                            >
                                {/* <Box className='visit-schedule' onClick={() => setOpen(true)}>
							<Typography>SCHEDULE A VISIT</Typography>
							<img src={dog} alt='dog' />
						</Box> */}
                                <Box className='main-schedule-box'>
                                    <YourSchedule/>
                                    <Box className='class-footer'>
                                        <Box className='visit-history'>
                                            <HistoryIcon/>
                                            <Link className='link-line' onClick={() => setActiveSteps(1)}>Visit History
                                            </Link>
                                        </Box>
                                        <Link onClick={() => setOpen(true)} className='link-line'>+Schedule A
                                            Visit</Link>
                                    </Box>
                                </Box>

                            </Box>
                            <Box className='achievements-section'>
                                <Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography className='header-text'>
                                            Journey: <span>Agile Dog </span>
                                        </Typography>

                                        <CustomButton
                                            className='viewAllBtn'
                                            title={"View All"}
                                            color='#fff'
                                            backgroundColor='#32B2AC'
                                        />
                                    </Box>
                                    <Box className="phaseFlex">
                                        <Box className="item done">
                                            <img src={adjStart} alt='adjStart'/>
                                            <span>Start</span>
                                            <Box className="progresswrap">
                                                <CircularProgress
                                                    variant='determinate'
                                                    color='warning'
                                                    value={20}
                                                    className='circlePBar'
                                                />
                                                <img
                                                    src={adjDogOne}
                                                    alt='adjDogOne'
                                                    className='adjDogImg'
                                                />
                                            </Box>
                                        </Box>
                                        <Box className="item">
                                            <img src={adjBon} alt='adjBon' className='adjBonImg'/>
                                            <span>Phase 2</span>
                                            <Box className="progresswrap">
                                                <CircularProgress
                                                    variant='determinate'
                                                    color='warning'
                                                    value={88}
                                                    className='circlePBar'
                                                />
                                                <img
                                                    src={adjDogtwo}
                                                    alt='adjDogtwo'
                                                    className='adjDogImg'
                                                />
                                            </Box>
                                        </Box>
                                        <Box className="item">
                                            <img src={adjBon} alt='adjBon' className='adjBonImg'/>
                                            <span>Phase 3</span>
                                            <Box className="progresswrap">
                                                <CircularProgress
                                                    variant='determinate'
                                                    color='warning'
                                                    value={56}
                                                    className='circlePBar'
                                                />
                                                <img
                                                    src={adjDogThree}
                                                    alt='adjDogThree'
                                                    className='adjDogImg'
                                                />
                                            </Box>
                                        </Box>
                                        <Box className="item">
                                            <img src={adjBon} alt='adjBon' className='adjBonImg'/>
                                            <span>Phase 4</span>
                                            <Box className="progresswrap">
                                                <CircularProgress
                                                    variant='determinate'
                                                    color='warning'
                                                    value={95}
                                                    className='circlePBar'
                                                />
                                                <img
                                                    src={adjDogFour}
                                                    alt='adjDogFour'
                                                    className='adjDogImg'
                                                />
                                            </Box>
                                        </Box>
                                        <Box className="item">
                                            <img src={adjBon} alt='adjBon' className='adjBonImg'/>
                                            <span>Phase 5</span>
                                            <Box className="progresswrap">
                                                <CircularProgress
                                                    variant='determinate'
                                                    color='warning'
                                                    value={39}
                                                    className='circlePBar'
                                                />
                                                <img
                                                    src={adjDogFive}
                                                    alt='adjDogFive'
                                                    className='adjDogImg'
                                                />
                                            </Box>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>
                        <LeadershipBoard/>
                    </Box>

                </Container> :
                <Container className='appointment-container'>
                    <Box className='appointment-header'>
                        {activeSteps === 6 ? <Box></Box> :
                            <Box className='top-header shop-header'>
                                <Box className='first-box'>
                                    <CustomButton
                                        className='arrow-btn'
                                        color='#E35205'
                                        icon={backArrow}
                                        backgroundColor='#E7EFF9'
                                        onClick={() => {
                                            if (activeSteps === 1 || activeSteps === 2) {
                                                setActiveSteps(0)
                                            } else {
                                                setActiveSteps(activeSteps - 1)
                                            }
                                        }}
                                    />
                                    <Typography
                                        className='header-text'>{childComponents[activeSteps].title}</Typography>

                                </Box>

                                <Box className='shop-cart'>
                                    <Typography>Available Credits</Typography>
                                </Box>

                            </Box>
                        }
                        <NotificationSection/>
                    </Box>
                    {childComponents[activeSteps].component}
                </Container>

            }

            <CustomDialogue
                type="appointment"
                className={'dialog-main'}
                open={open}
                handleClose={() => setOpen(false)}
                fullWidth
                handleNext={() => {
                    setActiveSteps(2);
                    setOpen(false)
                }}

            />


        </>

    );
}
