import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadingSpennier from '../Components/LoadingSpennier';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return <LoadingSpennier></LoadingSpennier>
    }

    if (!user) {
        return <Navigate to={"/loginPage"} state={location}></Navigate>
    }

    return children
};

export default PrivateRouter;