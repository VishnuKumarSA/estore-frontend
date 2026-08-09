import React, { useEffect, useState } from "react";
import { CartAPI } from "../../services.js/api";

const CategoryForm = ({
    category,
    onClose,
    onSuccess
}) => {

    const [form, setForm] = useState({
        name: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);


    // =========================
    // Edit Data
    // =========================

    useEffect(() => {

        if (category) {

            setForm({
                name: category.name || "",
                description: category.description || "",
            });

        } else {

            setForm({
                name: "",
                description: "",
            });

        }

    }, [category]);


    // =========================
    // Change
    // =========================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    // =========================
    // Submit
    // =========================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            let res;

            if (category) {

                // UPDATE

                res = await CartAPI(
                    `categories/${category.id}`,
                    form,
                    "PUT"
                );

            } else {

                // CREATE

                res = await CartAPI(
                    "categories",
                    form,
                    "POST"
                );

            }

            console.log("Category response:", res);

            if (
                res?.status === 200 ||
                res?.status === 201
            ) {

                onSuccess();

            }

        } catch (error) {

            console.error(
                "Category save error:",
                error
            );

        } finally {

            setLoading(false);

        }

    };


    const inputClass =
        "w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition";


    return (

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">

            {/* Header */}

            <div className="flex justify-between items-center mb-6">

                <div>
                    <h2 className="text-lg font-semibold text-gray-900">

                        {category
                            ? "Edit Category"
                            : "Add Category"
                        }

                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Fill in the category details below
                    </p>
                </div>


                <button
                    onClick={onClose}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>

            </div>


            {/* Form */}

            <form
                onSubmit={handleSubmit}
                className="space-y-4"
            >

                {/* Name */}

                <div>

                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Category Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Dog Accessories"
                        className={inputClass}
                        required
                    />

                </div>


                {/* Description */}

                <div>

                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Short category description"
                        rows="4"
                        className={inputClass}
                    />

                </div>


                {/* Buttons */}

                <div className="flex gap-3 pt-2">

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >

                        {loading
                            ? "Saving..."
                            : category
                            ? "Update Category"
                            : "Add Category"
                        }

                    </button>


                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
};

export default CategoryForm;