import React, { useEffect, useState } from "react";
import {  CommonAPI, RemoveCartItemAPI } from "../../services.js/api";
import CategoryForm from "./CategoryForm";

const Categories = () => {

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [showForm, setShowForm] = useState(false);

    const [editCategory, setEditCategory] = useState(null);


    // =========================
    // Get Categories
    // =========================

    const getCategories = async () => {

        try {

            setLoading(true);

            const res = await CommonAPI("categories");

            console.log("Categories:", res);

            if (res?.status === 200) {

                setCategories(res?.data || []);

            }

        } catch (error) {

            console.error(
                "Categories fetch error:",
                error
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getCategories();

    }, []);


    // =========================
    // Add
    // =========================

    const handleAdd = () => {

        setEditCategory(null);

        setShowForm(true);

    };


    // =========================
    // Edit
    // =========================

    const handleEdit = (category) => {

        setEditCategory(category);

        setShowForm(true);

    };


    // =========================
    // Delete
    // =========================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this category?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const res = await RemoveCartItemAPI(
                "categories",
                id
            );

            console.log("Delete category:", res);

            if (res?.status === 200) {

                getCategories();

            }

        } catch (error) {

            console.error(
                "Category delete error:",
                error
            );

        }

    };


    return (

        <div>

            {/* =========================
                Header
            ========================= */}

            <div className="flex flex-wrap gap-4 justify-between items-center mb-6">

                <div>

                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                        Categories
                    </h1>

                    <p className="text-gray-500 text-sm mt-1">
                        Manage product categories
                    </p>

                </div>


                <button
                    onClick={handleAdd}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Add Category
                </button>

            </div>


            {/* =========================
                Form
            ========================= */}

            {showForm && (

                <CategoryForm
                    category={editCategory}

                    onClose={() => {

                        setShowForm(false);

                        setEditCategory(null);

                    }}

                    onSuccess={() => {

                        setShowForm(false);

                        setEditCategory(null);

                        getCategories();

                    }}
                />

            )}


            {/* =========================
                Table
            ========================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        <thead className="bg-gray-50/70">

                            <tr>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Name
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Description
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Image
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                                    Action
                                </th>

                            </tr>

                        </thead>


                        <tbody className="divide-y divide-gray-100">

                            {loading ? (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        Loading categories...
                                    </td>

                                </tr>

                            ) : categories.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        No categories found
                                    </td>

                                </tr>

                            ) : (

                                categories.map((category) => (

                                    <tr
                                        key={category.id}
                                        className="hover:bg-gray-50/60 transition-colors"
                                    >

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                            {category.name}
                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                            {category.description || "-"}
                                        </td>


                                        <td className="px-6 py-4">

                                            {category.image ? (

                                                <img
                                                    src={category.image}
                                                    alt={category.name}
                                                    className="w-12 h-12 object-cover rounded-xl border border-gray-100"
                                                />

                                            ) : (

                                                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gray-50 text-gray-300 text-[10px] font-medium border border-gray-100">
                                                    No Img
                                                </span>

                                            )}

                                        </td>


                                        <td className="px-6 py-4 text-right">

                                            <div className="inline-flex items-center gap-4">

                                                <button
                                                    onClick={() =>
                                                        handleEdit(category)
                                                    }
                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                                                >
                                                    Edit
                                                </button>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(category.id)
                                                    }
                                                    className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors"
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
};

export default Categories;