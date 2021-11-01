import { CameraIcon, GlobeAltIcon, LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/outline';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        axios.get("https://tranquil-basin-17723.herokuapp.com/homeSpots")
            .then(res => setSpots(res.data))
    }, [])
    console.log(spots)
    return (
        <>
            {/* Banner top area */}
            <div className="py-32 banner-top-home text-center text-white">
                <p className="text-xl font-semibold">Come with us</p>
                <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">Relax & Enjoy</h1>
            </div>

            {/* Service area */}
            <div className="py-32 px-8">
                <div className="text-center">
                    <p className="text-xl font-semibold text-blue-400">Choose your</p>
                    <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">Best Holiday</h1>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 px-8 py-12">
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
            </div>

            {/* Breathtaking places */}

            <div className="py-32 px-8">
                <div className="text-center">
                    <p className="text-xl font-semibold text-blue-400">Go and discover</p>
                    <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">Breathtaking places</h1>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 px-8 py-12">
                    <div className="text-center">
                        <CameraIcon className="w-12 h-12 text-yellow-500 mx-auto"></CameraIcon>
                        <h4 className="text-xl font-bold">Restaurants</h4>
                        <p className="text-sm font-normal">Best places and best restaurants</p>
                    </div>
                    <div className="text-center">
                        <LocationMarkerIcon className="w-12 h-12 text-yellow-500 mx-auto"></LocationMarkerIcon>
                        <h4 className="text-xl font-bold">Sightseeing</h4>
                        <p className="text-sm font-normal">Amazing scenes you can see from restaurants</p>
                    </div>
                    <div className="text-center">
                        <OfficeBuildingIcon className="w-12 h-12 text-yellow-500 mx-auto"></OfficeBuildingIcon>
                        <h4 className="text-xl font-bold">Shops and boutiques</h4>
                        <p className="text-sm font-normal">You can shopping in many famous shopping markets</p>
                    </div>
                    <div className="text-center">
                        <GlobeAltIcon className="w-12 h-12 text-yellow-500 mx-auto"></GlobeAltIcon>
                        <h1 className="text-xl font-bold">Where to stay</h1>
                        <p className="text-sm font-normal">We provide you the best spots to stay</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;