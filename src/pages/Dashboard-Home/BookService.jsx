import React, { useEffect, useMemo, useState } from "react";

import { Avatar, Box, Divider, InputLabel, Link, Typography } from "@mui/material";
import { CustomButton, CustomDropdown } from "../../Components/Common";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { StarBorderOutlined } from "@mui/icons-material";
import { GetExploreScheduleDetail } from "../../Services/APIs/home";
import { convertDates, timeDifferenceCalculate } from "../../Utils";
import { GetAllPets } from "../../Services/APIs";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const banner = require("../../assets/images/bannerBookService.png");


export default function BookService({ handleNext, selected }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [serviceDetail, setServiceDetail] = useState(selected)
    const [dogList, setDogList] = useState([])
    const [attendence, setAttendence] = useState([])
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

        GetAllPets().then((response) => {
            if (response) {
                const data = response.data.Items.map((item) => ({
                    label: capitalizeWords(item.firstName) || '' + capitalizeWords(item.lastName) || '',
                    value: item,
                }))
                setDogList(data);
            }
        })
        setAttendence(selected.clientDetails);
    }, [selected, payload])
    function capitalizeWords(str) {
        const words = str.split(' ');
        const capitalizedWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });
        return capitalizedWords.join(' ');
    }
    return (
        <Box className='confirm-booking-main'>
            <Box className='display-booking-wrap book-service-left'>
                <Box className='img-section'>
                    <img
                        src={banner}
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
                                    <StarBorderOutlined />
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
                            src={serviceDetail?.trainerProfileImage ? serviceDetail?.trainerProfileImage : 'https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} />
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
                    <Divider />
                    <Typography className='custom-heading'>Attendees</Typography>
                    <Box className='avatar-list'>
                    {attendence && attendence.map((item) => (
                        <>
                        <Avatar src={item.clientChildProfile} />                                                
                        </>
                    ))}
                    <Typography>{attendence.length > 7 ? '+' + (attendence.length - 7) : ''}</Typography>
                    </Box>
                    {/* <Box className='avatar-list'>
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Avatar
                            src='https://s3-alpha-sig.figma.com/img/f53e/1d24/fbad79be67f30faaa84b663526fc7319?Expires=1691971200&Signature=nHza3YVjuzDLlFNLw8dhzKEENSJe6NpGGeXc29FxHSUazhzzBZBnBgeaB~NpFhjIUkfnhPwN5ji281JrGHY1XQfgzFEX4Q60iIV-cdmsi6KOW4dEpVkT8t5SNguksFFJtby9QqnZZSH-~UTrquYPjlyqL5PM7wGfDsf-eDcm9fkFFKo6Js-KAOI0qDkUHq2ScO93gO1kRjZ0fs5OniFysumuVICMbzEHh03xBFL26gum7l4aPuOJUSaeVWFfu5JQpPMillOv6B3ZtV5Vtqfj7O7K76btJsJ6ZjksvnStZavnHBB9LEIc8AIITzvRPy-XfUstiPciilad4joeORindQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
                        <Typography>+10</Typography>
                    </Box> */}
                </Box>
                <Box className='appointment-dropdown book-service'>
                    <InputLabel>Select Your Dog</InputLabel>
                    <CustomDropdown
                        placeHolder='Select Your Dog'
                        value={selectedOption}
                        onChange={handleDropdownChange}
                        options={dogList}
                        icon={downArrow}
                        fullWidth
                    />
                </Box>
                <CustomButton
                    className='book-btn'
                    title={"CHECK OUT"}
                    color='#fff'
                    backgroundColor='#32B2AC'
                    iconJsx={<ChevronRightIcon />}
                    fullWidth
                    onClick={handleNext}
                />
            </Box>
        </Box>
    );
}
