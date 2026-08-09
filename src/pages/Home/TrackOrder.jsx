import React, { useEffect, useState } from 'react'
import { CommonAPI } from '../../services.js/api';
import { useParams } from 'react-router-dom';
import Loader from '../../components/layout/Loader';

const TrackOrder = () => {
    const { id } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        const getOrder = async () => {
            try {
                const res = await CommonAPI('orders/' + id);
                setOrder(res.data.order);
            } catch (e) {
                console.log(e);
            }
        };

        getOrder();
    }, [id]);

    if (!order) {
        return (
            <Loader/>
        );
    }

    const statuses = [
        'Pending',
        'Confirmed',
        'Processing',
        'Shipped',
        'Delivered'
    ];

    const statusMessages = {
        Pending: 'Your order is waiting for confirmation',
        Confirmed: 'Your order has been confirmed successfully',
        Processing: 'Seller is preparing your item for shipment',
        Shipped: 'Your item has been shipped',
        Delivered: 'Your order has been delivered successfully'
    };

    const currentIndex = statuses.indexOf(order.order_status);
    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Track Order</h2>
                            <p className="text-sm text-gray-500 mt-1">Order #{order.order_number}</p>
                        </div>
                        <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                            Confirmed
                        </span>
                    </div>

                    {/* Product Info */}
                    <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100 mt-6">
                        <img
                            src={`${process.env.REACT_APP_IMAGE_URL}${order.order_items[0].product.image}`}
                            alt="Product"
                            className="w-16 h-16 rounded-lg border border-gray-200 object-cover"
                        />
                        <div>
                            <h3 className="font-semibold text-gray-900 text-base">{order.order_items[0].product.name}</h3>
                        </div>
                    </div>

                    {/* Stepper */}
                    <div className="mt-10 mb-4">
                        <div className="flex items-center justify-between relative">

                            <div className="absolute top-4 left-[10%] right-[10%] h-1 bg-gray-200 rounded-full">
                                <div
                                    className="h-1 bg-blue-600 rounded-full transition-all duration-500"
                                    style={{
                                        width: `${(currentIndex / (statuses.length - 1)) * 100}%`
                                    }}
                                />
                            </div>
                            {statuses.map((status, index) => {

                                const completed = index < currentIndex;
                                const current = index === currentIndex;

                                return (
                                    <div
                                        key={status}
                                        className="relative z-10 flex flex-col items-center gap-2 w-1/5"
                                    >

                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center ${completed || current
                                                ? 'bg-blue-600 shadow-md shadow-blue-200'
                                                : 'bg-white border-2 border-gray-300'
                                                }`}
                                        >
                                            {completed ? (
                                                <svg
                                                    className="w-4 h-4 text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            ) : current ? (
                                                <div className="w-2.5 h-2.5 rounded-full bg-white" />
                                            ) : (
                                                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                                            )}
                                        </div>

                                        <p
                                            className={`text-xs font-semibold text-center ${completed
                                                ? 'text-gray-900'
                                                : 'text-gray-400'
                                                }`}
                                        >
                                            {status}
                                        </p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>

                    {/* Timeline detail list */}
                    <div className="mt-10 space-y-6 border-t border-dashed border-gray-200 pt-6">

                        {statuses.map((status, index) => {

                            const completed = index <= currentIndex;

                            return (
                                <div key={status} className="flex gap-4">

                                    <div className="flex flex-col items-center">

                                        <div
                                            className={`w-3 h-3 rounded-full ${completed
                                                ? 'bg-blue-600'
                                                : 'bg-gray-300'
                                                }`}
                                        />

                                        {index !== statuses.length - 1 && (
                                            <div className="w-0.5 flex-1 bg-gray-200" />
                                        )}

                                    </div>

                                    <div className="pb-2">

                                        <p
                                            className={`text-sm font-semibold ${status === order.order_status
                                                ? 'text-blue-600'
                                                : completed
                                                    ? 'text-gray-900'
                                                    : 'text-gray-400'
                                                }`}
                                        >
                                            Order {status}
                                        </p>

                                        <p
                                            className={`text-xs mt-1 ${completed
                                                ? 'text-gray-500'
                                                : 'text-gray-400'
                                                }`}
                                        >
                                            {statusMessages[status]}
                                        </p>

                                        {completed && (
                                            <p className="text-[11px] text-gray-400 mt-1">
                                                {/* API date here */}
                                            </p>
                                        )}

                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TrackOrder
