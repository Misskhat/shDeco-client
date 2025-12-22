import { useParams, useNavigate } from "react-router";
import useAxios from "../Hooks/useAxios";
import LoadingSpennier from "../Components/LoadingSpennier";
import { useQuery } from "@tanstack/react-query";

const PaymentPage = () => {
    const { bookingId } = useParams();
    const axiosSecure = useAxios();
    const navigate = useNavigate();

    const { data: booking, isLoading, error } = useQuery({
        queryKey: ["booking", bookingId],
        queryFn: async () => {
            const response = await axiosSecure.get(`/bookings/${bookingId}`);
            return response.data;
        },
    });

    const handlePayment = async () => {
        if (!booking) return;

        const paymentInfo = {
            cost: booking.servicePrice,
            serviceTitle: booking.serviceTitle,
            bookingId: booking._id,
            userEmail: booking.email,
        };

        try {
            const response = await axiosSecure.post(
                "/create-checkout-session",
                paymentInfo
            );
            window.location.assign(response.data.url);
        } catch (err) {
            console.error(err);
            alert("Payment initiation failed");
        }
    };

    if (isLoading) return <LoadingSpennier />;
    if (error) return <p>Error loading booking data</p>;
    if (!booking) return <p>Booking not found</p>;

    return (
        <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg bg-base-100 mt-10">
            <h2 className="text-2xl font-bold mb-4">Pay for your Booking</h2>
            <p className="mb-2">
                <span className="font-semibold">Service:</span> {booking.serviceTitle}
            </p>
            <p className="mb-2">
                <span className="font-semibold">Category:</span> {booking.serviceCategory}
            </p>
            <p className="mb-4">
                <span className="font-semibold">Price:</span> ৳{booking.servicePrice}
            </p>

            <button
                onClick={handlePayment}
                className="btn bg-[#FF6B6B] text-white font-bold w-full"
            >
                Pay Now
            </button>
        </div>
    );
};

export default PaymentPage;
