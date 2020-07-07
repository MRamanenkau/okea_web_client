import axios from 'axios';
import authentication from '../helpers/Authentication';

const FORBIDDEN_STATUS = 403;
const JWT_EXPIRED_MESSAGE = 'Token error: jwt expired';

const http = axios.create();

http.interceptors.request.use((config) => {
    config.headers.Authorization = authentication.getAccessToken();
    config.headers.xsrfCookieName = 'XSRF-TOKEN';
    config.headers.xsrfHeaderName = 'X-XSRF-TOKEN';

    return config;
});

http.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === FORBIDDEN_STATUS && error.response?.data?.message === JWT_EXPIRED_MESSAGE) {
            await authentication.refreshTokens();
            return http.request(error.config);
        }

        return Promise.reject(error);
    },
);

export default http;
