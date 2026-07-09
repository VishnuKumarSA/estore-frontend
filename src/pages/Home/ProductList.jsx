import React, { useState, useEffect } from 'react'
import SideBar from '../../components/layout/SideBar'
import { CommonAPI } from '../../services.js/api';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const API_URL = process.env.REACT_APP_IMAGE_URL;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await CommonAPI('products');
                setProducts(response.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
    }, []);
    return (
        < section className="mt-8 px-4 md:px-8" >
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <SideBar />

                {/* Products */}
                <div className="lg:col-span-3">

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {products.map((product) => (
                            <div key={product.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

                                <img
                                    src={`${API_URL}${product.image}`}
                                    alt="Laptop"
                                    className="w-full h-64 object-contain bg-gray-100 p-6"
                                />

                                <div className="p-4">

                                    <h3 className="text-lg font-semibold">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm mt-1">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-3">
                                        <span className="text-2xl font-bold text-balck-500">
                                            ₹{product.price}
                                        </span>

                                        <span className="text-yellow-400 text-xl">
                                            ★★★★☆
                                        </span>
                                    </div>

                                    <button
                                        className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-medium transition">
                                        Add to Cart
                                    </button>

                                </div>

                            </div>
                        ))}


                    </div>

                </div>

            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center mt-10">
                <nav className="flex items-center gap-2">

                    {/* Previous */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Active Page */}
                    <button className="w-10 h-10 rounded-lg bg-blue-600 text-white font-semibold shadow-md">
                        1
                    </button>

                    {/* Other Pages */}
                    <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
                        2
                    </button>

                    <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
                        3
                    </button>

                    {/* Dots */}
                    <span className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500">
                        ...
                    </span>

                    {/* Last Page */}
                    <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition">
                        10
                    </button>

                    {/* Next */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                </nav>
            </div>
        </section >
    )
}

export default ProductList
