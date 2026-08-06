import React, { useEffect } from 'react'
import { CommonAPI } from '../../services.js/api';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
    const { id } = useParams()

    useEffect(() => {

        const getOrders = async () => {
            try {
                const res = await CommonAPI('orders/' + id);
                console.log(res);
            } catch (e) {
                console.log(e);
            }
        }
        getOrders();
    }, [id])


    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Track Order</h2>
                            <p className="text-sm text-gray-500 mt-1">Order #ORD-2026-00001</p>
                        </div>
                        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Confirmed
                        </span>
                    </div>

                    {/* Product Info */}
                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 mt-6">
                        <img
                            src=""
                            alt="Product"
                            className="w-16 h-16 rounded-lg border border-gray-200 object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900 text-base">Head-set-2</h3>
                            <p className="text-sm text-gray-500 mt-1">Expected Delivery: <span className="font-medium text-gray-700">08 Aug 2026</span></p>
                        </div>
                    </div>

                    {/* Stepper */}
                    <div className="mt-10 mb-4">
                        <div className="flex items-center justify-between relative">

                            <div className="absolute top-4 left-0 w-full h-1 bg-gray-200 rounded-full">
                                <div className="h-1 bg-blue-600 rounded-full" style={{ width: "10%" }}></div>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center">Pending</p>
                                <p className="text-[10px] text-gray-400">03 Aug</p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center">Order Confirmed</p>
                                <p className="text-[10px] text-gray-400">03 Aug</p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                </div>
                                <p className="text-xs font-semibold text-gray-900 text-center">Processing</p>
                                <p className="text-[10px] text-gray-400">04 Aug</p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                </div>
                                <p className="text-xs font-medium text-gray-400 text-center">Shipped</p>
                                <p className="text-[10px] text-gray-300">Pending</p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                                </div>
                                <p className="text-xs font-medium text-gray-400 text-center">Delivered</p>
                                <p className="text-[10px] text-gray-300">Pending</p>
                            </div>

                        </div>
                    </div>

                    {/* Timeline detail list */}
                    <div className="mt-10 space-y-6 border-t border-dashed border-gray-200 pt-6">
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                                <div className="w-0.5 flex-1 bg-gray-200"></div>
                            </div>
                            <div className="pb-2">
                                <p className="text-sm font-semibold text-gray-900">Order Pending</p>
                                <p className="text-xs text-gray-500 mt-1">Your order has been Waiting for response</p>
                                <p className="text-[11px] text-gray-400 mt-1">03 Aug 2026, 11:20 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                <div className="w-0.5 flex-1 bg-gray-200"></div>
                            </div>
                            <div className="pb-2">
                                <p className="text-sm font-semibold text-gray-900">Order Confirmed</p>
                                <p className="text-xs text-gray-500 mt-1">Your order has been placed successfully</p>
                                <p className="text-[11px] text-gray-400 mt-1">03 Aug 2026, 11:20 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                <div className="w-0.5 flex-1 bg-gray-200"></div>
                            </div>
                            <div className="pb-2">
                                <p className="text-sm font-semibold text-gray-900">Processing</p>
                                <p className="text-xs text-gray-500 mt-1">Seller is preparing your item for shipment</p>
                                <p className="text-[11px] text-gray-400 mt-1">04 Aug 2026, 09:15 AM</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                <div className="w-0.5 flex-1 bg-gray-200"></div>
                            </div>
                            <div className="pb-2">
                                <p className="text-sm font-semibold text-gray-400">Shipped</p>
                                <p className="text-xs text-gray-400 mt-1">Your item will be shipped soon</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-400">Delivered</p>
                                <p className="text-xs text-gray-400 mt-1">Item will reach your address</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrackOrder
