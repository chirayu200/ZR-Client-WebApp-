import {ApiServices} from "../ApiServices";

// const Base_URL =
//     process.env.CLIENT_BASE_URL ||
//     "https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/";
const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
export const GetAllBuyCredits = async (payload) => {
    const encodedCategoryId = encodeURIComponent(payload.categoryId);
    const encodedServiceId = encodeURIComponent(payload.serviceId);
    try {
        return await ApiServices.get(
            `https://ifcxqbb98k.execute-api.us-east-1.amazonaws.com/dev/pricing-options?locationId=${locationId}&categoryId=${encodedCategoryId}&services=${encodedServiceId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

