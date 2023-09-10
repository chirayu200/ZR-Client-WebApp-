import { API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_3;
const locationId = encodeURIComponent(getLocalData('locationId'));
const clientId =  encodeURIComponent(getLocalData('clientId'));
export const GetAllTrainersAvailability = async (payload) => {
    let obj = {
        locationId,
        ...payload
    }
    try {
        return await ApiServices.post(
            `${Base_URL}schedule/getTrainerAvailability`,
            obj
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const getAllPets = async() =>{
    try {
        return await ApiServices.get(
            `${Base_URL}schedule/getAllPets?clientId=${clientId}`
            
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}


export const getServiceCategories = async (serviceType) =>{
    try {
        return await ApiServices.get(
            `${Base_URL}schedule/getAllServiceCategories?locationId=${locationId}`
            
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}


export const getAllRooms = async () => {
    try {
        return await ApiServices.get(
            `${Base_URL}schedule/getAllRooms?locationId=${locationId}`
            
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const getServiceByCategory = async (categoryId) => {
    const encodedCategoryID = encodeURIComponent(categoryId);
    try {
        return await ApiServices.get(
            `${Base_URL}services/getAllServices?locationId=${locationId}&categoryId=${encodedCategoryID}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }

}



