import { API_URL_2,API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_2;
const locationId = encodeURIComponent(getLocalData('locationId'));
const clientId = encodeURIComponent(getLocalData('clientId'));

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
export const CreateDogProfile = async (data) => {

    try {
        return await ApiServices.post(
            `${Base_URL}client/addChild`,data
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const UpdateDogProfile = async (payload, petId) => {
    console.log("Pet id is as follows",petId)
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
export const getClientProfileProgress = async () => {

   // const encodedClientId = encodeURIComponent(clientId);
    try {
        return await ApiServices.get(
            `${API_URL_3}client/getClientProfileProgress?locationId=${locationId}&clientId=${clientId}`
           // `https://ifcxqbb98k.execute-api.us-east-1.amazonaws.com/dev/client/getClientProfileProgress?locationId=${locationId}&clientId=${clientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}