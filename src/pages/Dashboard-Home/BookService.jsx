import React, {useEffect, useMemo, useState} from "react";

import {Avatar, Box, Divider, InputLabel, Link, Typography} from "@mui/material";
import {CustomButton, CustomDropdown} from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {StarBorderOutlined} from "@mui/icons-material";
import {GetExploreScheduleDetail} from "../../Services/APIs/home";
import {convertDates, timeDifferenceCalculate} from "../../Utils";
import {GetAllPets} from "../../Services/APIs";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;


export default function BookService({handleNext, selected}) {
    const [selectedOption, setSelectedOption] = useState("");
    const [serviceDetail, setServiceDetail] = useState(selected)
    const [dogList, setDogList] = useState([])
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    let payload = useMemo(() => ({
        locationId: "LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63",
        occurrenceId: selected?.sortKey,
    }), [selected?.sortKey])
    useEffect(() => {
        GetExploreScheduleDetail(payload).then((response) => {

            if (response) {
                const [data] = response.data.Items;
                setServiceDetail(data || selected)

            }
        })
        const clientDetail = JSON.parse(localStorage.getItem('user_detail'));
        GetAllPets(clientDetail.sub).then((response) => {
            if (response) {
                const data = response.data.Items.map((item) => ({
                    label: item.firstName || '' + item.lastName || '',
                    value: item,
                }))
                setDogList(data);
            }
        })
    }, [selected, payload])
    return (
        <Box className='confirm-booking-main'>
            <Box className='display-booking-wrap book-service-left'>
                <Box className='img-section'>
                    <img
                        src='https://s3-alpha-sig.figma.com/img/d7cc/1968/54d701fd7ef2eb9c8e2baa11f207b998?Expires=1691971200&Signature=gUwm3sMZ5gtXcsfU~bnl91X33Vov1oSkB~1IN1iBc-DydpqOIfpb~F-E0m3RTeQeWygH-5HF5G2n75CiMuZCjx7SaE8fGptoKEDveCn9aYT6OxZSJpCR1UYjIjtYMuI~ba~i1Y9H7aN631k~vwibBhQEq9Nfn9wzLQGcuP6hoJNqI5IgMqeoJx1Rmvgk9XtgwHLaq7hQgVdJTXy9bt290PeaoN9SUQf4EelRsVRdjZo3Mc2ukgPlLa3XodJk8IREPto3czokzi9V~keYBv1~RpI37C4HqlV3aAd1cCDhOe5mbrd0Afa0SgWYx4PlG~vYOoUIcYbJqCP8HZV35Dj9Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
                        alt='section'
                        className='service-img'
                    />
                    <Box className='overlay-content'>
                        <Box className='header'>
                            <Typography>Class</Typography>
                            <Typography>Next Session</Typography>
                        </Box>
                        <Box className='header'>
                            <Box className='img-footer'>
                                <Typography className='heading'>{serviceDetail.serviceName}</Typography>
                                <Box className='rating-section'>
                                    <StarBorderOutlined/>
                                    <Typography>4.5 Star</Typography>
                                </Box>
                            </Box>

                            <Box className='img-footer'>
                                <Typography
                                    className='heading'>{convertDates(serviceDetail.fromDate, serviceDetail.toDate)},</Typography>
                                <Typography>{serviceDetail.startTime} to {serviceDetail.endTime} ({timeDifferenceCalculate(serviceDetail.startTime, serviceDetail.endTime)})</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='booking-notes service-description'>

                    <Typography className='heading'>Description</Typography>
                    <Typography className='description'>
                        {serviceDetail?.description}
                        <Link className='see-more'>See More</Link>
                    </Typography>

                </Box>
            </Box>
            <Box className='booking-notes-wrap book-term'>
                <Box className='booking-notes service-wrap'>
                    <Box className='first-section'>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Box className='display-attendee'>
                            <Box className='attendee-header'>
                                <Typography>Trainer</Typography>
                            </Box>
                            <Box className='attendee-value'>
                                <Typography>{serviceDetail?.trainerName}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography className='description'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Repudiandae at quasi aperiam nemo atque maxime. Consequuntur sequi
                            ducimus, aspernatur earum dolor maxime dicta nobis tenetur
                            repudiandae quis.
                        </Typography>
                    </Box>
                    <Divider/>
                    <Typography className='custom-heading'>Attendees</Typography>
                    <Box className='avatar-list'>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
                        <Typography>+10</Typography>
                    </Box>
                </Box>
                <Box className='appointment-dropdown book-service'>
                    <InputLabel>Select your dog</InputLabel>
                    <CustomDropdown
                        placeHolder='Select your dog'
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        options={dogList}
                        icon={downArrow}
                        fullWidth
                    />
                </Box>
                <CustomButton
                    className='book-btn'
                    title={"Checkout"}
                    color='#fff'
                    backgroundColor='#32B2AC'
                    iconJsx={<ChevronRightIcon/>}
                    fullWidth
                    onClick={handleNext}
                />
            </Box>
        </Box>
    );
}
