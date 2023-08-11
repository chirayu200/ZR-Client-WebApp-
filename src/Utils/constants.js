// apiConstants.js

const API_URL_DEV   = process.env.REACT_APP_API_URL_DEV;
const API_URL_TEST  = process.env.REACT_APP_API_URL_PROD;
const API_URL_STG   = process.env.REACT_APP_API_URL_PROD;
const API_URL_PROD  = process.env.REACT_APP_API_URL_PROD;

export const getApiBaseUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return API_URL_DEV;
    } else {
        return API_URL_PROD;
    }
};


