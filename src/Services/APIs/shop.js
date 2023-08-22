import { API_URL_3 } from "../../Utils/constants";
import { ApiServices } from "../ApiServices";
import { getLocalData } from "../../Utils";

const Base_URL = API_URL_3;

const locationId = encodeURIComponent(getLocalData('locationId'));
export const GetAllBundles = async () => {

    try {
        return await ApiServices.get(
            `${Base_URL}bundles?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetBundleDetail = async (payload) => {
    const bundleId = encodeURIComponent(payload.bundleId);
    try {
        return await ApiServices.get(
            `${Base_URL}bundles/getBundleDetails?bundleId=${bundleId}&locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllMemberships = async () => {

    try {
        return await ApiServices.get(
            `${Base_URL}memberships/allMembership?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetMembershipDetail = async (payload) => {
    const membershipId = encodeURIComponent(payload.sortKey);
    try {
        return await ApiServices.get(
            `${Base_URL}memberships/membershipDetail?locationId=${locationId}&id=${membershipId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetOrderHistory = async (clientId) => {
    console.log("clientId in service", clientId);
    //    const client_id= encodeURIComponent(clientId)
    const client_id = '%23CLIENT%232T3zDcVrta6fyfUuEYmnPnhPkwY'
    try {
        return await ApiServices.get(
            `${Base_URL}checkout/getOrderHistory?locationId=${locationId}&clientId=${client_id}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetAllFeaturedItems = async () => {

    try {
        return await ApiServices.get(
            `${Base_URL}featured-items/getAllFeaturedItems?locationId=${locationId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}
export const GetFeaturedItemDetail = async (payload) => {
    const featuredId = encodeURIComponent(payload.sortKey);
    try {
        return await ApiServices.get(
            `${Base_URL}featured-items/getFeaturedItemByID?locationId=${locationId}&id=${featuredId}`
        );

    } catch (error) {
        console.error(error.message);
        return error;

    }
}