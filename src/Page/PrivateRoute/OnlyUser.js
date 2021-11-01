import React from 'react';
import { Redirect, Route } from 'react-router';
import { RingLoader } from 'react-spinners';
import useAuth from '../../Hooks/useAuth';

const OnlyUser = ({ children, ...rest }) => {
    const { user, loading } = useAuth();
    if (loading) return <RingLoader></RingLoader>
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default OnlyUser;