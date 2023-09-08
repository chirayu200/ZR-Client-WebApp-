import { API_URL_2, API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_2;
const clientId = encodeURIComponent(getLocalData('clientId'));
const locationId = encodeURIComponent(getLocalData('locationId'));

export const GetClientDetailByEmailId = async (email) => {
    const encodedEmail = encodeURIComponent(email);
    try {
        return await ApiServices.get(
            `${Base_URL}client/getClientDetailsByEmailId?email=${encodedEmail}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllPets = async () => {

    try {
        return await ApiServices.get(
            `${API_URL_3}schedule/getAllPets?clientId=${clientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllClients = async () => {

    try {
        return await ApiServices.get(
            `${API_URL_2}client?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}