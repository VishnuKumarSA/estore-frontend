import React, { useEffect, useState } from 'react'
import { CommonAPI } from '../../services.js/api';

const SideBar = () => {

    const [categories, setCategories] = useState([]);

    const sortBy = [
        'Newest',
        'Price: Low to High',
        'Price: High to Low'
    ];

    useEffect(() => {
        const getCategories = (async () => {
            try {
                const res = await CommonAPI('categories')
                setCategories(res.data)
            } catch (e) {
                console.log(e);
            }
        })
        getCategories();
    }, [])



    return (
        <div>
            <div className="w-72 space-y-6">

                {/* Categories */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-5">
                        Categories
                    </h3>

                    <ul className="space-y-4 text-gray-600">
                        <li>
                            <button className="hover:text-blue-600 transition">All</button>
                        </li>
                        {categories.map((category) => (
                            <li>
                                <button className="hover:text-blue-600 transition">{category.name}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Sort By */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Sort By
                    </h3>

                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        {sortBy.map((sort) => (
                            <option>{sort}</option>
                        ))}
                    </select>
                </div>

            </div>
        </div>
    )
}

export default SideBar
