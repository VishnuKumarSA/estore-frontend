import React, { useEffect, useState } from "react";
import { CommonAPI, CartAPI } from "../../services.js/api";
import { Link } from "react-router-dom";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);


    // =========================
    // Get All Orders
    // =========================

    const getOrders = async () => {

        try {

            setLoading(true);

            const res = await CommonAPI("admin/orders");

            console.log("Admin Orders:", res);

            if (res?.status === 200) {

                setOrders(
                    res?.data?.order || []
                );

            }

        } catch (error) {

            console.error(
                "Orders fetch error:",
                error
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getOrders();

    }, []);


    // =========================
    // Update Order Status
    // =========================

    const handleStatusChange = async (
        orderId,
        status
    ) => {

        try {

            setUpdatingId(orderId);

            const res = await CartAPI(
                `admin/orders/${orderId}/status`,
                {
                    order_status: status
                },
                "PATCH"
            );

            console.log(
                "Status update:",
                res
            );


            if (res?.status === 200) {

                setOrders((prevOrders) =>

                    prevOrders.map((order) =>

                        order.id === orderId
                            ? {
                                ...order,
                                order_status: status
                            }
                            : order

                    )

                );

            }

        } catch (error) {

            console.error(
                "Status update error:",
                error
            );

        } finally {

            setUpdatingId(null);

        }
    };


    // =========================
    // Status Style
    // =========================

    const getStatusClass = (status) => {

        switch (status) {

            case "Pending":
                return "bg-yellow-50 text-yellow-700 border-yellow-200";

            case "Confirmed":
                return "bg-blue-50 text-blue-700 border-blue-200";

            case "Shipped":
                return "bg-purple-50 text-purple-700 border-purple-200";

            case "Delivered":
                return "bg-green-50 text-green-700 border-green-200";

            case "Cancelled":
                return "bg-red-50 text-red-700 border-red-200";

            default:
                return "bg-gray-50 text-gray-700 border-gray-200";
        }
    };


    return (

        <div>

            {/* =========================
                Header
            ========================= */}

            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Orders
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Manage customer orders
                </p>

            </div>


            {/* =========================
                Orders Table
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        {/* Header */}

                        <thead className="bg-gray-50/70">

                            <tr>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Order
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Customer
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Date
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Payment
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Amount
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Status
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        {/* Body */}

                        <tbody className="divide-y divide-gray-100">

                            {/* Loading */}

                            {loading ? (

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        Loading orders...
                                    </td>

                                </tr>

                            ) : orders.length === 0 ? (

                                /* Empty */

                                <tr>

                                    <td
                                        colSpan="7"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        No orders found
                                    </td>

                                </tr>

                            ) : (

                                /* Orders */

                                orders.map((order) => (

                                    <tr
                                        key={order.id}
                                        className="hover:bg-gray-50/60 transition-colors"
                                    >

                                        {/* Order Number */}

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            #{order.order_number}

                                        </td>


                                        {/* Customer */}

                                        <td className="px-6 py-4">

                                            <div className="text-sm font-medium text-gray-900">

                                                {order.first_name}{" "}
                                                {order.last_name}

                                            </div>

                                            <div className="text-xs text-gray-400 mt-0.5">

                                                {order.email}

                                            </div>

                                        </td>


                                        {/* Date */}

                                        <td className="px-6 py-4 text-sm text-gray-500">

                                            {order.ordered_date}

                                        </td>


                                        {/* Payment */}

                                        <td className="px-6 py-4">

                                            <div className="text-sm">

                                                <div className="font-medium text-gray-800">
                                                    {order.payment_method}
                                                </div>

                                                <span
                                                    className={`text-xs font-medium ${
                                                        order.payment_status === "Paid"
                                                            ? "text-green-600"
                                                            : "text-yellow-600"
                                                    }`}
                                                >
                                                    {order.payment_status}
                                                </span>

                                            </div>

                                        </td>


                                        {/* Amount */}

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            ₹
                                            {Number(
                                                order.grand_total || 0
                                            ).toLocaleString("en-IN")}

                                        </td>


                                        {/* Status */}

                                        <td className="px-6 py-4">

                                            <select
                                                value={
                                                    order.order_status || ""
                                                }
                                                disabled={
                                                    updatingId === order.id
                                                }
                                                onChange={(e) =>
                                                    handleStatusChange(
                                                        order.id,
                                                        e.target.value
                                                    )
                                                }
                                                className={`px-3 py-1.5 rounded-lg border text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/30 disabled:opacity-50 ${getStatusClass(
                                                    order.order_status
                                                )}`}
                                            >

                                                <option value="Pending">
                                                    Pending
                                                </option>

                                                <option value="Confirmed">
                                                    Confirmed
                                                </option>

                                                <option value="Shipped">
                                                    Shipped
                                                </option>

                                                <option value="Delivered">
                                                    Delivered
                                                </option>

                                                <option value="Cancelled">
                                                    Cancelled
                                                </option>

                                            </select>

                                        </td>


                                        {/* Action */}

                                        <td className="px-6 py-4 text-right">

                                            <Link
                                                to={`/admin/orders/${order.id}`}
                                                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                                            >
                                                View
                                            </Link>

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

export default Orders;