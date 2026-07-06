import React from 'react'

const SideBar = () => {
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
                        <li>
                            <button className="hover:text-blue-600 transition">Electronics</button>
                        </li>
                        <li>
                            <button className="hover:text-blue-600 transition">Fashion</button>
                        </li>
                        <li>
                            <button className="hover:text-blue-600 transition">Footwear</button>
                        </li>
                        <li>
                            <button className="hover:text-blue-600 transition">Accessories</button>
                        </li>
                        <li>
                            <button className="hover:text-blue-600 transition">Home & Kitchen</button>
                        </li>
                    </ul>
                </div>

                {/* Sort By */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Sort By
                    </h3>

                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Popular</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Top Rated</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default SideBar
