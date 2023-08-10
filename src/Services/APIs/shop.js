import {ApiServices} from "../ApiServices";

const Base_URL =
    process.env.CLIENT_BASE_URL ||
    "https://ifcxqbb98k.execute-api.us-east-1.amazonaws.com/dev/";
const locationId = encodeURIComponent('LOC#e857e7a7-4fde-4d2a-baad-114d6a85ff63');
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