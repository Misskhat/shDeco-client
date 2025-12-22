import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const axios = useAxios();

    useEffect(() => {
        axios.get('/admin/bookings')
            .then(res => setBookings(res.data));
    }, [axios]);

    const handleStatusChange = (id, newStatus) => {
        axios.patch(`/admin/bookings/${id}`, { status: newStatus })
            .then(() => {
                setBookings(prev =>
                    prev.map(b =>
                        b._id === id ? { ...b, status: newStatus } : b
                    )
                );
            });
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">
                All Bookings ({bookings.length})
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={booking._id}>
                                <th>{index + 1}</th>

                                <td>
                                    <p className="font-semibold">{booking.userName}</p>
                                    <p className="text-sm text-gray-500">
                                        {booking.userEmail}
                                    </p>
                                </td>

                                <td>{booking.serviceTitle}</td>

                                <td>{booking.bookingDate}</td>

                                <td className="font-bold">
                                    ৳{booking.servicePrice}
                                </td>

                                <td>
                                    {booking.paymentStatus === "paid" ? (
                                        <span className="badge badge-success">Paid</span>
                                    ) : (
                                        <span className="badge badge-error">Unpaid</span>
                                    )}
                                </td>

                                <td>
                                    <select
                                        className="select select-sm select-bordered"
                                        value={booking.status}
                                        onChange={(e) =>
                                            handleStatusChange(booking._id, e.target.value)
                                        }
                                    >
                                        <option value="pending">Pending</option>
                                        <option value="confirmed">Confirmed</option>
                                        <option value="completed">Completed</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {bookings.length === 0 && (
                    <p className="text-center mt-6 text-gray-500">
                        No bookings found
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminBookings;
