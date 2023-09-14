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
            `${Base_URL}client/updateClientDetails?id=${encodedClientId}`,
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


export const CreateDogProfile = async (data) => {
  try {
    let formData = new FormData();
    formData.append('clientId', data.clientId);
    formData.append('profileImage', data.profileImage);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('gender', data.gender);
    formData.append('breed', data.breed);
    formData.append('birthDate', data.birthDate);
    formData.append('strangers', data.strangers);
    formData.append('possessive', data.possessive);
    formData.append('biting', data.biting);
    formData.append('barking', data.barking);
    formData.append('advanced', data.advanced);
    formData.append('acquisitionSource', data.acquisitionSource);
    formData.append('notes', data.notes);
    formData.append('veterinarian', data.veterinarian);
    formData.append('allergies', data.allergies);
    formData.append('social', data.social);
    formData.append('rabiesExpiration', data.rabiesExpiration);
    formData.append('bordetellaExpiration', data.bordetellaExpiration);
    formData.append('dhppExpiration', data.dhppExpiration);
    formData.append('createdBy', data.createdBy);
    formData.append('status', data.status);

    const response = await ApiServices.post(`${Base_URL}client/addChild`, formData);

    return response;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};
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
export const getClientTrophies = async () => {

    try {
        return await ApiServices.get(
            `${API_URL_3}trophy/getAllTrophyByclient?clientId=${clientId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
