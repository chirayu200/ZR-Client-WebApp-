import { ApiServices } from "../ApiServices";
import { API_URL_1 } from '../../Utils/constants';
import { API_URL_3 } from '../../Utils/constants';

const Base_URL = API_URL_1;
const BASE_URL_1 = API_URL_3;

export const changePassword = async (cognitoId,body) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/changePassword?cognitoId=${cognitoId}`,
            body

        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}


export const getFeedBack = async (body) => {
    try {
        return await ApiServices.post(
            `${BASE_URL_1}client/addFeedback`,
            body

        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}