import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import LoadingSpennier from "../Components/LoadingSpennier";

const AdminRoute = ({ children }) => {
    const { user, role, loading } = useAuth();

    if (loading) {
        return <LoadingSpennier></LoadingSpennier>
    }

    if (!user || role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default AdminRoute;
