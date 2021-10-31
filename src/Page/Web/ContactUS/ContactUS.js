import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';
import "./ContactUS.css"

const ContactUS = () => {
    return (
        <>
            {/* Banner area */}
            <div className="banner-top-area py-40 px-8 text-center text-yellow-500 font-semibold">
                <p className="text-xl font-semibold">Stay Connected With</p>
                <h1 className="lg:text-8xl md:text-4xl sm:text-2xl font-bold">Travel GURU</h1>
            </div>

            {/* Heading text */}
            <div className="md:flex justify-between items-center mt-20 px-10 gap-6">
                <div className="">
                    <h1 className="text-5xl font-medium">Contact Us Now</h1>
                    <br />
                    <p className="text-lg">
                        If you want to contact with us checkout our FACEBOOK, TWITTER, LINKEDIN, INSTAGRAM. Also you can check our EMAIL. OR call us in our HOTLINE
                    </p>
                </div>
                <img className="rounded-2xl" src="https://media.istockphoto.com/photos/phone-and-email-icons-on-wooden-cubes-with-contact-us-text-on-blue-picture-id1271752802?b=1&k=20&m=1271752802&s=170667a&w=0&h=sMEPVY49FAy2UHkhyQLWDHlAhYsR2F2NDkNlSEteO3s=" alt="" />
            </div>

            {/* Location area */}
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32 px-12">
                <div>
                    <h1 className="text-3xl font-semibold">Paris</h1>
                    <br />
                    <p className="text-lg">Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea. Piqor sit.</p>
                    <br />
                    <p className="flex px-7">
                        <MailIcon className="h-6 w-6 text-blue-400 mr-2"></MailIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">travel.guru@qode.com</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <PhoneIcon className="h-6 w-6 text-blue-400 mr-2"></PhoneIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">5544332211</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <LocationMarkerIcon className="h-6 w-6 text-blue-400 mr-2"></LocationMarkerIcon>
                        <span className="text-lg text-black cursor-pointer hover:text-blue-400">Place des Pyramides 7 Paris</span>
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">London</h1>
                    <br />
                    <p className="text-lg">Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea. Piqor sit.</p>
                    <br />
                    <p className="flex px-7">
                        <MailIcon className="h-6 w-6 text-blue-400 mr-2"></MailIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">travel.guru@qode.com</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <PhoneIcon className="h-6 w-6 text-blue-400 mr-2"></PhoneIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">0011223344</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <LocationMarkerIcon className="h-6 w-6 text-blue-400 mr-2"></LocationMarkerIcon>
                        <span className="text-lg text-black cursor-pointer hover:text-blue-400">11 Strand London WC2N 5RJ</span>
                    </p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">New York</h1>
                    <br />
                    <p className="text-lg">Agam fabulas. Ut audiam invenire iracun. Tn eam dimo diam ea. Piqor sit.</p>
                    <br />
                    <p className="flex px-7">
                        <MailIcon className="h-6 w-6 text-blue-400 mr-2"></MailIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">travel.guru@qode.com</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <PhoneIcon className="h-6 w-6 text-blue-400 mr-2"></PhoneIcon>
                        <span className="text-black text-lg cursor-pointer hover:text-blue-400">1122334455</span>
                    </p>
                    <br />
                    <p className="flex px-7">
                        <LocationMarkerIcon className="h-6 w-6 text-blue-400 mr-2"></LocationMarkerIcon>
                        <span className="text-lg text-black cursor-pointer hover:text-blue-400">Broadway New York, NY 10031</span>
                    </p>
                </div>
            </div>

            {/* Subscribe form */}
            <div className="my-32 px-12 py-10 bg-gray-200">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-2xl font-medium leading-6 text-black">SUBSCRIBE</h3>
                            <p className="mt-1 text-xl text-gray-800">Get notified our newsletter</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-lg font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-lg font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-lg font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-lg font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-blue-500 sm:text-sm md:text-xl"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-lg font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                autoComplete="street-address"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md md:text-xl"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                autoComplete="address-level2"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-lg font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                autoComplete="address-level1"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-lg font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                autoComplete="postal-code"
                                                className="mt-1 focus:ring-indigo-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm md:text-xl border-gray-300 rounded-md"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUS;