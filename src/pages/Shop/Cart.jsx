import React, {useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import close from '../../assets/images/redClose.svg'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {CustomButton} from '../../Components/Common'
import {CustomDialogue} from "../../Components/Modals";

export default function Cart({handleNext}) {
    const [open, setOpen] = useState(false);

  
    return (
        <>
            <Box className="cartWrap">
                <Box className="template-list-main">
                    <Box className="item">
                        <Box>
                            <Typography>Service Name #</Typography>
                            <Typography>
                                Service Type
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>10 Sessions</Typography>
                            <Button><img src={close} alt='close'/> </Button>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box>
                            <Typography>Service Name #</Typography>
                            <Typography>
                                Service Type
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>10 Sessions</Typography>
                            <Button><img src={close} alt='close'/> </Button>
                        </Box>
                    </Box>

                    <Box className="item">
                        <Box>
                            <Typography>Service Name #</Typography>
                            <Typography>
                                Service Type
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>10 Sessions</Typography>
                            <Button><img src={close} alt='close'/> </Button>
                        </Box>
                    </Box>
                    <Box className="item">
                        <Box>
                            <Typography>Service Name #</Typography>
                            <Typography>
                                Service Type
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>10 Sessions</Typography>
                            <Button><img src={close} alt='close'/> </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className="checkProcess">
                    <Box className="codeBox">
                        <Typography>Promo Code</Typography>
                        <TextField id="Add-code" label="Add code" variant="standard"/>
                    </Box>
                    <Box className="summaryBox">
                        <Typography>Order Summary</Typography>
                        <Box>
                            <Typography>Order</Typography>
                            <Typography>$1281</Typography>
                        </Box>
                        <Box>
                            <Typography>Tax</Typography>
                            <Typography>$12</Typography>
                        </Box>
                        <Box>
                            <Typography>Total</Typography>
                            <Typography>$3000</Typography>
                        </Box>
                    </Box>

                    <CustomButton
                        className='book-btn'
                        title={"CHECK OUT"}
                        color='#fff'
                        backgroundColor='#32B2AC'
                        iconJsx={<ChevronRightIcon/>}
                        fullWidth
                        onClick={() => setOpen(true)}

                    />
                    <CustomButton
                        className='book-btn item-detail-btn'
                        title={"BACK TO SHOPPING"}
                        backgroundColor='transparent'
                        color='#32B2AC'
                        iconJsx={<ChevronRightIcon/>}
                        fullWidth
                        // onClick={handleNext}
                    />

                </Box>
            </Box>
            <CustomDialogue
                type="cart"
                open={open}
                className={'checkoutModal'}
                handleClose={() => setOpen(false)}
                fullWidth
                handleNext={() => {
                    handleNext()
                    setOpen(false)
                }}

            />
        </>
    );
}
