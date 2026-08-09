import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

const AdminRoute = () => {

    const { isAdmin, loading } = useAdmin();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;