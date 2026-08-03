import React, { useEffect, useState } from 'react'
import { CartAPI, CommonAPI } from '../../services.js/api';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [cartDetails, setCartDetails] = useState([]);
    const [error, setError] = useState('');
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [orderNumber, setOrderNumber] = useState("");
    const navigate = useNavigate();

    const initialFormData = {
        first_name: "",
        last_name: "",
        email: "",
        mobile_number: "",
        address: "",
        city: "",
        state: "",
        postal_code: "",
        payment_method: "COD"
    };

    const [formData, setFormData] = useState(initialFormData)


    const getCartdetails = async () => {
        const response = await CommonAPI("cart");
        setCartDetails(response.data);
    };

    const handleInputChanges = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const HandleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await CartAPI('orders', formData);
            if (res.status === 201) {
                setOrderNumber(res.data.order.order_number);
                setShowSuccessModal(true);

                setFormData(initialFormData);
                getCartdetails();
            }
        } catch (e) {
            setError(e.message);
            setShowErrorModal(true);
        }
    }

    const openRazorpay = async () => {

        try {

            const response = await CartAPI("payment/create-order", {
                amount: cartDetails.total
            });

            const options = {

                key: response.data.key,

                amount: response.data.order.amount,

                currency: response.data.order.currency,

                name: "eStore",

                description: "Order Payment",

                image: "/logo.png", // Optional (remove if no logo)

                order_id: response.data.order.id,

                prefill: {
                    name: `${formData.first_name} ${formData.last_name}`,
                    email: formData.email,
                    contact: formData.mobile_number,
                },

                theme: {
                    color: "#2563eb",
                },

                handler: async function (payment) {

                    try {

                        const verify = await CartAPI("payment/verify", {
                            razorpay_order_id: payment.razorpay_order_id,
                            razorpay_payment_id: payment.razorpay_payment_id,
                            razorpay_signature: payment.razorpay_signature,
                        });

                        if (!verify.data.success) {
                            alert("Payment verification failed.");
                            return;
                        }

                        const order = await CartAPI("orders", {

                            ...formData,

                            payment_method: "UPI",

                            razorpay_order_id: payment.razorpay_order_id,

                            razorpay_payment_id: payment.razorpay_payment_id,

                            razorpay_signature: payment.razorpay_signature,

                        });

                        if (order.status === 201) {

                            setOrderNumber(order.data.order.order_number);

                            setShowSuccessModal(true);

                            setFormData(initialFormData);

                            getCartdetails();

                        }

                    } catch (error) {

                        console.error(error);

                        alert("Order creation failed.");

                    }

                },

                modal: {
                    ondismiss: function () {
                        console.log("Payment popup closed");
                    }
                }

            };

            const razorpay = new window.Razorpay(options);

            razorpay.on("payment.failed", function (response) {

                console.error(response.error);

                alert(
                    "Payment Failed\n\n" +
                    response.error.description
                );

            });

            razorpay.open();

        } catch (error) {

            console.error(error);

            alert("Unable to initiate payment.");

        }

    };


    useEffect(() => {
        getCartdetails();
    }, [])
    return (
        <div>
            <main>
                <h1 className="sr-only">Checkout</h1>
                <div className="px-4 md:px-8 mt-6">
                    <div className="max-w-xl md:max-w-7xl mx-auto">


                        <ol className="flex items-start max-w-7xl mb-16" aria-label="Progress">

                            <li className="w-full">
                                <div className="flex items-center w-full relative">
                                    <div
                                        className="w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
                                        <span className="sr-only">Step 1: Completed</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24"
                                            aria-hidden="true">
                                            <path
                                                d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                                        </svg>
                                    </div>
                                    <div className="w-full h-0.5 mx-2 rounded-md bg-blue-700 sm:mx-4 dark:bg-blue-500"></div>
                                </div>

                                <div className="mt-3 mr-4">
                                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-500">Cart</p>
                                </div>
                            </li>

                            <li className="w-full" aria-current="step">
                                <div className="flex items-center w-full relative">
                                    <div
                                        className="w-6 h-6 shrink-0 bg-blue-700 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-blue-500">
                                        <span className="sr-only">Step 2: In Progress</span>
                                        <span className="w-3 h-3 bg-white rounded-full" aria-hidden="true"></span>
                                    </div>
                                    <div className="w-full h-0.5 mx-2 rounded-md bg-slate-300 sm:mx-4 dark:bg-neutral-700"></div>
                                </div>

                                <div className="mt-3 mr-4">
                                    <p className="text-sm font-semibold text-blue-700 dark:text-blue-500">Checkout</p>
                                </div>
                            </li>

                            <li>
                                <div
                                    className="w-6 h-6 shrink-0 bg-slate-300 flex items-center justify-center rounded-full md:w-7 md:h-7 dark:bg-neutral-700">
                                    <span className="sr-only">Step 3</span>
                                    <span className="text-sm text-slate-400 font-semibold" aria-hidden="true">3</span>
                                </div>

                                <div className="mt-3">
                                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Order</p>
                                </div>
                            </li>

                        </ol>
                        <form onSubmit={HandleFormSubmit} >
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
                                <div className="lg:col-span-2">

                                    <section className="w-full h-max">

                                        <fieldset>
                                            <legend className="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">Delivery
                                                Details
                                            </legend>
                                            <div className="grid lg:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="fname"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">First
                                                        Name</label>
                                                    <input type="text" onChange={handleInputChanges} id="first_name" name="first_name" placeholder="John" value={formData.first_name} required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="last_name"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Last
                                                        Name</label>
                                                    <input type="text" onChange={handleInputChanges} id="last_name" name="last_name" value={formData.last_name} placeholder="Doe" required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="email"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Email</label>
                                                    <input onChange={handleInputChanges} type="email" id="email" name="email" placeholder="john@readymadeui.com" value={formData.email}
                                                        required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="mobile_number"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Mobile
                                                        Number</label>
                                                    <input type="tel" onChange={handleInputChanges} id="mobile_number" name="mobile_number" value={formData.mobile_number} placeholder="123-456-7890" required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="address"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Address
                                                        Line</label>
                                                    <input type="text" onChange={handleInputChanges} id="address" name="address" placeholder="123 Main Street" value={formData.address}
                                                        required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="city"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">City</label>
                                                    <input type="text" onChange={handleInputChanges} id="city" name="city" placeholder="New York" value={formData.city} required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="state"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">State</label>
                                                    <input type="text" onChange={handleInputChanges} id="state" value={formData.state} name="state" placeholder="NY" required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                                <div>
                                                    <label htmlFor="postal_code"
                                                        className="mb-2 text-slate-900 font-medium text-sm inline-block dark:text-slate-50">Postal
                                                        code</label>
                                                    <input type="text" onChange={handleInputChanges} id="postal_code" value={formData.postal_code} name="postal_code" placeholder="10001"
                                                        required
                                                        className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                                                </div>
                                            </div>
                                        </fieldset>


                                        <fieldset className="mt-12 border-t border-slate-200 pt-8">
                                            <legend className="text-xl font-semibold text-slate-900 mb-6">
                                                Payment Method
                                            </legend>

                                            <div className="grid gap-5 md:grid-cols-2">


                                                <label
                                                    htmlFor="COD"
                                                    className={`flex items-center justify-between rounded-xl border-2 p-6 cursor-pointer transition-all duration-200
                                                ${formData.payment_method === "COD"
                                                            ? "border-blue-600 bg-blue-50"
                                                            : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <input
                                                            type="radio"
                                                            id="COD"
                                                            name="payment_method"
                                                            value="COD"
                                                            checked={formData.payment_method === "COD"}
                                                            onChange={handleInputChanges}
                                                            className="h-5 w-5 accent-blue-600"
                                                        />

                                                        <div>
                                                            <p className="font-semibold text-slate-800">
                                                                Cash on Delivery
                                                            </p>
                                                            <p className="text-sm text-slate-500">
                                                                Pay when your order arrives
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <span className="text-2xl">💵</span>
                                                </label>


                                                <label
                                                    htmlFor="UPI"
                                                    className={`flex items-center justify-between rounded-xl border-2 p-6 cursor-pointer transition-all duration-200
                                                ${formData.payment_method === "UPI"
                                                            ? "border-blue-600 bg-blue-50"
                                                            : "border-slate-200 hover:border-blue-400 hover:bg-slate-50"}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <input
                                                            type="radio"
                                                            id="UPI"
                                                            name="payment_method"
                                                            value="UPI"
                                                            checked={formData.payment_method === "UPI"}
                                                            onChange={handleInputChanges}
                                                            className="h-5 w-5 accent-blue-600"
                                                        />

                                                        <div>
                                                            <img
                                                                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg"
                                                                alt="UPI"
                                                                className="h-8"
                                                            />

                                                            <p className="mt-2 text-sm text-slate-500">
                                                                Google Pay, PhonePe, Paytm & more
                                                            </p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </fieldset>

                                    </section>
                                </div>


                                <div className="relative h-max md:sticky top-0">
                                    <h2 className="text-xl text-slate-900 font-semibold mb-6 dark:text-slate-50">Order Summary</h2>
                                    <ul className="text-slate-500 font-medium space-y-4 dark:text-slate-400">
                                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span
                                            className="ml-auto font-semibold text-slate-900 dark:text-slate-50">${cartDetails.subtotal}</span></li>
                                        <li className="flex flex-wrap gap-4 text-sm">Discount <span
                                            className="ml-auto font-semibold text-slate-900 dark:text-slate-50">No Discount</span></li>
                                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span
                                            className="ml-auto font-semibold text-slate-900 dark:text-slate-50">Free</span></li>
                                        <li className="flex flex-wrap gap-4 text-sm">Tax <span
                                            className="ml-auto font-semibold text-slate-900 dark:text-slate-50">Free</span></li>
                                        <hr className="border-slate-300 dark:border-neutral-700" />
                                        <li className="flex flex-wrap gap-4 text-sm font-semibold text-slate-900 dark:text-slate-50">Total
                                            <span className="ml-auto dark:text-slate-50">{cartDetails.total}</span>
                                        </li>
                                    </ul>
                                    <div className="mt-6">
                                        {formData.payment_method === "COD" ? (
                                            <button
                                                type="submit"
                                                className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                            >
                                                Place Order
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={openRazorpay}
                                                className="w-full px-3.5 py-2 text-white text-sm font-semibold rounded-md cursor-pointer bg-blue-600 hover:bg-blue-700 border border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                            >
                                                Pay Now
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {showErrorModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                        <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

                            <div className="border-b border-slate-200 px-6 py-4">
                                <h2 className="text-xl font-semibold text-red-600">
                                    Error
                                </h2>
                            </div>

                            <div className="px-6 py-5">
                                <p className="text-slate-700">
                                    {error}
                                </p>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
                                <button
                                    onClick={() => setShowErrorModal(false)}
                                    className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                                >
                                    OK
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {showSuccessModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
                        <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

                            <div className="border-b border-slate-200 px-6 py-4 text-center">
                                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <h2 className="text-2xl font-bold text-green-600">
                                    Order Placed!
                                </h2>
                            </div>

                            <div className="px-6 py-5 text-center">
                                <p className="text-slate-700">
                                    Thank you for your purchase.
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    Your order has been placed successfully.
                                </p>

                                {orderNumber && (
                                    <p className="mt-4 font-semibold text-slate-800">
                                        Order ID: {orderNumber}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-center gap-3 border-t border-slate-200 px-6 py-4">
                                <button
                                    onClick={() => {
                                        setShowSuccessModal(false);
                                        navigate("/orders");
                                    }}
                                    className="rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700"
                                >
                                    View Orders
                                </button>
                            </div>

                        </div>
                    </div>
                )}
            </main >
        </div >
    )
}

export default Checkout
