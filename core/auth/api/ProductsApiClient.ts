import axios from "axios";
import { Platform } from "react-native";


const STAGE = process.env.EXPO_PUBLIC_STAGE || 'dev';
const verifyApiUrl = () => {
    if (STAGE === 'prod') {
        return process.env.EXPO_PUBLIC_API_URL;
    }
    const platform = Platform.OS;

    const platformUrl = {
        android: process.env.EXPO_PUBLIC_API_URL_ANDROID,
        ios: process.env.EXPO_PUBLIC_API_URL_IOS,
    }

    return platformUrl[platform as keyof typeof platformUrl];

}
export const API_URL = verifyApiUrl();

console.log({ API_URL, STAGE });


const productsApiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export {
    productsApiClient
};
