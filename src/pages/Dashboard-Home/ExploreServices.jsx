import {Box, CircularProgress, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {CustomButton, CustomDropdown, CustomInput,} from "../../Components/Common";
import {GetAllExploreSchedules} from "../../Services/APIs";
import {convertDates, dateFormat, filtersQuery, timeDifferenceCalculate} from "../../Utils";

const downArrow = require("../../assets/images/dropdownArrow.svg").default;
const searchIcon=require('../../assets/images/searchIcon.svg').default;
const options = [
    {label: "All", value: ""},
    {label: "Enrollments", value: "enrollment"},
    {label: "Appointments", value: "appointment"},

];
export default function ExploreService({handleNext}) {
    const [filters, setFilters] = useState({
        scheduleType: "",
        locationId: 'LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63',
        fromDate: '08-08-2023',
        toDate: '09-08-2023',
    })
    // const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
    const [allExploreList, setAllExploreList] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredList, setFilteredList] = useState([]);
    const [loader, setLoader] = useState(true);
    const [selectedButton, setSelectedButton] = useState(null);
    const handleDropdownChange = (event) => {

        setLoader(true);
        setFilters({...filters, scheduleType: event.target.value})
    };
    const handleButtonClick = (buttonIndex) => {
        setLoader(true);
        setSelectedButton(buttonIndex);
        handleFilterClick(buttonIndex)
    };



    useEffect(() => {
        let queryString = filtersQuery(filters);
        let filtersParams = queryString ? `${queryString}` : '';
        GetAllExploreSchedules(filtersParams).then((response) => {
            if (response) {
                setAllExploreList(response?.data?.Items);
                setFilteredList(response?.data?.Items);
                setLoader(false)
            }
        })
    }, [filters])
    const handleSelected = (item) => {
        handleNext(item);
    }


    const getCurrentWeekDates = () => {
        const today = new Date();
        const currentDay = today.getDay();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - currentDay);
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - currentDay));
        return {startDate: startOfWeek, endDate: endOfWeek};
    };

    const getThisMonthDates = () => {
        const today = new Date();
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDayOfMonth = new Date(
            today.getFullYear(),
            today.getMonth() + 1,
            0
        );
        return {startDate: firstDayOfMonth, endDate: lastDayOfMonth};
    };

    const getNextDayOfWeek = (date, dayOfWeek) => {
        const resultDate = new Date(date);
        resultDate.setDate(
            date.getDate() + ((7 + dayOfWeek - date.getDay()) % 7)
        );
        return resultDate;
    };

    const getNextDayDates = (day) => {
        const today = new Date();
        const nextDay = getNextDayOfWeek(today, day); // 0 is Sunday, 1 is Monday, 2 is Tuesday, etc.
        const startOfnextDay = new Date(nextDay);
        startOfnextDay.setHours(0, 0, 0, 0);
        const endOfnextDay = new Date(nextDay);
        endOfnextDay.setHours(23, 59, 59, 999);
        return {startDate: startOfnextDay, endDate: endOfnextDay};
    };

    const handleFilterClick = (filter) => {

        let startDate, endDate;
        switch (filter) {
            case 1:
                ({startDate, endDate} = getThisMonthDates());
                break;
            case 2:
                ({startDate, endDate} = getCurrentWeekDates());
                break;
            case 3:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 4:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 5:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 6:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 7:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 8:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;
            case 9:
                ({startDate, endDate} = getNextDayDates(filter - 3));
                break;

            default:
                // Default to today
                startDate = new Date();
                endDate = new Date();
                break;
        }

        setFilters({...filters, fromDate: dateFormat(startDate), toDate: dateFormat(endDate)})
    };

    const handleSearch = (query) => {
        setSearchQuery(query);

        const filteredResults = allExploreList.filter(item =>
            item.categoryName.toLowerCase().includes(query.toLowerCase())
        );

        if (query.length > 0) {
            setAllExploreList(filteredResults)
        } else {
            setAllExploreList(filteredList)
        }

    };

    return (
        <Box className='explore-main'>
            <Box className='filter-section'>
                <Box className='days-section'>
                    <CustomButton
                        color='#003087'
                        title={"This Month"}
                        className={`slots ${selectedButton === 1 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(1)}
                    />
                    {/* active */}
                    <CustomButton
                        color='#003087'
                        title={"This Week"}
                        className={`slots ${selectedButton === 2 ? 'active' : ''}`}
                        onClick={() => handleButtonClick(2)}
                    />
                    <Box className='week-days-box'>
                        <CustomButton color='#003087' title={"M"}
                                      className={`slots ${selectedButton === 4 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(4)}/>
                        <CustomButton color='#003087' title={"T"}
                                      className={`slots ${selectedButton === 5 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(5)}/>
                        <CustomButton color='#003087' title={"W"}
                                      className={`slots ${selectedButton === 6 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(6)}/>
                        <CustomButton color='#003087' title={"T"}
                                      className={`slots ${selectedButton === 7 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(7)}/>
                        <CustomButton color='#003087' title={"F"}
                                      className={`slots ${selectedButton === 8 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(8)}/>
                        <CustomButton color='#003087' title={"S"}
                                      className={`slots ${selectedButton === 9 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(9)}/>
                        <CustomButton color='#003087' title={"S"}
                                      className={`slots ${selectedButton === 3 ? 'active' : ''}`}
                                      onClick={() => handleButtonClick(3)}/>
                    </Box>
                </Box>
                <Box className='filter-dropdown-section'>
                    <CustomDropdown
                        value={filters.scheduleType}
                        onChange={handleDropdownChange}
                        options={options}
                        icon={downArrow}
                    />
                    <CustomDropdown
                        value={filters.scheduleType}
                        onChange={handleDropdownChange}
                        options={options}
                        icon={downArrow}
                    />
                    <CustomInput
                        type='text'
                        name='search'
                        value={searchQuery}
                        className='card-input search'
                        placeholder='Search'
                        fullWidth
                        icon={searchIcon}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </Box>
            </Box>
            {loader ? <Box className='loader'> <CircularProgress size={60}/> </Box> : <Box className='cards-list-wrap'>
                {allExploreList && allExploreList.map((item, index) => (
                    <Box className='card-item-wrap' key={index}>
                        <Box className='card-item-head'>
                            <Box className='display-attendee'>
                                <Box className='attendee-header'>
                                    <Typography>Class</Typography>
                                </Box>
                                <Box className='attendee-value'>
                                    <Typography>{item?.categoryName}</Typography>
                                </Box>
                            </Box>
                            <CustomButton
                                className='viewAllBtn'
                                title={"Book"}
                                color='#fff'
                                onClick={() => handleSelected(item)}
                                backgroundColor='#32B2AC'
                            />
                        </Box>
                        <Box className='card-item-footer'>
                            <Box className='attendee-header'>
                                <Typography>Next Session</Typography>
                                <Box className='attendee-value'>
                                    <Typography
                                        className='value-weight'>{convertDates(item.fromDate, item.toDate)}</Typography>
                                </Box>
                            </Box>
                            <Box className='attendee-header'>
                                <Typography>
                                    {item.startTime} to {item.endTime} (<span>{timeDifferenceCalculate(item.startTime, item.endTime)} < /span>)
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}

            </Box>}

        </Box>
    );
}
