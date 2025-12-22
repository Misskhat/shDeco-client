import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";


const DashboardHome = () => {
    const { user, loading } = useAuth();

    // Optional: show loading while role is being fetched
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    const role = user?.role || "user";

    // Redirect based on role
    if (role === "admin") {
        return <Navigate to="/dashboard/admin/bookings" replace />;
    }

    if (role === "decorator") {
        return <Navigate to="/dashboard/decorator/projects" replace />;
    }

    // Default user dashboard
    return <Navigate to="/dashboard/bookings" replace />;
};

export default DashboardHome;
