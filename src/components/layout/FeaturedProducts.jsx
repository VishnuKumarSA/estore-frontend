import React, { useEffect, useState } from 'react'
import { CommonAPI } from '../../services.js/api';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const API_URL = process.env.REACT_APP_IMAGE_URL;

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await CommonAPI('products');
                setFeaturedProducts(response.data.data);
            } catch (e) {
                console.log(e);
            }
        }
        getProducts();
    }, []);



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
                    {
                        featuredProducts.map((products) => (
                            <div key={products.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
                                <Link to={`products/${products.id}/${products.slug}`} >
                                    <div className="bg-gray-50 h-64 flex items-center justify-center">
                                        <img src={`${API_URL}${products.image}`}
                                            alt="Smart Watch"
                                            className="h-44 object-contain" />
                                    </div>

                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {products.name}
                                        </h3>

                                        <p className="text-2xl font-bold mt-2">
                                            ₹{products.price}
                                        </p>

                                        <div className="flex items-center mt-3 text-yellow-400">
                                            ★★★★★
                                            <span className="text-gray-500 text-sm ml-2">(120)</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default FeaturedProducts
