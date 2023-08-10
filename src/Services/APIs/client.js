import {ApiServices} from "../ApiServices";

// const Base_URL =
//     process.env.CLIENT_BASE_URL ||
//     "https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/";
// const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
export const GetClientDetailByEmailId = async (email) => {
    const encodedEmail = encodeURIComponent(email);
    try {
        return await ApiServices.get(
            `https://vtqf4ke0yj.execute-api.us-east-1.amazonaws.com/dev
/client/getClientDetailsByEmailId?email=${encodedEmail}`
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
            `https://ifcxqbb98k.execute-api.us-east-1.amazonaws.com/dev
/schedule/getAllPets?clientId=${encodedClientUd}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}