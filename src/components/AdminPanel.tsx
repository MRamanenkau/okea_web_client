import * as React from 'react';
import http from '../helpers/http';
import host from '../../hosts.json';
import authentication from '../helpers/Authentication';

export const AdminPanel = (): JSX.Element => (
    <div>
        <p>Admin Panel</p>
        <button onClick={() => authentication.signOut()}>Sign Out</button>
        <button onClick={() => http.get(`${host.okeaApi}/user`)}>Get users</button>
    </div>
);
