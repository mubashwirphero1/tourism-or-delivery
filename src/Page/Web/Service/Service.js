import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Service = () => {
    const history = useHistory();

    const { loading, user } = useAuth();
    const { spotName } = useParams();

    const [spots, setSpots] = useState([]);
    useEffect(() => {
        axios.get("https://tranquil-basin-17723.herokuapp.com/spots")
            .then(res => setSpots(res.data))
    }, [])

    // Getting items on cart
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axios.get("https://tranquil-basin-17723.herokuapp.com/cart")
            .then(res => setCart(res.data))
    }, [])

    // Finding the expected service
    const expectedSpot = spots?.find(singleSpot => singleSpot.name == spotName);

    // Finding single element of the cart
    const cartItem = cart?.map(singleCartItem => singleCartItem)
    // Event handler for book order
    const bookOrder = () => {

        if (cartItem?.id == expectedSpot._id) {
            return;
        }
        else {
            axios.post("https://tranquil-basin-17723.herokuapp.com/cart", {
                order: expectedSpot,
                id: expectedSpot._id,
                email: user.email
            })
                .then(res => console.log(res))
        }
        history.push("/cart")
    }

    if (loading) return <p className="text-base text-center font-medium">LOADING</p>
    return (
        <>
            <div className="md:flex justify-between items-center gap-6 p-8">
                <img src={expectedSpot?.img} alt="Kisu nai" className="rounded-lg" />
                <div>
                    <h1 className="text-4xl font-bold">{expectedSpot?.name}</h1>
                    <br />
                    <p className="text- font-medium">{expectedSpot?.description}</p>
                    <br />
                    <div className="md:flex justify-between items-center">
                        <p className="text-base">{expectedSpot?.price}</p>
                        <p className="text-base">Ratings : {expectedSpot?.rating}</p>
                    </div>
                    <br />
                    <button onClick={bookOrder} className="py-3 px-5 rounded-lg text-xl font-medium bg-yellow-400 text-white">Book now</button>
                </div>
            </div>

        </>
    );
};

export default Service;