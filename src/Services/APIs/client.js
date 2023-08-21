import {ApiServices} from "../ApiServices";

// const Base_URL =
//     process.env.CLIENT_BASE_URL ||
//     "https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/";
// const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
export const GetClientDetailByEmailId = async (email) => {
    const encodedEmail = encodeURIComponent(email);
    try {
        return await ApiServices.get(
            `https://937gsyyg89.execute-api.us-east-1.amazonaws.com/qa/client/getClientDetailsByEmailId?email=${encodedEmail}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllPets = async (clientUd) => {
    const encodedClientUd = encodeURIComponent('#CLIENT#2TeCoe5LWg3ADcJc5uE5Y67Vbi1');
    try {
        return await ApiServices.get(
            `https://q4m1fcya9h.execute-api.us-east-1.amazonaws.com/qa/schedule/getAllPets?clientId=${encodedClientUd}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}