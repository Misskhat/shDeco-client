import React, { useEffect, useState } from 'react';
import useAxios from '../Hooks/useAxios';
import ServiceCardDesign from '../Components/ServiceCardDesign';

const ServicesPage = () => {
    const [services, setServices] = useState([])
    const axios = useAxios()
    useEffect(() => {
        axios.get('/services')
            .then(res => setServices(res.data))
            .catch(error => console.log(error))
    }, [axios])
    return (
        <div className='my-10'>
            <h2 className='text-5xl font-bold text-center text-[#FFD93D] hover:text-[#FF6B6B] transition-all duration-500 ease-in-out hover:scale-105'> Our Services </h2>
            <p className='text-xl font-bold text-center text-[#FF6B6B]'>You imagination make it real.</p>
            <div className='grid md:grid-cols-3 gap-6 my-10'>
                {
                    services.map(service => <ServiceCardDesign key={service._id} service={service}></ServiceCardDesign>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;