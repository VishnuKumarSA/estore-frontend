import React from 'react'

const FeaturedProducts = () => {
    return (
        <div>

            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>

                    <button href="#" className="text-blue-600 font-medium hover:underline">
                        View All
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                        <div className="bg-gray-50 h-64 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
                                alt="Smart Watch"
                                className="h-44 object-contain" />
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Smart Watch
                            </h3>

                            <p className="text-2xl font-bold mt-2">
                                ₹2,499
                            </p>

                            <div className="flex items-center mt-3 text-yellow-400">
                                ★★★★★
                                <span className="text-gray-500 text-sm ml-2">(120)</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                        <div className="bg-gray-50 h-64 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                                alt="Nike Air Max"
                                className="h-40 object-contain" />
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Nike Air Max
                            </h3>

                            <p className="text-2xl font-bold mt-2">
                                ₹4,999
                            </p>

                            <div className="flex items-center mt-3 text-yellow-400">
                                ★★★★☆
                                <span className="text-gray-500 text-sm ml-2">(98)</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                        <div className="bg-gray-50 h-64 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500"
                                alt="Travel Backpack"
                                className="h-48 object-contain" />
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Travel Backpack
                            </h3>

                            <p className="text-2xl font-bold mt-2">
                                ₹1,299
                            </p>

                            <div className="flex items-center mt-3 text-yellow-400">
                                ★★★★☆
                                <span className="text-gray-500 text-sm ml-2">(76)</span>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                        <div className="bg-gray-50 h-64 flex items-center justify-center">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                                alt="Boat Headphone"
                                className="h-44 object-contain" />
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Boat Headphone
                            </h3>

                            <p className="text-2xl font-bold mt-2">
                                ₹1,799
                            </p>

                            <div className="flex items-center mt-3 text-yellow-400">
                                ★★★★☆
                                <span className="text-gray-500 text-sm ml-2">(64)</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts
