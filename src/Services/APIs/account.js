import { API_URL_1 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";

const Base_URL = API_URL_1;

 console.log('BASEURL-1->',API_URL_1,process.env.REACT_APP_ENV);
// console.log('BASEURL-2->',API_URL_2);
// console.log('BASEURL-3->',API_URL_3);

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

export const Call_Login = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/login`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const ConfirmAccountByOtp = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/confirmAccount`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const ResendConfirmationCode = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/resendConfirmationCode`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const ResendForgotPasswordCode = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/resendForgotPasswordCode`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const ResetPassword = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/resetPassword`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}

export const RefreshToken = async (payload) => {
    try {
        return await ApiServices.post(
            `${Base_URL}auth/refreshToken`,
            payload
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
