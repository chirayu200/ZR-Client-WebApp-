import { ApiServices } from "../ApiServices";
import {API_URL_3} from '../../Utils/constants';

const Base_URL= API_URL_3;

export const getInitialSettings = async (ClientId,locationId) =>{
    const encodedClientId = encodeURIComponent(ClientId);
    const encodedLocationId = encodeURIComponent(locationId);
    try {
        return await ApiServices.get(
            `${Base_URL}/client/getSettingByClientId?clientId=${encodedClientId}&locationId=${encodedLocationId}`
            
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}


export const updateSettings = async (clientId,franchiseeId,payload) => {

    const encodedClientId = encodeURIComponent(clientId);
    const encodedFranchiseeId = encodeURIComponent(franchiseeId);
    try {
        return await ApiServices.put(
            `${Base_URL}/client/updateSetting?clientId=${encodedClientId}&franchiseeIdId=${encodedFranchiseeId}`,
            payload
            
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }

}