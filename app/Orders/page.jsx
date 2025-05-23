'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const orders = [
  { id: "PZA001", name: "John Doe", type: "Margherita", qty: 2, date: "2025-05-20 12:00", status: "Pending" },
  { id: "PZA002", name: "Jane Smith", type: "Pepperoni", qty: 1, date: "2025-05-21 14:30", status: "Preparing" },
  { id: "PZA003", name: "Alice Johnson", type: "Veggie Supreme", qty: 3, date: "2025-05-22 18:15", status: "Out for Delivery" },
  { id: "PZA004", name: "Bob Brown", type: "Margherita", qty: 1, date: "2025-05-22 19:45", status: "Delivered" },
  { id: "PZA005", name: "Charlie Davis", type: "Pepperoni", qty: 2, date: "2025-05-23 11:00", status: "Cancelled" },
];

const statusStyles = {
  "Pending": "bg-yellow-100 text-yellow-800",
  "Preparing": "bg-blue-100 text-blue-800",
  "Out for Delivery": "bg-orange-100 text-orange-800",
  "Delivered": "bg-green-100 text-green-800",
  "Cancelled": "bg-red-100 text-red-800",
};

export default function PizzaOrders() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    if (!session && status !== 'loading') {
      router.push('/login');
    }
  }, [session, status]);

  if (status === "loading") return <p className="text-center py-6 text-gray-600">Loading...</p>;

  const filteredOrders = filterStatus === "All"
    ? orders
    : orders.filter(order => order.status === filterStatus);

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🍕 Pizza Orders</h2>

      <div className="mb-6 flex flex-col sm:flex-row justify-end gap-4 items-center">
        <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
          Filter by Status:
        </label>
        <select
          id="status-filter"
          className="w-full sm:w-auto border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="All">All Statuses</option>
          {Object.keys(statusStyles).map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto border rounded-md shadow-sm bg-white">
        <table className="min-w-full text-sm text-center text-gray-800">
          <thead className="bg-gray-100 text-xs sm:text-sm uppercase font-semibold">
            <tr>
              <th className="p-4 border">Order ID</th>
              <th className="p-4 border">Customer Name</th>
              <th className="p-4 border">Pizza Type</th>
              <th className="p-4 border">Quantity</th>
              <th className="p-4 border">Order Date</th>
              <th className="p-4 border">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 transition">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.name}</td>
                <td className="p-4">{order.type}</td>
                <td className="p-4">{order.qty}</td>
                <td className="p-4">{order.date}</td>
                <td className={`p-4 font-semibold rounded ${statusStyles[order.status]}`}>
                  {order.status}
                </td>
              </tr>
            ))}
            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">No orders found for selected status.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
