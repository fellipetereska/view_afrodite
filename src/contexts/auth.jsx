import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Função de Login
    const signin = async (user) => {
        setUser(user);
        setIsAuthenticated(true);
    };

    // Função de Logout
    const signout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{
            user, setUser,
            isAuthenticated, setIsAuthenticated,
            signin, signout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}