import React, {useEffect, useState} from "react";
import {CustomButton} from "../../Components/Common";
import {Box, CircularProgress, FormControl, FormControlLabel, Radio, RadioGroup, Typography,} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {GetAllBuyCredits} from "../../Services/APIs/checkout";

export default function BuyCredit({handleNext, selected}) {
    console.log(selected, "selected")
    const [creditList, setCreditList] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        GetAllBuyCredits(selected).then((response) => {
            console.log(response, "response");
            setCreditList(response?.data?.Items);
            setLoader(false)
        })
    }, [selected])
    return (
        <>
        {loader ? <Box className='loader'> <CircularProgress size={60}/> </Box> :
                <Box className='buy-credit-main'>

                    <Box className='available-credit-list'>
                        {creditList&&creditList.map((item,index)=>(
                                <Box className='credit-box' key={index}>
                                    <Box className='credit-header'>
                                        <Typography>{item?.categoryName||item.name}- PO1</Typography>
                                        <Box className='credit-footer'>
                                            <Typography>Sessions</Typography>
                                            <Typography>{item?.numberOfSessions}</Typography>
                                            <Typography>Price</Typography>
                                            <Typography>${item?.price}</Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <FormControl>
                                            <RadioGroup
                                                className='radio-main'
                                                aria-labelledby='demo-row-radio-buttons-group-label'
                                                name='row-radio-buttons-group'
                                            >
                                                <FormControlLabel value='credits' control={<Radio/>}/>
                                            </RadioGroup>
                                        </FormControl>
                                    </Box>
                                </Box>
                            ))}

                    </Box>
                    <Box sx={{width: "50%"}}>
                        <CustomButton
                            className='book-btn'
                            title={"Book Now"}
                            color='#fff'
                            backgroundColor='#32B2AC'
                            iconJsx={<ChevronRightIcon/>}
                            fullWidth
                            onClick={handleNext}
                        />
                    </Box>
                </Box>
        }
        </>
    );
}
