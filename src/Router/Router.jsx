import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import MapPage from "../Pages/MapPage";
import ErrorPage from "../Pages/ErrorPage";
import RegisterPage from "../Pages/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import BookingPage from "../Pages/BookingPage";
import DashBoardLayouts from "../Layouts/DashBoardLayouts/DashBoardLayouts";
import Bookings from "../Pages/Bookings";
import Payment from "../Pages/Payment";
import AdminRoute from "./AdminRoute";
import DecoratorRoute from "./DecoratorRoute";
import AdminBookings from "../Pages/AdminBooking";
import DecoratorProjects from "../Pages/DecoratorProjects";

export const router = createBrowserRouter([
    {
        path: "/",
        hydrateFallbackElement: <ErrorPage></ErrorPage>,
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'loginPage',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'registerPage',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: 'servicesPage',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: 'services/details/:id',
                element: <PrivateRouter><ServiceDetailsPage></ServiceDetailsPage></PrivateRouter>
            },
            {
                path: "bookingPage/:id",
                element: <PrivateRouter><BookingPage></BookingPage></PrivateRouter>
            },
            {
                path: "mapPage",
                element: <MapPage></MapPage>
            }
        ]
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRouter>
                <DashBoardLayouts />
            </PrivateRouter>
        ),
        children: [
            {
                index: "/dashboard/bookings",
                element: <Bookings />
            },

            // Admin
            {
                path: "admin/bookings",
                element: (
                    <AdminRoute>
                        <AdminBookings />
                    </AdminRoute>
                )
            },

            // Decorator
            {
                path: "decorator/projects",
                element: (
                    <DecoratorRoute>
                        <DecoratorProjects />
                    </DecoratorRoute>
                )
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);