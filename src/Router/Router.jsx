import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import ServicesPage from "../Pages/ServicesPage";
import ServiceDetailsPage from "../Pages/ServiceDetailsPage";
import MapPage from "../Pages/MapPage";
import ErrorPage from "../Pages/ErrorPage";

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
                path: 'servicesPage',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: 'serviceDetails/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>
            },
            {
                path: "mapPage",
                element: <MapPage></MapPage>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
]);