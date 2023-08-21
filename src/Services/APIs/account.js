import {ApiServices} from "../ApiServices";

const Base_URL =
    process.env.CLIENT_BASE_URL || "https://gxh3fnvl9i.execute-api.us-east-1.amazonaws.com/qa/api/";
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
