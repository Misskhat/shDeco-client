import React from 'react';

const ServiceCardDesign = ({ service }) => {
    const { coverImage, title, shortDescription } = service
    // console.log(service)
    return (
        <div>
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
                {/* Background Image */}
                <img
                    src={coverImage}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

                {/* Text Content at the Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{title}</h3>
                    <p className="text-lg md:text-xl opacity-90">{shortDescription}</p>
                </div>

                {/* Optional Hover Effect: Slight brighten or additional overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
        </div>
    );
};

export default ServiceCardDesign;