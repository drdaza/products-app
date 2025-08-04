import { User } from "@/core/auth/interfaces/user";
import { create } from "zustand";


import { AUTHENTICATED, AuthStatus, CHECKING, UNAUTHENTICATED } from "@/constants/AuthStatuses";
import { checkStatus, login } from "@/core/auth/actions/auth-actions";

export interface AuthState {
    status: AuthStatus;
    token: string | null;
    user?: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    checkStatus: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => {
    const updateAuthState = ({ user, token }: { user: User | null, token: string | null }) => {
        if (!user || !token) {
            set({ status: UNAUTHENTICATED, user: null, token: null });
            return false;
        }
        set({ user, token, status: AUTHENTICATED });
        return true;
    };

    return {
        status: CHECKING,
        token: null,
        user: null,
        login: async (email: string, password: string) => {
            const response = await login(email, password);
            return updateAuthState({ user: response?.user ?? null, token: response?.token ?? null });
        },
        logout: () => {
            set({ status: UNAUTHENTICATED, user: null, token: null });
        },
        checkStatus: async () => {
            const response = await checkStatus();
            console.log({ response });

            updateAuthState({ user: response?.user ?? null, token: response?.token ?? null });
        },
    };
});