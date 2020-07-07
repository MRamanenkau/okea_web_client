import * as React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import authentication from '../helpers/Authentication';

export const ProtectedRoute = ({ component: Component, ...rest }: RouteProps): JSX.Element | null => {
    if (!Component) {
        return null;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                authentication.isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
