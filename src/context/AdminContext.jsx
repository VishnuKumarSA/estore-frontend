import React, { createContext, useContext, useMemo } from "react";
import { useAuth } from "./AuthContext";

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {

    const { user, loading } = useAuth();

    const isAdmin = user?.role === "admin";

    const value = useMemo(() => ({
        isAdmin,
        loading,
    }), [isAdmin, loading]);

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    return useContext(AdminContext);
};