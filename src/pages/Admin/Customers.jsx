import React, { useEffect, useState } from "react";
import { CommonAPI } from "../../services.js/api";

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);


    const getCustomers = async () => {

        try {

            setLoading(true);

            const res = await CommonAPI(
                "admin/customers"
            );

            console.log("Customers:", res);

            if (res?.status === 200) {

                setCustomers(
                    res?.data?.customers || []
                );

            }

        } catch (error) {

            console.error(
                "Customers fetch error:",
                error
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        getCustomers();

    }, []);


    return (
        <div>

            {/* Header */}

            <div className="mb-6">

                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                    Customers
                </h1>

                <p className="text-gray-500 text-sm mt-1">
                    Manage your customers
                </p>

            </div>


            {/* Table */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="overflow-x-auto">

                    <table className="w-full text-left border-collapse">

                        <thead className="bg-gray-50/70">

                            <tr>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Name
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Email
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Mobile
                                </th>

                                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Joined
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
                                        Loading customers...
                                    </td>

                                </tr>

                            ) : customers.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="4"
                                        className="text-center py-12 text-gray-400 text-sm"
                                    >
                                        No customers found
                                    </td>

                                </tr>

                            ) : (

                                customers.map((customer) => (

                                    <tr
                                        key={customer.id}
                                        className="hover:bg-gray-50/60 transition-colors"
                                    >

                                        <td className="px-6 py-4 text-sm font-medium text-gray-900">

                                            <div className="flex items-center gap-3">

                                                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-semibold shrink-0">
                                                    {(customer.first_name?.[0] || "").toUpperCase()}
                                                </div>

                                                {customer.first_name}{" "}
                                                {customer.last_name}

                                            </div>

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-600">

                                            {customer.email}

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-600">

                                            {customer.mobile_number || "-"}

                                        </td>


                                        <td className="px-6 py-4 text-sm text-gray-500">

                                            {customer.created_at
                                                ? new Date(
                                                    customer.created_at
                                                ).toLocaleDateString(
                                                    "en-IN"
                                                )
                                                : "-"
                                            }

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

export default Customers;