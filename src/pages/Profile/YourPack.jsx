import {Box, Button, Typography} from '@mui/material';
import React from 'react'
import {CustomButton} from '../../Components/Common';
import rightCircle from '../../assets/images/rightCircle.svg';

const Dog = require("../../assets/images/dog-round.svg").default;


export default function YourPack({setInitialState, initialState, setActive}) {
    const handleNextPage = () => {
        setActive(1);
        setInitialState({...initialState, userType: 'dog'});
    }
    return (
        <Box className="template-list-main ">
            <Box className="trophyBoxHead"

            >
                <Typography className='header-text'>
                    {((initialState.userType === 'dog' && initialState.selected !== '')|| initialState.userType === 'client') ? 'Your Pack' : 'Recent Activity'}
                </Typography>

                <CustomButton
                    onClick={handleNextPage}
                    className='viewAllBtn'
                    title={"View All"}
                    color='#fff'
                    backgroundColor='#32B2AC'
                />
            </Box>
            {initialState && initialState?.client?.pets?.map((item, index) => (
                <Box className="item" key={index}>
                    <Box className="itemImgWrap">
                        <img src={Dog} alt="dog"/>
                        <Box>
                            <Typography>{`${item?.firstName || ''} ${item?.lastName || ''}`}</Typography>
                            <Typography>
                                Reward Points: 3214
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>{item?.breed}</Typography>
                        <Button onClick={() => {
                            setInitialState({...initialState, selected: item, userType: 'dog'});
                            setActive(0);

                        }}><img src={rightCircle} alt='close'/> </Button>
                    </Box>
                </Box>
            ))}
            <Box className="item">
                <Box className="itemImgWrap">
                    <img src={Dog} alt="dog"/>
                    <Box>
                        <Typography>Ralph Edwards</Typography>
                        <Typography>
                            Reward Points: 3214
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>Firedog</Typography>
                    <Button><img src={rightCircle} alt='close'/> </Button>
                </Box>
            </Box>


        </Box>
    )
}