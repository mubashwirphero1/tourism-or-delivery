import React from 'react';
import "./AboutUS.css"

const AboutUS = () => {
    return (
        <>
            {/* Banner area */}
            <div className="banner-top py-40 px-8 text-center text-yellow-500">
                <p className="text-xl font-semibold">AMAZING</p>
                <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">About US</h1>
            </div>

            {/* Heading text */}
            <div className="mt-8 md:flex justify-between items-center py-8 px-8">
                <div>
                    <h1 className="text-4xl font-bold">Our Popular Tours</h1>
                    <br />
                    <p className="text-base">Most of our tours is popular. So find your favorite tour</p>
                    <br />
                    <p className="text-sm">We will make a successful tour for you. If you enjoyed your favorite tour, please rate us. And subscribe for get notified our brand new tours</p>
                </div>
                <img className="rounded-full" src="https://images.unsplash.com/photo-1540339832862-474599807836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kisu nai" />
            </div>
        </>
    );
};

export default AboutUS;