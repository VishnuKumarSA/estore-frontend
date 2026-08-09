import React, { useEffect, useState } from "react";
import { CartAPI, CommonAPI } from "../../services.js/api";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const OrderList = () => {


  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [activeStatus, setActiveStatus] = useState('All');
  const [cancelModal, setcancelModal] = useState(false);
  const [cancelID, setcancelID] = useState(null);


  const getOrders = async () => {
    try {
      const res = await CommonAPI('orders');
      setOrders(res.data.order);
      setAllOrders(res.data.order);

    } catch (e) {
      console.log(e);
    }
  }

  const statusColor = {
    Pending: "bg-purple-100 text-purple-700",
    Confirmed: "bg-indigo-100 text-indigo-700",
    Processing: "bg-yellow-100 text-yellow-700",
    Shipped: "bg-blue-100 text-blue-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };
  const statusList = [
    "All",
    "Pending",
    "Confirmed",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];


  const searchFilter = (e) => {
    const search = e.target.value.toLowerCase();

    if (search === "") {
      setOrders(allOrders);
      return;
    }

    const filtered = allOrders.filter((order) => {
      const productNames = order.order_items
        .map((item) => item.product.name)
        .join(" ")
        .toLowerCase();

      return (
        order.order_number.toLowerCase().includes(search) ||
        order.order_status.toLowerCase().includes(search) ||
        productNames.includes(search)
      );
    });

    setOrders(filtered);
  };


  const searchByStatus = (status) => {
    setActiveStatus(status);

    if (status === "All") {
      setOrders(allOrders);
      return;
    }

    const filtered = allOrders.filter(
      (order) => order.order_status === status
    );

    setOrders(filtered);
  }

  const cancelOrder = async () => {
    try {
      const res = await CartAPI(`orders/${cancelID}/cancel`, {}, 'PATCH'); 
      if (res.status === 200) {
        setcancelID(null);
        setcancelModal(false);
        toast.success("Order cancelled successfully");
        getOrders();
      }
    } catch (e) {
      toast.error(e.message || "Cancellation failed");
    }
  };

  useEffect(() => {
    getOrders();
  }, [])


  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              My Orders
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              View and manage your recent purchases
            </p>
          </div>

          <input
            type="text"
            onChange={searchFilter}
            placeholder="Search Order..."
            className="border border-gray-200 rounded-full px-5 py-2.5 w-72 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 transition"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          {statusList.map((status) => (
            <button key={status} onClick={() => searchByStatus(status)} className={`px-5 py-2 text-sm font-medium rounded-full transition shadow-sm ${activeStatus === status
              ? "bg-blue-600 text-white shadow-blue-200"
              : "bg-white border border-gray-200 hover:bg-gray-100 text-gray-600"
              }`}>
              {status}
            </button>
          ))}

        </div>

        {/* Orders */}
        <div className="space-y-4 mt-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="flex gap-5">
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}${order.order_items[0].product.image}`}
                    alt="Product"
                    className="w-24 h-24 rounded-xl object-cover border border-gray-100 shadow-sm"
                  />

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg font-bold text-gray-900">
                        {order.order_number}
                      </h2>

                      <span className={`${statusColor[order.order_status]} text-xs font-semibold px-3 py-1 rounded-full`}>
                        {order.order_status}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 mt-1">
                      {order.ordered_date}
                    </p>

                    <h3 className="font-semibold text-base text-gray-800 mt-2">
                      {order.order_items[0].product.name}
                    </h3>

                    {order.order_items.length > 1 && (
                      <p className="text-xs text-blue-500 font-medium mt-0.5">
                        +{order.order_items.length - 1} more product
                        {order.order_items.length - 1 > 1 ? "s" : ""}
                      </p>
                    )}

                    <div className="flex gap-8 mt-4">
                      <div>
                        <p className="text-xs text-gray-400">Payment</p>
                        <p className="text-sm font-semibold text-gray-800">{order.payment_method}</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400">Total</p>
                        <p className="text-base font-bold text-black-600">
                          ${order.grand_total}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="flex items-center">

                  {order.order_status === 'Pending' && (<button onClick={() => { setcancelModal(true); setcancelID(order.id) }} className="bg-red-600 hover:bg-red-700 text-white px-5 mr-2 py-2.5 text-sm font-medium rounded-xl shadow-sm shadow-red-200 transition space">
                    Cancel Order
                  </button>)}

                  {(order.order_status === 'Confirmed' || order.order_status === 'Processing' || order.order_status === 'Shipped') && (<Link to={`/orders/track-order/${order.id}`}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-5 mr-2 py-2.5 text-sm font-medium rounded-xl shadow-sm shadow-green-200 transition space">
                      Track Order
                    </button></Link>)}

                  {order.order_status === 'Delivered' && (<button className="bg-purple-600 hover:bg-purple-700 text-white px-5 mr-2 py-2.5 text-sm font-medium rounded-xl shadow-sm shadow-purple-200 transition space">
                    Buy Again
                  </button>)}


                  <Link to={`/orders/${order.id}`}>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-medium rounded-xl shadow-sm shadow-blue-200 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {cancelModal && (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="w-full max-w-md rounded-xl bg-white shadow-xl">

              <div className="border-b border-slate-200 px-6 py-4">
                <h2 className="text-xl font-semibold text-red-600">
                  Order Cancel
                </h2>
              </div>

              <div className="px-6 py-5">
                <p className="text-slate-700">
                  Are you sure cancel this order ?
                </p>
              </div>

              <div className="flex justify-center gap-3 border-t border-slate-200 px-6 py-4">
                <button
                  onClick={cancelOrder}
                  className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                  Yes
                </button>
                <button
                  onClick={() => setcancelModal(false)}
                  className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                >
                  No
                </button>
              </div>

            </div>
          </div>)}
        </div>
      </div>
    </div >

  );
};

export default OrderList;