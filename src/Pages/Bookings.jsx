import React, { useEffect } from 'react';
import useAxios from '../Hooks/useAxios';
import useAuth from '../Hooks/useAuth';

const Bookings = () => {
    const { user } = useAuth()
    const axios = useAxios()
    useEffect(() => {
        axios.get(``)
    }, [axios])
    return (
        <div>
            booking pages
        </div>
    );
};

export default Bookings;