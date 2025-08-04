import { productsApiClient } from "../api/ProductsApiClient";
import { User } from "../interfaces/user";

export interface AuthResponse {
    id: string;
    fullName: string;
    email: string;
    token: string;
    isActive: boolean;
    roles: string[];
}


const returnUserToken = (user: AuthResponse): { user: User, token: string } => {
    const { token, ...properties } = user;
    const userFromResponse: User = {
        ...properties,
    }
    return { user: userFromResponse, token };
}


export const login = async (email: string, password: string) => {

    email = email.toLowerCase()

    try {
        const { data } = await productsApiClient.post<AuthResponse>('/auth/login', { email, password });
        return returnUserToken(data);
    } catch (error) {
        console.log(error);
        // throw new Error('Invalid credentials');
        return null;
    }
}

export const checkStatus = async () => {
    try {
        const { data } = await productsApiClient.get<AuthResponse>('/auth/check-status');

        return returnUserToken(data);
    } catch (error) {

        return null;
    }
}

export interface LoginResponse {
    user: AuthResponse;
}