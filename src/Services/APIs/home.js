import {ApiServices} from "../ApiServices";

const Base_URL =
    process.env.CLIENT_BASE_URL ||
    "https://q4m1fcya9h.execute-api.us-east-1.amazonaws.com/qa/";
// const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
export const GetAllExploreSchedules = async (payload) => {

    try {
        return await ApiServices.post(
            `${Base_URL}schedule/getAppointments`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetExploreScheduleDetail = async (payload) => {

    try {
        return await ApiServices.post(
            `${Base_URL}schedule/getAppointments`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

