// providers/AuthProvider.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
    isAuthenticated: boolean;
    user: { id: number; username?: string; firstName: string; lastName?: string } | null;
    login: () => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{
        id: number;
        username?: string;
        firstName: string;
        lastName?: string;
    } | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
            setIsAuthenticated(true);
        }
    }, []);

    // Авторизация через Telegram
    const login = () => {
        const tg = (window as any).Telegram?.WebApp;

        if (tg && tg.initDataUnsafe?.user) {
            const telegramUser = tg.initDataUnsafe.user;
            const userData = {
                id: telegramUser.id,
                username: telegramUser.username || "",
                firstName: telegramUser.first_name,
                lastName: telegramUser.last_name || "",
            };

            setUser(userData);
            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(userData));
        } else {
            alert("Не удалось загрузить данные пользователя из Telegram");
        }
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};