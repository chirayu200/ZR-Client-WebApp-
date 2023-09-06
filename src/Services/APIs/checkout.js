import { API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_3;

const locationId = encodeURIComponent(getLocalData('locationId'));
export const GetAllBuyCredits = async (payload) => {
    console.log(payload);
    const encodedCategoryId = encodeURIComponent(payload.categoryId);
    const encodedServiceId = encodeURIComponent(payload.serviceId);
    try {
        return await ApiServices.get(
            `${Base_URL}pricing-options?locationId=${locationId}&categoryId=${encodedCategoryId}&services=${encodedServiceId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }


}
export const GetCategory = async () => {
    // console.log(payload);
    try {
        return await ApiServices.get(
            `${Base_URL}services/getAllServiceCategories?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const getAllService = async () => {
    try {
        return await ApiServices.get(
            `${Base_URL}services/getAllServices?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }

}
