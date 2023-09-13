import { Box, Button, Typography } from '@mui/material';
import { React, useState, useEffect } from 'react'
import { CustomButton } from '../../Components/Common';
import rightCircle from '../../assets/images/rightCircle.svg';

const Dog = require("../../assets/images/dog-round.svg").default;
const petPlaceholder = "https://www.petcloud.com.au/img/pet_placeholder.png";

export default function YourPack({ details, setInitialState, initialState, setActive ,familyPets}) {
    const [showTwoPets, setShowTwoPets] = useState(false);

    const firstTwoPets = details?.pets?.slice(0, 2);
    const viewNotSelectedPets = details?.pets?.filter(pet => pet !== initialState.selected);
    console.log(initialState, 'activeeeee...');

    const handleNextPage = () => {
        setShowTwoPets(true)
        setActive(1);
        setInitialState({ ...initialState, userType: 'dog' });
    }
    return (
        <Box className="template-list-main ">
            <Box className="trophyBoxHead">
                <Typography className='header-text'>
                    {((initialState.userType === 'dog' && initialState.selected !== '') || initialState.userType === 'client') ? 'Your Pack' : 'Recent Activity'}
                </Typography>

                <CustomButton
                    onClick={handleNextPage}
                    className='viewAllBtn'
                    title={"View All"}
                    color='#fff'
                    backgroundColor='#32B2AC'
                />
            </Box>


            {((initialState.selected === '') && initialState.userType === 'client')
                &&
                firstTwoPets?.map((item, index) => (
                    <Box className="item" key={index}>
                        <Box className="itemImgWrap">
                            <img src={item?.profileImage ? item?.profileImage : petPlaceholder} alt="dog" />
                            <Box>
                                <Typography>{`${item?.firstName || ''} ${item?.lastName || ''}`}</Typography>
                                <Typography>
                                    Reward Points: 5550
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>{item?.breed}</Typography>
                            <Button onClick={() => {
                                setInitialState({ ...initialState, selected: item, userType: 'dog' });
                                setActive(0);
                                
                            }}><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>
                ))
                        }

                
                {((initialState.userType === 'dog' && initialState.selected === '')) &&

                details?.pets.map((item, index) => (

                        <Box className="item" key={index}>
                            <Box className="itemImgWrap">
                                <img src={item?.profileImage ? item.profileImage : petPlaceholder} alt="dog" />
                                <Box>
                                    <Typography>{`${item?.firstName || ''} ${item?.lastName || ''}`}</Typography>
                                    <Typography>
                                        Reward Points: 4441
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>{item?.breed}</Typography>
                                <Button onClick={() => {
                                    setInitialState({ ...initialState, selected: item, userType: 'dog' });
                                    setActive(0);

                                }}><img src={rightCircle} alt='close' /> </Button>
                            </Box>
                        </Box>
                    ))

            }


          {((initialState.userType === 'dog' && initialState.selected !== ''))
                &&
                viewNotSelectedPets?.slice(0, 2).map((item, index) => (
                    <Box className="item" key={index}>
                        <Box className="itemImgWrap">
                            <img src={item?.profileImage ? item.profileImage : petPlaceholder} alt="dog" />
                            <Box>
                                <Typography>{`${item?.firstName || ''} ${item?.lastName || ''}`}</Typography>
                                <Typography>
                                    Reward Points: 5556
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>{item?.breed}</Typography>
                            <Button onClick={() => {
                                setInitialState({ ...initialState, selected: item, userType: 'dog' });
                                setActive(0);
                                
                            }}><img src={rightCircle} alt='close' /> </Button>
                        </Box>
                    </Box>
                ))

                       }

        </Box>
    )
}
