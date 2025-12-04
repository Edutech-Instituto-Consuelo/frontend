interface AuthContext {
    tipo_usuario: string;
}

export function useAuth(): AuthContext|null {
    const userLocal = localStorage.getItem('user');
    const user = userLocal ? JSON.parse(userLocal) : null;

    return user;
}