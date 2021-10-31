import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-gray-900 py-5">
            <img className="w-full" src="https://media.istockphoto.com/photos/http-404-error-not-found-page-concept-picture-id1041884806?b=1&k=20&m=1041884806&s=170667a&w=0&h=1Ww_T1HPpBssM2QR8WaSabOQAg58rFzMyTMaD49No5U=" alt="Nai not found" />
            <br />
            <p className="text-center"><NavLink to="/" className="px-6 py-4 rounded-3xl bg-blue-500 text-white">GO BACK TO HOMEPAGE</NavLink></p>
        </div>
    );
};

export default NotFound;