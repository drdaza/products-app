export const UNAUTHENTICATED = 'unauthenticated';
export const CHECKING = 'checking';
export const AUTHENTICATED = 'authenticated';

export type AuthStatus = typeof UNAUTHENTICATED | typeof CHECKING | typeof AUTHENTICATED;
