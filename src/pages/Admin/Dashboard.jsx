import React, { useEffect, useState } from "react";
import { CommonAPI } from "../../services.js/api";

const Dashboard = () => {

    const [dashboard, setDashboard] = useState({
        total_products: 0,
        total_customers: 0,
        total_orders: 0,
        total_sales: 0,
    });

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const getDashboard = async () => {

            try {

                const res = await CommonAPI("admin/dashboard");

                console.log(res);

                if (res?.status === 200) {

                    setDashboard(
                        res.data.dashboard || {}
                    );

                    setOrders(
                        res.data.recent_orders || []
                    );
                }

            } catch (error) {

                console.error(
                    "Failed to fetch dashboard:",
                    error
                );

            } finally {

                setLoading(false);

            }
        };

        getDashboard();

    }, []);


    const statusStyles = {
        Confirmed: "bg-blue-50 text-blue-600",
        Delivered: "bg-green-50 text-green-600",
        Pending: "bg-yellow-50 text-yellow-700",
        Shipped: "bg-purple-50 text-purple-600",
        Cancelled: "bg-red-50 text-red-600",
    };

    const stats = [
        {
            label: "Total Products",
            value: dashboard.total_products,
            iconBg: "bg-blue-50 text-blue-600",
            icon: (
                <path d="M21 8l-9-5-9 5 9 5 9-5Z M3 8v8l9 5 9-5V8 M12 13v8" />
            ),
        },
        {
            label: "Total Orders",
            value: dashboard.total_orders,
            iconBg: "bg-purple-50 text-purple-600",
            icon: (
                <path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 7H5.6" />
            ),
        },
        {
            label: "Customers",
            value: dashboard.total_customers,
            iconBg: "bg-amber-50 text-amber-600",
            icon: (
                <path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            ),
        },
        {
            label: "Total Sales",
            value: `₹${Number(dashboard.total_sales || 0).toLocaleString("en-IN")}`,
            iconBg: "bg-green-50 text-green-600",
            icon: (
                <path d="M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            ),
        },
    ];


    return (
        <div>

            {/* Page Header */}
            <div className="mb-7">

                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Dashboard
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Overview of your e-store
                </p>

            </div>


            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {stats.map((stat) => (

                    <div
                        key={stat.label}
                        className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >

                        <div className="flex items-center justify-between">

                            <p className="text-gray-500 text-sm font-medium">
                                {stat.label}
                            </p>

                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.iconBg}`}>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {stat.icon}
                                </svg>
                            </div>

                        </div>

                        <h2 className="text-3xl font-bold mt-4 text-gray-900">
                            {loading ? (
                                <span className="inline-block h-8 w-16 bg-gray-100 rounded-lg animate-pulse" />
                            ) : (
                                stat.value
                            )}
                        </h2>

                    </div>

                ))}

            </div>


            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-6 overflow-hidden">

                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                        Recent Orders
                    </h2>
                    <span className="text-xs font-medium text-gray-400">
                        Latest activity
                    </span>
                </div>


                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        <thead className="bg-gray-50/70">

                            <tr>
                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Order</th>
                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Customer</th>
                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Date</th>
                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Amount</th>
                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Status</th>
                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {loading ? (

                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-gray-400 text-sm">
                                        Loading orders...
                                    </td>
                                </tr>

                            ) : orders.length === 0 ? (

                                <tr>
                                    <td colSpan="5" className="text-center py-10 text-gray-400 text-sm">
                                        No orders found
                                    </td>
                                </tr>

                            ) : (

                                orders.map((order) => (

                                    <tr key={order.id} className="hover:bg-gray-50/60 transition-colors">

                                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">
                                            #{order.order_number}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {order.first_name} {order.last_name}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {order.ordered_date}
                                        </td>

                                        <td className="px-6 py-4 font-medium text-sm text-gray-900">
                                            ₹{Number(order.grand_total || 0).toLocaleString("en-IN")}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    statusStyles[order.order_status] || "bg-gray-100 text-gray-600"
                                                }`}
                                            >
                                                {order.order_status}
                                            </span>
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;