import React, { useEffect, useState } from 'react';
import HeroSwiper from '../Components/HeroSwiper';
import useAxios from '../Hooks/useAxios';
import ServiceCardDesign from '../Components/ServiceCardDesign';
import { Link } from 'react-router';


const Home = () => {
    const axios = useAxios();
    const [feturedServices, setFeturedServices] = useState([]);

    useEffect(() => {
        axios.get('services/featured')
            .then(res => { setFeturedServices(res.data) })
            .catch(err => { console.log(err) });
    }, [axios])

    return (
        <div>
            {/* some image slider for recent project */}
            <HeroSwiper></HeroSwiper>

            {/* some featured services */}
            <h2 className='text-5xl font-bold mt-10'>Innovative Design Services for <span className='text-[#FF6B6B]'>Every Need</span></h2>
            <p className='py-4 text-xl opacity-85 md:w-3/4'>At Best Interior Design, we provide all kinds of interior design services. Our expertise isn’t limited to interiors—we also handle many exterior design projects. Our skilled architects conduct site visits, create proper planning and 3D designs, and then begin the actual project to ensure we meet your needs.</p>

            <div className='grid md:grid-cols-3 gap-6 my-10'>
                {
                    feturedServices.map(service => <ServiceCardDesign service={service} key={service._id}></ServiceCardDesign>)
                }
            </div>
            <div className='flex items-center justify-center my-10'>
                <Link to={"/servicesPage"} className="px-8 text-white font-bold py-4 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105">See All Services</Link>
            </div>


        </div>
    );
};

export default Home;