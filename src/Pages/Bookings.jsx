import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';

const Bookings = () => {
    const [services, setServices] = useState([]);
    const { user } = useAuth();
    const axios = useAxios();

    useEffect(() => {
        if (user?.email) {
            axios
                .get(`/bookings?email=${user.email}`)
                .then(res => setServices(res.data));
        }
    }, [axios, user]);

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">
                Service Booked: {services.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {services.map((booking, index) => (
                            <tr key={booking._id}>
                                <th>{index + 1}</th>

                                <td>
                                    <div>
                                        <p className="font-semibold">
                                            {booking.serviceTitle}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {booking.serviceCategory}
                                        </p>
                                    </div>
                                </td>

                                <td>{booking.bookingDate}</td>

                                <td>{booking.serviceLocation}</td>

                                <td className="font-bold">
                                    ৳{booking.servicePrice}
                                </td>

                                <td>
                                    <span className="badge badge-outline">
                                        {booking.status}
                                    </span>
                                </td>

                                <td>
                                    {booking.paymentStatus === "paid" ? (
                                        <span className="badge badge-success">
                                            Paid
                                        </span>
                                    ) : (
                                        <button
                                            className="px-8 text-white font-bold py-2 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105"
                                        >
                                            Pay Now
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Empty State */}
                {services.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">
                        No bookings found
                    </p>
                )}
            </div>
        </div>
    );
};

export default Bookings;
