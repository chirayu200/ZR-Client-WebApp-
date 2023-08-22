
export const timeDifferenceCalculate = (startTime, endTime) => {
    const convertTo24HourFormat = (time) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hours = parseInt(hour, 10);
        const minutes = parseInt(minute, 10);
        if (period === 'PM' && hours !== 12) {
            hours += 12;
        }
        return hours * 60 + minutes;
    };

    const startMinutes = convertTo24HourFormat(startTime);
    const endMinutes = convertTo24HourFormat(endTime);

    const timeDifferenceMinutes = endMinutes - startMinutes;
    const hours = Math.floor(timeDifferenceMinutes / 60); // Convert minutes to hours
    const minutes = timeDifferenceMinutes % 60; // Remaining minutes

    if (hours > 0) {
        return `${hours} hours`;
    } else {
        return `${minutes} minutes`;
    }
}
export const convertDates = (startDate, endDate) => {
    const formatDate = (date) => {
        const parts = date.split('-');
        return new Date(parts[2], parts[0] - 1, parts[1]);
    };

    const today = new Date();
    const fromDate = formatDate(startDate);
    // const toDate = formatDate(endDate); // Change this date for testing

    let selectedFromDate = fromDate;
    // let selectedToDate = toDate;

    if (today > fromDate) {
        selectedFromDate = today;
    }

    // if (today > toDate) {
    //     // selectedToDate = today;
    // }

    const options = {month: 'long', day: '2-digit'};
    const formatDateLabel = (date) => {
        if (date.toDateString() === today.toDateString()) {
            return 'Today';
        } else if (date.toDateString() === tomorrow().toDateString()) {
            return 'Tomorrow';
        } else {
            return date.toLocaleDateString('en-US', options);
        }
    };

    const tomorrow = () => {
        const tomorrowDate = new Date(today);
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        return tomorrowDate;
    };

    const fromDateFormatted = formatDateLabel(selectedFromDate);
    // const toDateFormatted = formatDateLabel(selectedToDate);
    return fromDateFormatted;
}
export const filtersQuery = (filters) => {
    let filtersParams = JSON.parse(JSON.stringify(filters));
    Object.keys(filtersParams).forEach((key) => {
        if (
            filtersParams[key] === null ||
            filtersParams[key] === '' ||
            filtersParams[key] === 'undefined' ||
            filtersParams[key] === undefined ||
            filtersParams[key] === false
        ) {
            delete filtersParams[key];
        }
    });

    let queryString = Object.keys(filtersParams)
        .map((key) => key + '=' + encodeURIComponent(filtersParams[key]))
        .join('&');

    return queryString;
};
// Method to convert date in MM-DD-YYYY format when pass to API
export const dateFormat = (inputDate, type) => {
    let date;
    let month;
    let year;
    let newDate = new Date(inputDate);
    date = newDate.getDate();

    month = type? newDate.getMonth() + 2: newDate.getMonth() + 1;
    if(month>12){
        month = 1;
        year = newDate.getFullYear()+1;
    }
    else{
        year = newDate.getFullYear();
    }

    date = date.toString().padStart(2, '0');

    month = month.toString().padStart(2, '0');

    return  `${month}-${date}-${year}`;
};
export const maskCardNumber = (cardNumber, full) => {
    const cardNumberStr = cardNumber.toString();
    const last4Digits = cardNumberStr.slice(-4);
    const remainingDigits = full ? cardNumberStr : cardNumberStr.slice(0, -4);

    const maskedDigits = remainingDigits
        .replace(/\d{4}(?=.)/g, '$&-')
        .replace(/\d/g, 'x');
    if (full) {
        return maskedDigits;
    }

    return `${maskedDigits}-${last4Digits}`;
};
export const dateFormatWithSlash = (inputDate) => {
    let date;
    let month;
    let year;
    let newDate = new Date(inputDate);
    date = newDate.getDate();
    month = newDate.getMonth() + 1;
    year = newDate.getFullYear();
    date = date.toString().padStart(2, '0');
    month = month.toString().padStart(2, '0');
    return `${month}/${date}/${year}`;
};
export const CalenderDateFormat = (inputDate) => {
    let date;
    let month;
    let year;
    let newDate = new Date(inputDate);
    date = newDate.getDate();
    month = newDate.getMonth() + 1;
    year = newDate.getFullYear();
    date = date.toString().padStart(2, '0');
    month = month.toString().padStart(2, '0');
    return `${year}-${month}-${date}`;
};
export const setLocalData = (keyName, keyValue) => {
    localStorage.setItem(keyName, keyValue);
};

// get data from the local storage
export const getLocalData = (keyName) => {
    return localStorage.getItem(keyName);
};

// clear local data from the local storage
export const clearLocalData = () => {
    localStorage.clear();
};
 