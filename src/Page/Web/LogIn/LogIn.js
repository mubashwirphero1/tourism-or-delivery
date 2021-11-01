import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const LogIn = () => {
    const { signInUsingGoogle, error, user } = useAuth();
    const history = useHistory();
    if (user.email) {
        history.push("/services");
    }
    return (
        <div className="mx-auto">
            <h1 className="text-6xl text-center font-semibold">LOG IN WITH GOOGLE</h1>
            <p className="text-center my-6"><button onClick={signInUsingGoogle} className="py-3 px-5 text-white bg-blue-500 font-semibold rounded-lg">Log IN</button></p>
            {error ? <p className="text-xl text-center">{error}</p> : <p></p>}
        </div>
    );
};

export default LogIn;