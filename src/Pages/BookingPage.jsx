import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useParams } from "react-router";
import useAxios from "../Hooks/useAxios";
import LoadingSpennier from "../Components/LoadingSpennier";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingPage = () => {
    const { user } = useAuth()
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [service, setService] = useState({})
    const axios = useAxios()
    // const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()

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

    const handleBookingFormSubmit = (data) => {

        const bookingData = {
            userName: user?.displayName || user?.name || "User",
            email: user?.email,

            serviceId: service._id,
            serviceTitle: service.title,
            serviceCategory: service.category,
            servicePrice: service.price,

            bookingDate: data.bookingDate,
            serviceLocation: data.serviceLocation,
            serviceMode: data.serviceMode,
            note: data.note || ""
        }

        axios.post('/bookings', bookingData).then(() => {
            toast.success("Booking confirmed successfully!");
            reset()
            // navigate('/dashboard/myBooking')
        })
            .catch(error => {
                toast.error("Failed to confirm booking");
                console.log(error);
            })

    }
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">Book Your Service</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* LEFT: Service Summary */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">Service Summary</h2>
                    <div className="space-y-3 text-gray-700">
                        <p><span className="font-medium">Service:</span> {service.title}</p>
                        <p><span className="font-medium">Category:</span> {service.category}</p>
                        <p><span className="font-medium">Price:</span> ৳ {service.price} ({service.priceUnit})</p>
                        <p><span className="font-medium">Booked By:</span> {user?.displayName}</p>
                        <p><span className="font-medium">Email:</span> {user?.email}</p>
                    </div>
                </div>

                {/* RIGHT: Booking Form */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

                    <form onSubmit={handleSubmit(handleBookingFormSubmit)} className="space-y-4">
                        {/* Booking Date */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Select Date *</span>
                            </label>
                            <input
                                type="date"
                                {...register("bookingDate", { required: "Date is required" })}
                                className="input input-bordered w-full"
                                min={new Date().toISOString().split("T")[0]}
                            />
                            {errors.bookingDate && <p className="text-red-500 text-sm mt-1">{errors.bookingDate.message}</p>}
                        </div>

                        {/* Service Location */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Service Location *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your full address"
                                {...register("serviceLocation", { required: "Location is required" })}
                                className="input input-bordered w-full"
                            />
                            {errors.serviceLocation && <p className="text-red-500 text-sm mt-1">{errors.serviceLocation.message}</p>}
                        </div>

                        {/* Service Mode */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Service Mode *</span>
                            </label>
                            <select
                                {...register("serviceMode", { required: "Please select a mode" })}
                                className="select select-bordered w-full"
                            >
                                <option value="">Select mode</option>
                                {service.serviceMode?.map(mode => (
                                    <option key={mode} value={mode}>{mode}</option>
                                ))}
                            </select>
                            {errors.serviceMode && <p className="text-red-500 text-sm mt-1">{errors.serviceMode.message}</p>}
                        </div>

                        {/* Note */}
                        <div>
                            <label className="label">
                                <span className="label-text font-medium">Additional Note (optional)</span>
                            </label>
                            <textarea
                                {...register("note")}
                                className="textarea textarea-bordered w-full"
                                placeholder="Any special requirements..."
                                rows="3"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full py-3 font-bold text-white rounded transition-all hover:scale-105 ${isSubmitting
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-[#FF6B6B] hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]"
                                }`}
                        >
                            {isSubmitting ? "Confirming..." : "Confirm Booking"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
