import React from 'react'

const ProductDetails = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-12">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <button href="#" className="hover:text-blue-600">Home</button>
                    <span>/</span>
                    <button href="#" className="hover:text-blue-600">Products</button>
                    <span>/</span>
                    <span className="text-gray-800">Smart Watch</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}
                    <div className="bg-gray-50 rounded-3xl flex justify-center items-center p-12">
                        <img
                            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700"
                            alt=""
                            className="w-72 hover:scale-105 duration-300"
                        />
                    </div>

                    {/* Right */}
                    <div>

                        <h1 className="text-3xl font-bold text-gray-900">
                            Apple Watch Series 9
                        </h1>

                        <div className="flex items-center gap-3 mt-3">

                            <div className="text-yellow-400">
                                ★★★★★
                            </div>

                            <span className="text-gray-500 text-sm">
                                4.8 (130 Reviews)
                            </span>

                        </div>

                        <div className="mt-5 flex items-center gap-3">

                            <h2 className="text-3xl font-bold text-blue-600">
                                ₹2,499
                            </h2>

                            <span className="text-gray-400 line-through">
                                ₹3,999
                            </span>

                            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                                38% OFF
                            </span>

                        </div>

                        <p className="text-gray-600 leading-7 mt-6">
                            Premium smartwatch featuring GPS, heart rate monitoring,
                            sleep tracking, notifications, Bluetooth calling and
                            100+ sports modes.
                        </p>

                        {/* Quantity */}

                        <div className="mt-8">

                            <p className="font-medium mb-3">
                                Quantity
                            </p>

                            <div className="flex w-fit border rounded-xl overflow-hidden">

                                <button className="w-12 h-12 hover:bg-gray-100">
                                    −
                                </button>

                                <span className="w-14 flex justify-center items-center">
                                    1
                                </span>

                                <button className="w-12 h-12 hover:bg-gray-100">
                                    +
                                </button>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-4 mt-10">

                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-white font-medium">
                                Add to Cart
                            </button>

                            <button className="w-14 rounded-xl border hover:bg-gray-100">
                                🤍
                            </button>

                        </div>

                        {/* Highlights */}

                        <div className="grid grid-cols-3 gap-6 mt-10 border-t pt-8">

                            <div>
                                <p className="text-xl">🚚</p>
                                <p className="text-sm mt-2 font-medium">
                                    Free Delivery
                                </p>
                            </div>

                            <div>
                                <p className="text-xl">🔄</p>
                                <p className="text-sm mt-2 font-medium">
                                    7 Days Return
                                </p>
                            </div>

                            <div>
                                <p className="text-xl">🛡️</p>
                                <p className="text-sm mt-2 font-medium">
                                    Warranty
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default ProductDetails
