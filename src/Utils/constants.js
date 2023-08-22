
// Development domains url's
const API_URL_DEV_1 = 'https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/';
const API_URL_DEV_2 = 'https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev/';
const API_URL_DEV_3 = 'https://ifcxqbb98k.execute-api.us-east-1.amazonaws.com/dev/';

// test domains url's
const API_URL_TEST_1 = 'https://gxh3fnvl9i.execute-api.us-east-1.amazonaws.com/qa/api/';
const API_URL_TEST_2 = 'https://937gsyyg89.execute-api.us-east-1.amazonaws.com/qa/';
const API_URL_TEST_3 = 'https://q4m1fcya9h.execute-api.us-east-1.amazonaws.com/qa/';

// Stage domains url's
const API_URL_STG_1 = 'https://gxh3fnvl9i.execute-api.us-east-1.amazonaws.com/qa/api/'; // need to change as right now this is QA URL
const API_URL_STG_2 = 'https://937gsyyg89.execute-api.us-east-1.amazonaws.com/qa/'; // need to change as right now this is QA URL
const API_URL_STG_3 = 'https://q4m1fcya9h.execute-api.us-east-1.amazonaws.com/qa/'; // need to change as right now this is QA URL

// Production domains url's
const API_URL_PROD_1 = 'https://gxh3fnvl9i.execute-api.us-east-1.amazonaws.com/qa/api/'; // need to change as right now this is QA URL
const API_URL_PROD_2 = 'https://937gsyyg89.execute-api.us-east-1.amazonaws.com/qa/'; // need to change as right now this is QA URL
const API_URL_PROD_3 = 'https://q4m1fcya9h.execute-api.us-east-1.amazonaws.com/qa/'; // need to change as right now this is QA URL


console.log(process.env.REACT_APP_ENV);
let API_URL_11;
let API_URL_22;
let API_URL_33;
if (process.env.REACT_APP_ENV === 'prod') {
      API_URL_11 = API_URL_PROD_1;
      API_URL_22 = API_URL_PROD_2;
      API_URL_33 = API_URL_PROD_3;
} else if (process.env.REACT_APP_ENV === 'stage') {
     API_URL_11 = API_URL_STG_1;
     API_URL_22 = API_URL_STG_2;
     API_URL_33 = API_URL_STG_3; 
} else if (process.env.REACT_APP_ENV === 'qa') {
     API_URL_11 = API_URL_TEST_1;
     API_URL_22 = API_URL_TEST_2;
     API_URL_33 = API_URL_TEST_3;     
} else {
     API_URL_11 = API_URL_DEV_1;
     API_URL_22 = API_URL_DEV_2;
     API_URL_33 = API_URL_DEV_3;     
}

export const API_URL_1 = API_URL_11;
export const API_URL_2 = API_URL_22;
export const API_URL_3 = API_URL_33;

