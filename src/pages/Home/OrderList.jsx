import React from "react";

const OrderList = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              My Orders
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              View and manage your recent purchases
            </p>
          </div>

          <input
            type="text"
            placeholder="Search Order..."
            className="border rounded-lg px-3 py-2 w-64 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-full">
            All
          </button>

          <button className="bg-white border px-4 py-2 text-sm rounded-full hover:bg-gray-100">
            Pending
          </button>

          <button className="bg-white border px-4 py-2 text-sm rounded-full hover:bg-gray-100">
            Processing
          </button>

          <button className="bg-white border px-4 py-2 text-sm rounded-full hover:bg-gray-100">
            Shipped
          </button>

          <button className="bg-white border px-4 py-2 text-sm rounded-full hover:bg-gray-100">
            Delivered
          </button>

          <button className="bg-white border px-4 py-2 text-sm rounded-full hover:bg-gray-100">
            Cancelled
          </button>
        </div>

        {/* Orders */}
        <div className="space-y-4 mt-6">
          {/* Order 1 */}
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-semibold">
                      ORD-2026-00003
                    </h2>

                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      Delivered
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Ordered on 02 Aug 2026
                  </p>

                  <h3 className="font-medium text-base mt-2">
                    Wireless Headphone
                  </h3>

                  <p className="text-sm text-gray-500">
                    +2 more products
                  </p>

                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Payment</p>
                      <p className="text-sm font-medium">Razorpay</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-base font-semibold text-blue-600">
                        $399
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-semibold">
                      ORD-2026-00002
                    </h2>

                    <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                      Processing
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Ordered on 01 Aug 2026
                  </p>

                  <h3 className="font-medium text-base mt-2">
                    Apple Watch
                  </h3>

                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Payment</p>
                      <p className="text-sm font-medium">
                        Cash On Delivery
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-base font-semibold text-blue-600">
                        $199
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm rounded-lg">
                  Track Order
                </button>

                <button className="border px-4 py-2 text-sm rounded-lg hover:bg-gray-100">
                  Details
                </button>
              </div>
            </div>
          </div>

          {/* Order 3 */}
          <div className="bg-white rounded-lg shadow border p-4">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <div className="flex gap-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Product"
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-lg font-semibold">
                      ORD-2026-00001
                    </h2>

                    <span className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full">
                      Pending
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-1">
                    Ordered on 30 Jul 2026
                  </p>

                  <h3 className="font-medium text-base mt-2">
                    Nike Running Shoes
                  </h3>

                  <div className="flex gap-6 mt-3">
                    <div>
                      <p className="text-xs text-gray-500">Payment</p>
                      <p className="text-sm font-medium">
                        Cash On Delivery
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Total</p>
                      <p className="text-base font-semibold text-blue-600">
                        $149
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <button className="border border-red-500 text-red-500 hover:bg-red-50 px-4 py-2 text-sm rounded-lg">
                  Cancel
                </button>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-lg">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;