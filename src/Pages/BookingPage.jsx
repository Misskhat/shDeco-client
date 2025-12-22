import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { useParams, useNavigate } from "react-router";
import useAxios from "../Hooks/useAxios";
import LoadingSpennier from "../Components/LoadingSpennier";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const BookingPage = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    // 🔐 Auth guard
    useEffect(() => {
        if (!user) {
            toast.error("Please login to book a service");
            navigate("/login");
        }
    }, [user, navigate]);

    // Fetch service details
    useEffect(() => {
        if (!id) return;

        setLoading(true);
        axios.get(`/services/details/${id}`)
            .then(res => {
                setService(res.data);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Failed to load service");
                setLoading(false);
            });
    }, [axios, id]);

    if (loading) return <LoadingSpennier />;

    if (!service) {
        return <p className="text-center text-red-500">Service not found</p>;
    }

    // 📝 Booking submit
    const handleBookingFormSubmit = (data) => {
        const bookingData = {
            userName: user?.displayName || "User",
            email: user?.email,

            serviceId: service._id,
            serviceTitle: service.title,
            serviceCategory: service.category,
            servicePrice: service.price,

            bookingDate: data.bookingDate,
            serviceLocation: data.serviceLocation,
            serviceMode: data.serviceMode,
            note: data.note || "",

            status: "pending",
            paymentStatus: "unpaid",
            createdAt: new Date()
        };

        axios.post("/bookings", bookingData)
            .then(() => {
                toast.success("Booking confirmed successfully!");
                reset();
                navigate("/dashboard/bookings");
            })
            .catch(() => {
                toast.error("Failed to confirm booking");
            });
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">
                Book Your Service
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Service Summary */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">Service Summary</h2>
                    <div className="space-y-2">
                        <p><b>Service:</b> {service.title}</p>
                        <p><b>Category:</b> {service.category}</p>
                        <p><b>Price:</b> ৳ {service.price}</p>
                        <p><b>Booked By:</b> {user.displayName}</p>
                        <p><b>Email:</b> {user.email}</p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="border rounded-xl p-6 shadow-sm bg-base-100">
                    <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

                    <form
                        onSubmit={handleSubmit(handleBookingFormSubmit)}
                        className="space-y-4"
                    >
                        <input
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            {...register("bookingDate", { required: "Date is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.bookingDate && (
                            <p className="text-red-500 text-sm">{errors.bookingDate.message}</p>
                        )}

                        <input
                            type="text"
                            placeholder="Service location"
                            {...register("serviceLocation", { required: "Location required" })}
                            className="input input-bordered w-full"
                        />

                        <select
                            {...register("serviceMode", { required: "Select a mode" })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select mode</option>
                            {service.serviceMode?.map(mode => (
                                <option key={mode} value={mode}>{mode}</option>
                            ))}
                        </select>

                        <textarea
                            {...register("note")}
                            placeholder="Additional note (optional)"
                            className="textarea textarea-bordered w-full"
                        />

                        <button
                            disabled={isSubmitting}
                            className="w-full py-3 font-bold text-white rounded
                            bg-[#FF6B6B]
                            hover:bg-gradient-to-r hover:from-[#FF6B6B] hover:to-[#FFD93D]
                            transition-all hover:scale-105 disabled:opacity-60"
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
