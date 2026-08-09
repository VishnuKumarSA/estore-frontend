import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {

    return (
        <div className="min-h-screen flex bg-gray-50">

            <AdminSidebar />

            <main className="flex-1 p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
                <Outlet />
            </main>

        </div>
    );
};

export default AdminLayout;