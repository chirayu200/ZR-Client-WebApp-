import React from "react";
import {Box, Button, Typography} from "@mui/material";
// import close from '../../assets/images/redClose.svg'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton} from '../../Components/Common'

export default function PurchaseHistory({handleNext}) {

    return (
        <>
            <Box className="topStack">
                <Button>Personal</Button>
                <Button className="active">Dog</Button>
            </Box>
            <Box className="purchaseFlex">
                <Box>
                    <Box className="purchaseCard">
                        <Box className="top">
                            <Box>
                                <Typography>Payment Method</Typography>
                                <Typography>Card</Typography>
                            </Box>
                            <Box>
                                <Typography>Date</Typography>
                                <Typography>11/11/2023</Typography>
                            </Box>
                        </Box>
                        <Box className="item">
                            <Typography>Item #1</Typography>
                            <Typography>$681</Typography>
                            <Typography>8</Typography>
                        </Box>
                    </Box>
                    <CustomButton
                        className='book-btn item-detail-btn'
                        title={"Back to shopping"}
                        backgroundColor='transparent'
                        color='#32B2AC'
                        iconJsx={<ChevronRightIcon/>}
                        fullWidth
                        onClick={handleNext}
                    />
                </Box>
                <Box>
                    <Box className="purchaseCard">
                        <Box className="top">
                            <Box>
                                <Typography>Payment Method</Typography>
                                <Typography>Card</Typography>
                            </Box>
                            <Box>
                                <Typography>Date</Typography>
                                <Typography>11/11/2023</Typography>
                            </Box>
                        </Box>
                        <Box className="item">
                            <Typography>Item #1</Typography>
                            <Typography>$681</Typography>
                            <Typography>8</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    );
}
