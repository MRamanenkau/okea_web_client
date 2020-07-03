import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const isAuthenticated = true;

export const ProtectedRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element | null => {
    if (!Component) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
