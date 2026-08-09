import React, { useEffect, useState } from "react";
import {  CommonAPI, RemoveCartItemAPI } from "../../services.js/api";
import ProductForm from "./ProductForm";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [showForm, setShowForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);


    // Get Products
    const getProducts = async () => {

        try {

            setLoading(true);

            const res = await CommonAPI("products");

            console.log("Products:", res);

            if (res?.status === 200) {

                setProducts(
                    res?.data?.data || []
                );

            }

        } catch (error) {

            console.error("Products fetch error:", error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getProducts();

    }, []);


    // Add
    const handleAdd = () => {

        setEditProduct(null);
        setShowForm(true);

    };


    // Edit
    const handleEdit = (product) => {

        setEditProduct(product);
        setShowForm(true);

    };


    // Delete
    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );
        console.log(id)

        if (!confirmDelete) {
            return;
        }

        try {

            const res = await RemoveCartItemAPI(
                `products`   ,id            
            );

            console.log("Delete:", res);

            if (res?.status === 200) {

                getProducts();

            }

        } catch (error) {

            console.error("Delete error:", error);

        }
    };


    return (
        <div>

            {/* Header */}

            <div className="flex flex-wrap gap-4 justify-between items-center mb-6">

                <div>

                    <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                        Products
                    </h1>

                    <p className="text-gray-500 text-sm mt-1">
                        Manage your products
                    </p>

                </div>


                <button
                    onClick={handleAdd}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-sm hover:bg-blue-700 transition-colors"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    Add Product
                </button>

            </div>


            {/* Product Form */}

            {showForm && (

                <ProductForm
                    product={editProduct}

                    onClose={() => {
                        setShowForm(false);
                        setEditProduct(null);
                    }}

                    onSuccess={() => {
                        setShowForm(false);
                        setEditProduct(null);
                        getProducts();
                    }}
                />

            )}


            {/* Table */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        <thead className="bg-gray-50/70">

                            <tr>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Product
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    SKU
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Price
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Stock
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Status
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
                                        colSpan="6"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        Loading products...
                                    </td>

                                </tr>

                            ) : products.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="6"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        No products found
                                    </td>

                                </tr>

                            ) : (

                                products.map((product) => (

                                    <tr
                                        key={product.id}
                                        className="hover:bg-gray-50/60 transition-colors"
                                    >

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            {product.name}

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-500">

                                            {product.sku}

                                        </td>


                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            ₹
                                            {Number(
                                                product.price || 0
                                            ).toLocaleString("en-IN")}

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-700">

                                            {product.stock}

                                        </td>


                                        <td className="px-6 py-4">

                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    product.status === 1
                                                        ? "bg-green-50 text-green-600"
                                                        : "bg-red-50 text-red-600"
                                                }`}
                                            >
                                                {product.status === 1
                                                    ? "Active"
                                                    : "Inactive"}
                                            </span>

                                        </td>


                                        <td className="px-6 py-4 text-right">

                                            <div className="inline-flex items-center gap-4">

                                                <button
                                                    onClick={() =>
                                                        handleEdit(product)
                                                    }
                                                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                                                >
                                                    Edit
                                                </button>


                                                <button
                                                    onClick={() =>
                                                        handleDelete(product.id)
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

export default Products;