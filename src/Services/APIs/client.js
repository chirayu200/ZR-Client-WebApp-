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

export const getClientProfileProgress = async () => {   
     try {
         return await ApiServices.get(
             `${API_URL_3}client/getClientProfileProgress?locationId=${locationId}&clientId=${clientId}`
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }
 
export const getPetProfileProgress = async (childId) => {   
    const encodedchildId= encodeURIComponent(childId);

     try {
         return await ApiServices.get(
             `${API_URL_3}client/getChildProfileProgress?childId=${encodedchildId}&clientId=${clientId}`
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }
 
export const AddTeamMembers = async (obj) => {  
     try {
         return await ApiServices.post(
             `${API_URL_3}client/addFamilyMember`,obj
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }
export const searchTeamMembers = async () => {
     try {
         return await ApiServices.get(
             `${API_URL_2}client?locationId=${locationId}`
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }
export const getYourFamilyMembers = async () => {
     try {
         return await ApiServices.get(
             `${API_URL_3}client/getFamilyByClient?locationId=${locationId}&clientId=${clientId}`
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }
export const getFamilyPets = async () => {
     try {
         return await ApiServices.get(
             `${API_URL_3}client/getFamilyWithPet?locationId=${locationId}&clientId=${clientId}`
         );
 
     } catch (error) {
         console.error(error.message);
         return error;
 
     }
 }