import {Box, Checkbox, Link, Typography} from "@mui/material";
import React, {useState} from "react";
import {CustomButton, CustomInput} from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const visaCard = require("../../assets/images/visaCard.svg").default;
export default function Checkout({handleNext, buyNow}) {
    const [value, setValue] = useState("");
    const [selectedValue, setSelectedValue] = useState("payBy"); // Default selected value

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleInputChange = (event) => {
        const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        let formattedValue = "";

        if (input.length > 0) {
            formattedValue = input.substr(0, 2);

            if (input.length > 2) {
                formattedValue += "/" + input.substr(2, 2);
            }
        }

        setValue(formattedValue);
    };
    return (
        <Box>
            <Box className='checkout-header'>
                <FormControl>
                    <RadioGroup
                        className='radio-main'
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label'
                        name='row-radio-buttons-group'
                        value={selectedValue}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel
                            value='credits'
                            control={<Radio/>}
                            label='Use Credits'
                        />
                        <FormControlLabel
                            value='payBy'
                            control={<Radio/>}
                            label='Pay by Credit Card'
                        />
                    </RadioGroup>
                </FormControl>
            </Box>

            <Box className='card-detail-wrap'>
                <Box className='card-detail'>
                    {selectedValue === "payBy" ? (
                        <>
                            <Typography> Enter your card detail</Typography>
                            <Box className='input-section'>
                                <CustomInput
                                    type='text'
                                    name='Name'
                                    placeholder='Name On the Card'
                                    fullWidth
                                    className='card-input'
                                />
                                <CustomInput
                                    type='text'
                                    name='monthYear'
                                    placeholder='MM/YY'
                                    value={value}
                                    className='card-input'
                                    onChange={handleInputChange}
                                />
                            </Box>
                            <Box className='input-section'>
                                <CustomInput
                                    type='number'
                                    name='number'
                                    placeholder='Card Number'
                                    className='card-input'
                                    fullWidth
                                />
                                <CustomInput
                                    type='number'
                                    name='cvv'
                                    className='card-input'
                                    placeholder='CVV'
                                />
                            </Box>
                            <Box className='save-card'>
                                <Checkbox checked/>
                                <Typography>Save card for future use</Typography>
                            </Box>
                        </>
                    ) : (
                        <Box className='credit-remain'>
                          <Typography>Credit Used: 1</Typography>
							<Typography>Remaining: 3</Typography>
                            <Link className="red-link-line">Credit Not Available,<Link className="link-line"
                                                                                       onClick={buyNow}>Buy
                                Now</Link></Link>

                        </Box>
                    )}

                    <CustomButton
                        className='book-btn'
                        title={selectedValue === "payBy" ? "Confirm" : "Redeem"}
                        color='#fff'
                        disabled={selectedValue !== "payBy"}
                        backgroundColor='#32B2AC'
                        iconJsx={<ChevronRightIcon/>}
                        fullWidth
                        onClick={handleNext}
                    />
                </Box>
                {selectedValue === "payBy" ? (
                    <Box className='appointment-dropdown'>
                        <Typography className='available-slots'>Saved Card</Typography>
                        <Box className='slots-wrap card-list-detail-wrap'>
                            <Box className=''>
                                <img src={visaCard} alt='visa card'/>
                            </Box>
                            <Box className='card-list-detail'>
                                <Box className='card-list-section'>
                                    <Box>
                                        <Typography className='heading'>
                                            Visa ending in 1234
                                        </Typography>
                                        <Typography className='sub-heading'>
                                            Expiry 06/2024
                                        </Typography>
                                    </Box>
                                    <Box className='color-btn-wrap'>
                                        <Link className='gray-btn'>Set as default</Link>
                                        <Link className='blue-btn'>Edit</Link>
                                        <Link className='red-btn'>Remove</Link>
                                    </Box>
                                </Box>
                                <Checkbox
                                    checked
                                    indeterminate
                                    indeterminateIcon={<CheckCircleIcon/>}
                                    icon={<RadioButtonUncheckedIcon/>}
                                />
                            </Box>
                        </Box>
                    </Box>
                ) : <Box className='appointment-dropdown'></Box>}
            </Box>
        </Box>
    );
}
