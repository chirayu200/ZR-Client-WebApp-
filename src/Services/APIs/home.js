import { API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_3;
const locationId = encodeURIComponent(getLocalData('locationId'));

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
export const SearchExploreSchedules = async (text) => {

    try {
        return await ApiServices.get(
            `${Base_URL}schedule/search?searchText=${text}&locationId=${locationId}`,
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllServiceCategories = async (serviceType) => {

    try {
        return await ApiServices.get(
            `${Base_URL}schedule/getAllServiceCategories?locationId=${locationId}&serviceType=${serviceType}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

