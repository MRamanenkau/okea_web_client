import http from './http';
import host from '../../hosts.json';

class Authentication {
    public async authenticate(email: string, password: string): Promise<void> {
        const response = await http.post(`${host.okeaApi}/login`, { email, password }, { withCredentials: true });
        localStorage.setItem('accessToken', response?.data?.accessToken);
    }

    public getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    public isAuthenticated() {
        return !!localStorage.getItem('accessToken');
    }

    public async refreshTokens() {
        const response = await http.get(`${host.okeaApi}/refresh-tokens`);
        localStorage.setItem('accessToken', response?.data?.accessToken);
    }

    public signOut() {
        localStorage.removeItem('accessToken');
        location.replace('#/admin');
    }
}

export default new Authentication();
