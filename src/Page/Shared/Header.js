import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { LocationMarkerIcon, MailIcon, MenuIcon, PhoneIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, userName, logOut } = useAuth();
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <div className="bg-gray-800 px-8 py-2 md:flex">
                <p className="flex px-7">
                    <MailIcon className="h-6 w-6 text-blue-400 mr-2"></MailIcon>
                    <span className="text-white text-sm cursor-pointer hover:text-blue-400">travel.guru@qode.com</span>
                </p>
                <p className="flex px-7">
                    <PhoneIcon className="h-6 w-6 text-blue-400 mr-2"></PhoneIcon>
                    <span className="text-white text-sm cursor-pointer hover:text-blue-400">+880 135 867 5309</span>
                </p>
                <p className="flex px-7">
                    <LocationMarkerIcon className="h-6 w-6 text-blue-400 mr-2"></LocationMarkerIcon>
                    <span className="text-sm text-white cursor-pointer hover:text-blue-400">Broadway & Morris St, New York</span>
                </p>
            </div>
            {/* Menu area */}
            <Disclosure as="nav" className="bg-white">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-2 py-4 sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                    <NavLink to="/" className="sm:text-2xl md:text-4xl text-yellow-400 font-bold">Travel GURU</NavLink>
                                    <div className="hidden sm:block sm:ml-6">
                                        <div className="flex space-x-4  ml-10">
                                            <NavLink to="/home" className="px-3 py-2 text-base font-bold hover:text-blue-400">Home</NavLink>
                                            <NavLink to="/services" className="px-3 py-2 text-base font-bold hover:text-blue-400">Services</NavLink>
                                            <NavLink to="/about" className="px-3 py-2 text-base font-bold hover:text-blue-400">About US</NavLink>
                                            <NavLink to="/contact" className="px-3 py-2 text-base font-bold hover:text-blue-400">Contact US</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {user?.email ? <NavLink
                                        to="/cart"
                                        className="p-1 rounded-full text-yellow-500 hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-white"
                                    >
                                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                    </NavLink> : <p></p>}
                                    {userName ? <p className='text-black text-xl'>{userName}</p> : <p></p>}
                                    {/* Profile dropdown */}
                                    {user?.email ? <Menu as="div" className="ml-3 relative">
                                        <div>
                                            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={user.photoURL ? user.photoURL : <UserIcon />}
                                                    alt=""
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={logOut}
                                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                        >
                                                            Sign out
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu> : <div className='flex'>
                                        <NavLink to="/login" className="text-black hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign in</NavLink></div>}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <NavLink to="/home" className="px-3 py-2 text-sm font-bold hover:text-blue-400">Home</NavLink>
                                <NavLink to="/services" className="px-3 py-2 text-sm font-bold hover:text-blue-400">Services</NavLink>
                                <NavLink to="/about" className="px-3 py-2 text-sm font-bold hover:text-blue-400">About US</NavLink>
                                <NavLink to="/contact" className="px-3 py-2 text-sm font-bold hover:text-blue-400">Contact US</NavLink>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
};

export default Header;