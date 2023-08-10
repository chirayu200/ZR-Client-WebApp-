import {ApiServices} from "../ApiServices";

const Base_URL =
    process.env.CLIENT_BASE_URL ||
    "https://wdmo3ttdtb.execute-api.us-east-1.amazonaws.com/dev/api/";
export const Call_Signup = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/signUpParent`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}





