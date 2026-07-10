import React, { useEffect, useState } from 'react'
import { CommonAPI } from '../../services.js/api';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await CommonAPI('category');
                setCategories(response.data);
            } catch (e) {
                console.log(e);
            }
        }
        getCategories();
    }, [])

    return (
        <div>
            <section className="mt-6 px-4 md:px-8" aria-labelledby="category-heading">
                <div className="max-w-7xl mx-auto">
                    <h2 id="category-heading" className="text-2xl font-bold text-slate-900 mb-8 dark:text-slate-50">Top Categories</h2>

                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
                        {categories.map((category) => (
                            <li>
                                <button href="#" className="block bg-gray-100 p-3 rounded-lg cursor-pointer group overflow-hidden relative z-50 dark:bg-neutral-600 
                    hover:before:bg-black focus-visible:before:bg-black
                    before:absolute before:inset-0 before:opacity-20 before:transition-all
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">

                                    <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
                                        <img src="https://readymadeui.com/images/sunglass7.webp" alt="Sunglasses"
                                            className="h-full w-full object-contain" />
                                    </div>

                                    <span className="sr-only">{category.name}</span>
                                </button>
                            </li>
                        ))}

                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Categories
