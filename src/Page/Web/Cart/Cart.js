import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const Cart = () => {
    const { user } = useAuth();


    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get("https://tranquil-basin-17723.herokuapp.com/cart")
            .then(res => setCart(res.data))
    }, [])

    const [userCart, setUserCart] = useState([]);
    useEffect(() => {
        const userItemCart = cart.filter(singleCartItem => singleCartItem.email == user.email)
        setUserCart(userItemCart)
    }, [cart])

    // Handle delete package
    const deletePackage = id => {
        const warning = window.confirm("Are you sure want to remove this package")
        if (warning) {
            axios.delete(`https://tranquil-basin-17723.herokuapp.com/cart/${id}`)
                .then(res => console.log(res));

            const remainingPackage = cart.filter(cartItem => cartItem._id != id)
            setCart(remainingPackage)
        }
    }

    // Handle checkout
    const checkout = () => {
        axios.delete(`https://tranquil-basin-17723.herokuapp.com/carts/${user.email}`)
            .then(res => console.log(res));
        alert('Thank you');
        setCart([])
    }
    return (
        <div className="md:flex gap-6 justify-between">
            {/* Cart ordered area */}
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8 px-8 py-12">
                {cart?.map(singleItem => {
                    if (singleItem.email == user.email) {
                        return <div>
                            <div key={singleItem?.order._id} className="group relative hover:shadow-xl transition-all duration-500 py-6 px-2 rounded-xl">
                                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={singleItem?.order.img}
                                        alt="kisu nai"
                                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="px-6">
                                    <h3 className="text-2xl text-center text-gray-700">
                                        {singleItem?.order.name}
                                    </h3>
                                    <div className="mt-5 flex justify-between items-center">
                                        <p className="text-sm font-medium text-gray-900">{singleItem?.order.price}</p>
                                        <p className="text-sm font-medium text-gray-900">Rating : {singleItem?.order.rating}</p>
                                    </div>
                                    <p className="text-center"><button className="px-5 py-2 rounded-lg bg-yellow-400 text-white" onClick={() => { deletePackage(singleItem?._id) }}>Remove package</button></p>
                                </div>
                            </div>
                        </div>
                    }
                })}
            </div>
            <div className="py-6 px-4">
                <h1 className="text-center text-xl font-medium">Checkout your tour packages</h1>
                <br />
                <p className="text-base font-medium">You ordered {userCart.length} packages</p>
                <p className="text-center"><button className="px-5 py-2 rounded-lg bg-yellow-400 text-white" onClick={checkout}>Checkout</button></p>
            </div>
        </div>
    );
};

export default Cart;