import React, { useEffect, useState } from 'react';
import { Star, Clock, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import useAxios from '../Hooks/useAxios';
import LoadingSpennier from '../Components/LoadingSpennier';

const ServiceDetailsPage = () => {
    const { id } = useParams()
    // console.log(id)
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [service, setService] = useState({})
    const axios = useAxios()

    useEffect(() => {
        if (!id) {
            <LoadingSpennier></LoadingSpennier>
        }
        axios.get(`services/details/${id}`)
            .then(res => {
                setService(res.data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [axios, id, loading])



    // const service = {
    //     _id: "6946e1b59aa49ac90979ce3a",
    //     title: "Exterior Design",
    //     subtitle: "Beautiful first impressions",
    //     category: "exterior",
    //     price: 38000,
    //     priceUnit: "per project",
    //     rating: 4.7,
    //     reviews: 105,
    //     coverImage: "https://i.ibb.co.com/WWTPHScH/exterior-Design.jpg",
    //     shortDescription: "Modern exterior design for buildings.",
    //     longDescription: "Our exterior design service enhances the outer appearance of buildings using modern materials, lighting, and landscaping concepts.",
    //     features: [
    //         "Facade design",
    //         "Outdoor lighting",
    //         "Material selection",
    //         "Landscape integration"
    //     ],
    //     duration: "4–6 days",
    //     serviceMode: ["On-site"],
    //     coverageArea: "Urban & Suburban Areas",
    //     available: true
    // };

    const handleBooking = () => {
        // navigate(`/booking/${service._id}`);
        console.log('button clicked')
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Cover Image */}
                <div className="relative rounded-xl overflow-hidden shadow-xl mb-8">
                    <img
                        src={service.coverImage}
                        alt={service.title}
                        className="w-full h-96 sm:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{service.title}</h1>
                        <p className="text-xl sm:text-2xl opacity-90">{service.subtitle}</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Short Description */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed">{service.shortDescription}</p>
                        </div>

                        {/* Long Description */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
                            <p className="text-gray-700 leading-relaxed">{service.longDescription}</p>
                        </div>

                        {/* Features */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h2 className="text-2xl font-semibold mb-6">What's Included</h2>
                            <ul className="grid sm:grid-cols-2 gap-4">
                                {service?.features?.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-700">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar - Pricing & Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-xl p-6 sticky top-8">
                            <div className="mb-6">
                                <div className="flex items-baseline mb-2">
                                    <span className="text-4xl font-bold text-gray-900">৳{service.price}</span>
                                    <span className="text-lg text-gray-600 ml-2">{service.priceUnit}</span>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="ml-2 text-gray-700 font-medium">{service?.rating}</span>
                                    <span className="ml-2 text-gray-500">({service?.reviews} reviews)</span>
                                </div>

                                {/* Info Rows */}
                                <div className="space-y-4 text-gray-700">
                                    <div className="flex items-center">
                                        <Clock className="w-5 h-5 mr-3 text-blue-600" />
                                        <div>
                                            <p className="font-medium">Duration</p>
                                            <p>{service?.duration}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                                        <div>
                                            <p className="font-medium">Coverage Area</p>
                                            <p>{service?.coverageArea}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {service?.serviceMode?.map((mode) => (
                                            <span key={mode} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                                {mode}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Booking Button */}
                            <button
                                onClick={handleBooking}
                                disabled={!service.available}
                                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-3 ${service.available
                                    ? "px - 8 text-white font-bold py-2 rounded bg-[#FF6B6B] hover:bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] transition-all duration-500 ease-in-out hover:scale-105"
                                    : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                    }`}
                            >
                                {service.available ? 'Book This Service' : 'Currently Unavailable'}
                                {service.available && <ArrowRight className="w-5 h-5" />}
                            </button>

                            {!service.available && (
                                <p className="text-center text-sm text-gray-500 mt-4">
                                    This service is temporarily unavailable.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsPage;  