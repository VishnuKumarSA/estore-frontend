import React, { useEffect, useState } from "react";
import { CommonAPI } from "../../services.js/api";
import { useParams } from "react-router-dom";



const OrderDetails = () => {

    const [orderDetails, setOrderDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getOrdersDetails = async () => {
            try {
                const res = await CommonAPI('orders/' + id);
                setOrderDetails(res.data.order);
            } catch (e) {
                console.log(e);
            }
        }
        getOrdersDetails();
    }, [id]);


    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">

                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                        <span className="text-xs font-medium text-gray-400">Order Summary</span>
                    </div>

                    {orderDetails?.order_items?.map((details) => (

                        <div key={details.id} className="space-y-5">

                            <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-100 mb-4 hover:shadow-sm transition">

                                <div className="flex items-center gap-5">

                                    <img
                                        src={`${process.env.REACT_APP_IMAGE_URL}${details.product.image}`}
                                        alt={details.product.name}
                                        className="w-24 h-24 rounded-xl border border-gray-200 object-cover shadow-sm"
                                    />

                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-lg">
                                            {details.product.name}
                                        </h3>

                                        <p className="text-sm text-gray-500 mt-2">
                                            Quantity : <span className="font-medium text-gray-700">{details.quantity}</span>
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Price : <span className="font-medium text-gray-700">${details.price}</span>
                                        </p>
                                    </div>

                                </div>

                                <div className="text-right">
                                    <p className="font-bold text-xl text-gray-900">
                                        ${details.subtotal}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}


                    {/* Summary */}
                    <div className="mt-8 bg-gray-50 rounded-xl p-6 space-y-4 border border-gray-100">

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="font-medium text-gray-800">${orderDetails.subtotal}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Discount</span>
                            <span className="font-medium text-green-600">$0.00</span>
                        </div>

                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Shipping</span>
                            <span className="font-medium text-green-600">Free</span>
                        </div>

                        <div className="flex justify-between border-t border-dashed border-gray-300 pt-4 text-xl font-bold text-gray-900">
                            <span>Grand Total</span>
                            <span className="text-blue-600">${orderDetails.grand_total}</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderDetails
