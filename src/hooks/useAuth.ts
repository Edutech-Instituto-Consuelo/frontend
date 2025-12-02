interface AuthContext {
    user: {
        role: string;
    } | null;
    loading: boolean;
}

export function useAuth(): AuthContext {
    return { user: null, loading: false };
}