import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./Services.css"

const Services = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/spots")
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    return (
        <>
            {/* Banner Top */}
            <div className="services-banner-top py-52 px-12 text-center text-white">
                <p className="text-xl font-semibold">Amazing Tour</p>
                <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">Our Services</h1>
            </div>

            {/* Service area */}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-8 py-12">
                {spots.map((spot) => (
                    <div key={spot._id} className="group relative hover:shadow-xl transition-all duration-500 py-6 px-2 rounded-xl">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={spot.img}
                                alt="kisu nai"
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="px-6">
                            <h3 className="text-2xl text-center text-gray-700">
                                <NavLink to={`/services/${spot.name}`}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {spot.name}
                                </NavLink>
                            </h3>
                            <div className="mt-5 flex justify-between items-center">
                                <p className="text-sm font-medium text-gray-900">{spot.price}</p>
                                <p className="text-sm font-medium text-gray-900">Rating : {spot.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Services;