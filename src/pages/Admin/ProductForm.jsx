import React, { useEffect, useState } from "react";
import { CartAPI, CommonAPI } from "../../services.js/api";

const ProductForm = ({
    product,
    onClose,
    onSuccess
}) => {

    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({
        name: "",
        category_id: "",
        price: "",
        discount_price: "",
        stock: "",
        sku: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [categoryLoading, setCategoryLoading] = useState(true);


    // =========================
    // Get Categories
    // =========================

    const getCategories = async () => {

        try {

            const res = await CommonAPI("categories");

            console.log("Categories:", res);

            if (res?.status === 200) {

                setCategories(
                    res?.data || []
                );

            }

        } catch (error) {

            console.error(
                "Category fetch error:",
                error
            );

        } finally {

            setCategoryLoading(false);

        }
    };


    // =========================
    // Load Categories
    // =========================

    useEffect(() => {

        getCategories();

    }, []);


    // =========================
    // Edit Product
    // =========================

    useEffect(() => {

        if (product) {

            setForm({
                name: product.name || "",
                category_id: product.category_id || "",
                price: product.price || "",
                discount_price: product.discount_price || "",
                stock: product.stock || "",
                sku: product.sku || "",
                description: product.description || "",
            });

        } else {

            setForm({
                name: "",
                category_id: "",
                price: "",
                discount_price: "",
                stock: "",
                sku: "",
                description: "",
            });

        }

    }, [product]);


    // =========================
    // Input Change
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

            if (product) {

                // UPDATE

                res = await CartAPI(
                    `products/${product.id}`,
                    form,
                    "PUT"
                );

            } else {

                // CREATE

                res = await CartAPI(
                    "products",
                    form,
                    "POST",
                );

            }

            console.log("Product response:", res);

            if (
                res?.status === 200 ||
                res?.status === 201
            ) {

                onSuccess();

            }

        } catch (error) {

            console.error(
                "Product save error:",
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

                        {product
                            ? "Edit Product"
                            : "Add Product"
                        }

                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">
                        Fill in the product details below
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
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >

                {/* Product Name */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Product Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="e.g. Adjustable Dog Harness"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>


                {/* Category */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Category
                    </label>
                    <select
                        name="category_id"
                        value={form.category_id}
                        onChange={handleChange}
                        className={`${inputClass} bg-white`}
                        required
                    >

                        <option value="">
                            {categoryLoading
                                ? "Loading categories..."
                                : "Select Category"
                            }
                        </option>


                        {!categoryLoading &&
                            categories.map((category) => (

                                <option
                                    key={category.id}
                                    value={category.id}
                                >
                                    {category.name}
                                </option>

                            ))
                        }

                    </select>
                </div>


                {/* Price */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Price (₹)
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="0.00"
                        value={form.price}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>


                {/* Discount Price */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Discount Price (₹)
                    </label>
                    <input
                        type="number"
                        name="discount_price"
                        placeholder="Optional"
                        value={form.discount_price}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>


                {/* Stock */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Stock
                    </label>
                    <input
                        type="number"
                        name="stock"
                        placeholder="Available quantity"
                        value={form.stock}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>


                {/* SKU */}

                <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        SKU
                    </label>
                    <input
                        type="text"
                        name="sku"
                        placeholder="Product code"
                        value={form.sku}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>


                {/* Description */}

                <div className="md:col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1.5">
                        Description
                    </label>
                    <textarea
                        name="description"
                        placeholder="Short product description"
                        value={form.description}
                        onChange={handleChange}
                        rows="4"
                        className={inputClass}
                    />
                </div>


                {/* Buttons */}

                <div className="md:col-span-2 flex gap-3 pt-2">

                    <button
                        type="submit"
                        disabled={loading || categoryLoading}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >

                        {loading
                            ? "Saving..."
                            : product
                                ? "Update Product"
                                : "Add Product"
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

export default ProductForm;