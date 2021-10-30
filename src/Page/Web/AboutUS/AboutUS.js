import React from 'react';
import "./AboutUS.css"

const AboutUS = () => {
    return (
        <>
            {/* Banner area */}
            <div className="banner-top py-40 px-8 text-center text-yellow-500">
                <p className="text-xl font-bold">AMAZING</p>
                <h1 className="text-6xl font-bold">About US</h1>
            </div>

            {/* Heading text */}
            <div className="mt-8 md:flex justify-between items-center py-8 px-8">
                <div>
                    <h1 className="text-4xl font-bold">Our Popular Tours</h1>
                    <br />
                    <p className="text-base">Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. Tn eam dimo diam ea. Piber Korem sit amet.</p>
                    <br />
                    <p className="text-sm">Al elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim. En eam dico similique, ut sint posse sit, eum sumo diam ea. Liber consectetuer in mei, sea in imperdiet assue verit contentio nes, an his cibo blandit tacimates. Iusto iudi cabit sim ilique id velex, in sea rebum deseruisse appellantur. Etiam rhoncus. Maec enas tempus, tellus eget condimentum rhoncus.Aliquam lorem ante, dapibus in, viverra quis, feugiat</p>
                </div>
                <img className="rounded-full" src="https://images.unsplash.com/photo-1540339832862-474599807836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Kisu nai" />
            </div>
        </>
    );
};

export default AboutUS;