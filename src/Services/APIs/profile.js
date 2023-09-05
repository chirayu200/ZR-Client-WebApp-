import { API_URL_2 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_2;
const locationId = encodeURIComponent(getLocalData('locationId'));

export const CheckClientDetail = async (clientId) => {
    const encodedClientId = encodeURIComponent(clientId);
    console.log(locationId, "locationId")
    try {
        return await ApiServices.get(
            `${Base_URL}client/getClientDetails?locationId=${locationId}&clientId=${encodedClientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const UpdateClientDetail = async (payload, clientId) => {
    const encodedClientId = encodeURIComponent(clientId);
    try {
        return await ApiServices.put(
            `${Base_URL}client?id=${encodedClientId}`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetDogDetail = async (clientId, childId) => {
    console.log(clientId, 'clientIdclientIdclientId');
    console.log(childId, 'clientIdclientIdclientId');

    const encodedClientId = encodeURIComponent(clientId);
    const encodedChildId = encodeURIComponent(childId);
    try {
        return await ApiServices.get(
            `${Base_URL}client/getChildDetails?childId=${encodedChildId}&clientId=${encodedClientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const CreateDogProfile = async (payload, clientId) => {

    try {
        return await ApiServices.post(
            `${Base_URL}client/addChild`, payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const UpdateDogProfile = async (payload, petId) => {
    const encodedPetId = encodeURIComponent(petId);
    try {
        return await ApiServices.put(
            `${Base_URL}client/updateChild?id=${encodedPetId}`, payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllBreedList = async () => {

    try {
        return await ApiServices.get(
            `${Base_URL}breed-list`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
