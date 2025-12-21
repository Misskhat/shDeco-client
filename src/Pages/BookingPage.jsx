import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import LoadingSpennier from "../Components/LoadingSpennier";

const BookingPage = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [service, setService] = useState({})
    const axios = useAxios()

    useEffect(() => {
        if (!id) {
            <LoadingSpennier></LoadingSpennier>
        }
        axios.get(`services/details/${id}`)
            .then(res => {
                setService(res.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [axios, id, loading])

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold mb-8 text-center">
                Book Your Service
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

                {/* LEFT: Service Summary */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">
                        Service Summary
                    </h2>

                    <div className="space-y-3 text-gray-700">
                        <p>
                            <span className="font-medium">Service:</span>{" "}
                            {service.title}
                        </p>

                        <p>
                            <span className="font-medium">Category:</span>{" "}
                            {service.category}
                        </p>

                        <p>
                            <span className="font-medium">Price:</span>{" "}
                            ৳ {service.price} ({service.priceUnit})
                        </p>

                        <p>
                            <span className="font-medium">Booked By:</span>{" "}
                            {user?.displayName}
                        </p>

                        <p>
                            <span className="font-medium">Email:</span>{" "}
                            {user?.email}
                        </p>
                    </div>
                </div>

                {/* RIGHT: Booking Form */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">
                        Booking Details
                    </h2>

                    <form className="space-y-4">

                        {/* Booking Date */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Select Date
                                </span>
                            </label>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Service Location */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Service Location
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your address"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Service Mode */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Service Mode
                                </span>
                            </label>
                            <select
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select service mode</option>
                                <option value="consultation">Consultation</option>
                                <option value="on-site">On-site Service</option>
                            </select>
                        </div>

                        {/* Optional Note */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">
                                    Additional Note (optional)
                                </span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Any special requirements..."
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-8 py-2 font-bold text-white rounded
              bg-[#FF6B6B]
              hover:bg-linear-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
              transition-all duration-500 ease-in-out hover:scale-105"
                        >
                            Confirm Booking
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookingPage;
