import React, { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router";
import LoadingSpennier from "../Components/LoadingSpennier";

const Bookings = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);

        axios
            .get(`/bookings?email=${user.email}`)
            .then((res) => setServices(res.data))
            .finally(() => setLoading(false));
    }, [axios, user?.email]);

    if (loading) return <LoadingSpennier />;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">
                Service Booked: {services.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
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

                    <tbody>
                        {services.map((b, index) => (
                            <tr key={b._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <p className="font-semibold">{b.serviceTitle}</p>
                                    <p className="text-sm text-gray-500">{b.serviceCategory}</p>
                                </td>
                                <td>{new Date(b.bookingDate).toLocaleDateString()}</td>
                                <td>{b.serviceLocation}</td>
                                <td className="font-bold">৳{b.servicePrice}</td>
                                <td>
                                    <span
                                        className={`badge ${b.status === "approved"
                                            ? "badge-success"
                                            : b.status === "cancelled"
                                                ? "badge-error"
                                                : "badge-warning"
                                            }`}
                                    >
                                        {b.status}
                                    </span>
                                </td>
                                <td>
                                    {b.paymentStatus === "paid" ? (
                                        <span className="badge badge-success">Paid</span>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                navigate(`/dashboard/payment/${b._id}`)
                                            }
                                            className="btn bg-[#FF6B6B] text-white font-bold"
                                        >
                                            Pay Now
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
