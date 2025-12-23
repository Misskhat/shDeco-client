import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const MapPage = () => {

    const position = [23.6850, 90.3563]
    return (
        <div className='my-10'>
            <div className="mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-6 text-center text-[#FF6B6B]">About Us</h1>

                <article className="text-gray-600 mb-4">
                    <span className="text-2xl font-bold text-[#FF6B6B]">shDeco</span> is a modern service booking
                    platform designed to make booking and online payments simple, fast, and secure.
                    Users can easily book services, pay through Stripe, and track their bookings
                    from a personal dashboard.
                </article>

                <article className="text-gray-600 mb-4">
                    Our platform focuses on transparency, reliability, and user experience.
                    From service selection to payment confirmation, every step is optimized
                    for ease of use.
                </article>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        To simplify service booking with secure technology and a seamless user experience.
                    </p>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        To become a trusted platform for service booking and management through innovation
                        and reliability.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-6 text-center text-[#FF6B6B]">Out Location </h2>
            </div>
            <div className='h-[800px] w-full'>
                <MapContainer className='h-[800px]' center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Welcome to <span className='font-bold'>shDeco</span> <br />
                            Address: H# 111, R#222, Dhaka, Bangladesh.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
    );
};

export default MapPage;