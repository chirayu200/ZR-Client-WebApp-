const API_URL_DEV   = 'https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/';
const API_URL_TEST  = 'https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/';
const API_URL_STG   = 'https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/';
const API_URL_PROD  = 'https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/';

console.log(process.env.REACT_APP_ENV);
export const getApiBaseUrl = () => {
    if (process.env.REACT_APP_ENV === 'prod') {
        return API_URL_PROD;
    } else if (process.env.REACT_APP_ENV === 'stage') {
        return API_URL_STG;
    } else if (process.env.REACT_APP_ENV === 'test') {
        return API_URL_TEST;
    } else {
        return API_URL_DEV;
    }
};


