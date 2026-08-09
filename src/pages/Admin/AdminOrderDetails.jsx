import React, {
    useCallback,
    useEffect,
    useState
} from "react";

import { CommonAPI } from "../../services.js/api";
import { Link, useParams } from "react-router-dom";


const AdminOrderDetails = () => {

    const { id } = useParams();

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);


    // =========================
    // Get Order
    // =========================

    const getOrder = useCallback(async () => {

        try {

            setLoading(true);

            const res = await CommonAPI(
                `admin/orders/${id}`
            );

            console.log(
                "Admin Order Details:",
                res
            );


            if (res?.status === 200) {

                setOrder(
                    res?.data?.order || res?.data
                );

            }

        } catch (error) {

            console.error(
                "Order details error:",
                error
            );

            setOrder(null);

        } finally {

            setLoading(false);

        }

    }, [id]);


    // =========================
    // Load Order
    // =========================

    useEffect(() => {

        getOrder();

    }, [getOrder]);


    // =========================
    // Loading
    // =========================

    if (loading) {

        return (

            <div className="flex items-center justify-center py-24">

                <p className="text-gray-400 text-sm">
                    Loading order...
                </p>

            </div>

        );

    }


    // =========================
    // Not Found
    // =========================

    if (!order) {

        return (

            <div className="flex flex-col items-center justify-center py-24">

                <p className="text-gray-400 text-sm mb-4">
                    Order not found
                </p>


                <Link
                    to="/admin/orders"
                    className="text-blue-600 text-sm hover:underline"
                >
                    ← Back to Orders
                </Link>

            </div>

        );

    }


    // =========================
    // Status Class
    // =========================

    const statusPillClass = {

        Confirmed:
            "bg-blue-50 text-blue-600",

        Delivered:
            "bg-green-50 text-green-600",

        Pending:
            "bg-yellow-50 text-yellow-700",

        Shipped:
            "bg-purple-50 text-purple-600",

        Cancelled:
            "bg-red-50 text-red-600",

    }[order.order_status]
        || "bg-gray-100 text-gray-600";


    return (

        <div>

            {/* =========================
                Header
            ========================= */}

            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">

                <div>

                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">

                        Order #{order.order_number}

                    </h1>


                    <p className="text-gray-500 text-sm mt-1">

                        Order details

                    </p>

                </div>


                <Link
                    to="/admin/orders"
                    className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >

                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >

                        <path d="M19 12H5M12 19l-7-7 7-7" />

                    </svg>

                    Back to Orders

                </Link>

            </div>


            {/* =========================
                Customer + Shipping
            ========================= */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">


                {/* Customer */}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                    <h2 className="font-semibold text-base text-gray-900 mb-4">
                        Customer Details
                    </h2>


                    <div className="space-y-3 text-sm">


                        <div className="flex justify-between gap-4">

                            <span className="text-gray-500">
                                Name
                            </span>

                            <span className="font-medium text-gray-900 text-right">

                                {order.first_name || "-"}{" "}

                                {order.last_name || ""}

                            </span>

                        </div>


                        <div className="flex justify-between gap-4">

                            <span className="text-gray-500">
                                Email
                            </span>

                            <span className="font-medium text-gray-900 text-right break-all">

                                {order.email || "-"}

                            </span>

                        </div>


                        <div className="flex justify-between gap-4">

                            <span className="text-gray-500">
                                Mobile
                            </span>

                            <span className="font-medium text-gray-900">

                                {order.mobile_number || "-"}

                            </span>

                        </div>

                    </div>

                </div>


                {/* Shipping */}

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

                    <h2 className="font-semibold text-base text-gray-900 mb-4">
                        Shipping Address
                    </h2>


                    <div className="text-sm text-gray-600 space-y-1 leading-relaxed">

                        <p>
                            {order.address || "-"}
                        </p>


                        <p>

                            {order.city || "-"}

                            {order.state
                                ? `, ${order.state}`
                                : ""
                            }

                        </p>


                        <p>
                            {order.postal_code || "-"}
                        </p>

                    </div>

                </div>

            </div>


            {/* =========================
                Order Items
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 overflow-hidden">


                <div className="px-6 py-5 border-b border-gray-100">

                    <h2 className="font-semibold text-base text-gray-900">
                        Order Items
                    </h2>

                </div>


                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">


                        <thead className="bg-gray-50/70">

                            <tr>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Product
                                </th>


                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Price
                                </th>


                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Quantity
                                </th>


                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Subtotal
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {(order.order_items || []).map(
                                (item) => (

                                    <tr
                                        key={item.id}
                                    >


                                        {/* Product */}

                                        <td className="px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                {item.product?.image ? (

                                                    <img
                                                        src={`${process.env.REACT_APP_IMAGE_URL}${item.product.image}`} 
                                                        alt={
                                                            item.product?.name ||
                                                            "Product"
                                                        }
                                                        className="w-12 h-12 rounded-lg object-cover border"
                                                    />

                                                ) : (

                                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                                                        No Image
                                                    </div>

                                                )}


                                                <div>

                                                    <p className="text-sm font-medium text-gray-900">

                                                        {item.product?.name || "-"}

                                                    </p>


                                                    {item.product?.sku && (

                                                        <p className="text-xs text-gray-400 mt-1">

                                                            SKU:{" "}
                                                            {item.product.sku}

                                                        </p>

                                                    )}

                                                </div>

                                            </div>

                                        </td>


                                        {/* Price */}

                                        <td className="px-6 py-4 text-sm text-gray-600">

                                            ₹
                                            {Number(
                                                item.price || 0
                                            ).toLocaleString("en-IN")}

                                        </td>


                                        {/* Quantity */}

                                        <td className="px-6 py-4 text-sm text-gray-600">

                                            {item.quantity}

                                        </td>


                                        {/* Subtotal */}

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            ₹
                                            {Number(
                                                item.subtotal || 0
                                            ).toLocaleString("en-IN")}

                                        </td>

                                    </tr>

                                )
                            )}


                            {(order.order_items || []).length === 0 && (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-8 text-sm text-gray-400"
                                    >
                                        No items found
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>


            {/* =========================
                Payment Summary
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 p-6">


                <h2 className="font-semibold text-base text-gray-900 mb-4">
                    Payment Summary
                </h2>


                <div className="max-w-md ml-auto space-y-3 text-sm">


                    {/* Subtotal */}

                    <div className="flex justify-between text-gray-600">

                        <span>
                            Subtotal
                        </span>

                        <span>

                            ₹
                            {Number(
                                order.subtotal || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>


                    {/* Discount */}

                    <div className="flex justify-between text-gray-600">

                        <span>
                            Discount
                        </span>

                        <span>

                            ₹
                            {Number(
                                order.discount || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>


                    {/* Tax */}

                    <div className="flex justify-between text-gray-600">

                        <span>
                            Tax
                        </span>

                        <span>

                            ₹
                            {Number(
                                order.tax || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>


                    {/* Shipping */}

                    <div className="flex justify-between text-gray-600">

                        <span>
                            Shipping
                        </span>

                        <span>

                            ₹
                            {Number(
                                order.shipping_charge || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>


                    {/* Grand Total */}

                    <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-base text-gray-900">

                        <span>
                            Grand Total
                        </span>

                        <span>

                            ₹
                            {Number(
                                order.grand_total || 0
                            ).toLocaleString("en-IN")}

                        </span>

                    </div>

                </div>

            </div>


            {/* =========================
                Payment & Status
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-5 p-6">


                <h2 className="font-semibold text-base text-gray-900 mb-4">
                    Payment & Order Status
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


                    {/* Payment Method */}

                    <div>

                        <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">
                            Payment Method
                        </p>


                        <p className="font-medium mt-1.5 text-sm text-gray-900">

                            {order.payment_method || "-"}

                        </p>

                    </div>


                    {/* Payment Status */}

                    <div>

                        <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">
                            Payment Status
                        </p>


                        <p
                            className={`font-medium mt-1.5 text-sm ${
                                order.payment_status === "Paid"
                                    ? "text-green-600"
                                    : "text-yellow-600"
                            }`}
                        >

                            {order.payment_status || "-"}

                        </p>

                    </div>


                    {/* Order Status */}

                    <div>

                        <p className="text-gray-500 text-xs uppercase tracking-wide font-medium">
                            Order Status
                        </p>


                        <span
                            className={`inline-block mt-1.5 px-3 py-1 rounded-full text-xs font-semibold ${statusPillClass}`}
                        >

                            {order.order_status || "-"}

                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
};


export default AdminOrderDetails;