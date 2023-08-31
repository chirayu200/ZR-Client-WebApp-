import { API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_3;
const locationId = encodeURIComponent(getLocalData('locationId'));

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





