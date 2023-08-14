import {ApiServices} from "../ApiServices";

const Base_URL =
    process.env.CLIENT_BASE_URL ||
    "https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev/";
const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
export const CheckClientDetail = async (clientId) => {
    const encodedClientId = encodeURIComponent(clientId);
    try {
        return await ApiServices.get(
            `${Base_URL}client/getClientDetails?locationId=${locationId}&clientId=${encodedClientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const UpdateClientDetail = async (payload) => {

    try {
        return await ApiServices.put(
            `${Base_URL}client?id=${payload.id}`,
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
export const CreateDogProfile = async (payload) => {

    try {
        return await ApiServices.post(
            `${Base_URL}client/addChild`, payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const UpdateDogProfile = async (payload) => {

    try {
        return await ApiServices.put(
            `${Base_URL}client/updateChild?id=${payload.id}`, payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllBreedList = async () => {

    try {
        return await ApiServices.get(
            `https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev/breed-list`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
