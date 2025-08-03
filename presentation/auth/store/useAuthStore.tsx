import { User } from "@/core/auth/interfaces/user";
import { create } from "zustand";

export type AuthStatus = 'authenticated' | 'checking' | 'unauthenticated';

export interface AuthState {
    status: AuthStatus;
    token: string | null;
    user?: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkStatus: (token: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
    status: 'checking',
    token: null,
    user: null,
    login: async (email: string, password: string) => {
        return true;
    },
    logout: () => {
    },
    checkStatus: async (token: string) => {
        
    },
}));