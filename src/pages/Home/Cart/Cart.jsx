import React, { useEffect, useState } from 'react'
import { CartAPI, CommonAPI, RemoveCartItemAPI } from '../../../services.js/api'
import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cartDetails, setCartDetails] = useState([]);
    const { cartCount } = useCart();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const getCartdetails = (async () => {
        try {
            const response = await CommonAPI('cart');
            setCartDetails(response.data);
            setError("");
        } catch (e) {
            setError(e.message);
        }

    })

    const removeCart = async (cart_item_id) => {
        try {
            const res = await RemoveCartItemAPI('cart-items', cart_item_id);
            setCartDetails(prev => ({
                ...prev,
                subtotal: res.data.subtotal,
                total: res.data.total,
                cart: {
                    ...prev.cart,
                    cart_items: prev.cart.cart_items.filter(item => item.id !== cart_item_id)
                }
            }));
        } catch (e) {
            setError(e.message);
        }
    }

    const updateCart = async (id, qty) => {
        try {
            const data = { cart_id: id, quantity: qty };
            const res = await CartAPI('cart-items/' + id, data, 'PUT');

            setCartDetails(prev => ({
                ...prev,
                subtotal: res.data.subtotal,
                total: res.data.total,
                cart: {
                    ...prev.cart,
                    cart_items: prev.cart.cart_items.map(item =>
                        item.id === id ? { ...item, quantity: qty } : item
                    )
                }
            }));
        } catch (e) {
            setError(e.message);
        }
    }

    useEffect(() => {
        getCartdetails();
    }, [])



    return (
        <div>
            <main className="mt-6 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-2 border-b border-slate-300 pb-4 dark:border-neutral-700">
                        <h1 className="text-2xl font-bold text-slate-900 flex-1 dark:text-slate-50">Shopping Cart</h1>
                        <p className="text-base text-slate-900 font-medium dark:text-slate-50">{cartCount} Items</p>
                    </div>

                    {cartDetails?.cart?.cart_items?.length === 0 ? (
                        <div className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center dark:border-neutral-700 dark:bg-neutral-900">
                            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                                    />
                                </svg>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                                Your cart is empty
                            </h2>

                            <p className="mt-3 max-w-md text-slate-500 dark:text-slate-400">
                                Looks like you haven't added any products yet.
                                Browse our collection and find something you'll love.
                            </p>

                            <button
                                onClick={() => navigate("/products")}
                                className="mt-8 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (<div className="grid lg:grid-cols-3 gap-12">
                        <ul className="lg:col-span-2 divide-y divide-slate-300 dark:divide-neutral-700">
                            {cartDetails?.cart?.cart_items?.length > 0 && error && (
                                <div className="mb-4 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 shadow-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01M10.29 3.86l-8 14A1 1 0 003.17 19h17.66a1 1 0 00.88-1.5l-8-14a1 1 0 00-1.76 0z"
                                        />
                                    </svg>

                                    <span>{error}</span>
                                </div>
                            )}
                            {cartDetails?.cart?.cart_items?.map((cartDetail) => (
                                <li key={cartDetail.id} className="flex flex-col gap-6 py-6 sm:items-center sm:flex-row">
                                    <div className="w-32 h-full shrink-0">
                                        <img src={`${process.env.REACT_APP_IMAGE_URL}${cartDetail.product.image}`}
                                            className="w-full aspect-full object-contain" alt="sweater" />
                                    </div>

                                    <div className="flex items-start gap-4 w-full">
                                        <div>
                                            <h3 className="text-base font-semibold text-slate-900 mb-2 dark:text-slate-50">{cartDetail.product.name}</h3>
                                            <div className="space-y-2">
                                                <p className="text-sm text-slate-600 dark:text-slate-400"><span
                                                    className="ml-2 font-medium">{cartDetail.product.description}</span></p>

                                            </div>


                                            <div className="mt-4 flex flex-wrap gap-4">
                                                <button onClick={() => removeCart(cartDetail.id)} type="button"
                                                    className="font-medium text-red-600 text-sm flex items-center gap-2 shrink-0 cursor-pointer dark:text-red-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline"
                                                        viewBox="0 0 24 24" aria-hidden="true">
                                                        <path
                                                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                                            data-original="#000000"></path>
                                                        <path
                                                            d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                                            data-original="#000000"></path>
                                                    </svg>
                                                    Remove
                                                </button>
                                                <button type="button"
                                                    className="font-medium text-pink-600 text-sm flex items-center gap-2 shrink-0 cursor-pointer dark:text-pink-500">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline"
                                                        viewBox="0 0 512 512" aria-hidden="true">
                                                        <path
                                                            d="M369.28 47.892c-40.886 0-76.729 18.232-103.652 52.724a175 175 0 0 0-9.628 13.66 174 174 0 0 0-9.628-13.66C219.45 66.124 183.606 47.892 142.72 47.892c-77.238 0-132.48 64.672-132.48 142.276 0 88.736 72.727 172.365 235.812 271.162 3.057 1.851 6.503 2.778 9.948 2.778s6.89-.926 9.948-2.777C429.033 362.534 501.76 278.905 501.76 190.169c0-77.563-55.197-142.277-132.48-142.277m43.35 252.767c-33.952 37.884-85.259 77.774-156.63 121.75-71.371-43.976-122.678-83.866-156.63-121.749-34.136-38.089-50.73-74.23-50.73-110.491 0-55.876 37.76-103.877 94.08-103.877 28.681 0 53.136 12.47 72.686 37.066 15.633 19.67 22.22 39.98 22.266 40.125a19.2 19.2 0 0 0 36.658 0c.06-.194 6.45-19.871 21.569-39.24C315.555 99.06 340.244 86.29 369.28 86.29c56.379 0 94.08 48.047 94.08 103.877 0 36.26-16.594 72.402-50.73 110.491"
                                                            data-original="#000000" />
                                                    </svg>
                                                    Move to wish list
                                                </button>
                                            </div>
                                        </div>

                                        <div className="ml-auto text-right">

                                            <div
                                                className="flex items-center w-max mt-auto px-2.5 py-1.5 border border-slate-300 text-slate-900 font-medium text-xs rounded-md dark:border-neutral-700 dark:text-slate-50 dark:bg-neutral-800">
                                                <button onClick={() => {
                                                    if (cartDetail.quantity > 1) {
                                                        updateCart(cartDetail.id, cartDetail.quantity - 1);
                                                    }
                                                }}
                                                    type="button" aria-label="Decrease quantity"
                                                    className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current"
                                                        viewBox="0 0 124 124">
                                                        <path
                                                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                                                            data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                                <span className="mx-3">{cartDetail.quantity}</span>
                                                <button onClick={() => updateCart(cartDetail.id, cartDetail.quantity + 1)} type="button" aria-label="Increase quantity"
                                                    className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current"
                                                        viewBox="0 0 42 42">
                                                        <path
                                                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                                                            data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="mt-6">
                                                <p className="text-base font-semibold text-slate-900 dark:text-slate-50">{cartDetail.price}</p>
                                                <p className="text-base text-slate-500 mt-1"><strike className="font-medium">{cartDetail.price}</strike>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>


                        <div
                            className="lg:p-6 lg:pr-0 h-full lg:border-l lg:border-slate-300 lg:sticky lg:top-0 dark:lg:border-neutral-700">
                            <h3
                                className="text-lg font-semibold text-slate-900 border-b border-slate-300 pb-4 dark:text-slate-50 dark:border-neutral-700">
                                Order Summary</h3>
                            <ul
                                className="text-slate-600 font-medium divide-y divide-slate-300 mt-4 dark:text-slate-400 dark:divide-neutral-700">
                                <li className="flex flex-wrap gap-4 text-sm py-3">Subtotal <span
                                    className="ml-auto font-semibold text-slate-900 dark:text-slate-50">${cartDetails.subtotal}</span></li>
                                <li className="flex flex-wrap gap-4 text-sm py-3">Shipping <span
                                    className="ml-auto font-semibold text-slate-900 dark:text-slate-50">Free</span></li>
                                <li className="flex flex-wrap gap-4 text-sm py-3">Tax <span
                                    className="ml-auto font-semibold text-slate-900 dark:text-slate-50">Free</span></li>
                                <li className="flex flex-wrap gap-4 text-sm py-3 font-semibold text-slate-900 dark:text-slate-50">Total
                                    <span className="ml-auto dark:text-slate-50">${cartDetails.total}</span>
                                </li>
                            </ul>


                            <div className="mt-6 space-y-3 text-center">
                                <button type="button" onClick={() =>navigate('/checkout')}
                                    className="w-full px-4 py-2.5 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Proceed
                                    to Checkout</button>
                                <button href="#"
                                    className="inline-block text-blue-700 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-500">Continue
                                    Shopping</button>
                            </div>


                            <form className="max-w-sm mt-8">
                                <label htmlFor="promocode" className="mb-2 block text-sm font-medium text-slate-900 dark:text-slate-50">Do
                                    you
                                    have a promo code?</label>
                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <input type="text" id="promocode" name="promocode" required placeholder="Enter promo code"
                                        autoComplete="postal-code"
                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                    <button type="submit"
                                        className="py-2 px-3.5 text-sm w-max rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">Apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Cart
