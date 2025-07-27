import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.MODE === "production" ? "https://passwordmanager-y7dm.onrender.com" : "http://localhost:3000",
    withCredentials : true,
})

// Add request interceptor to include token in headers
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle token expiration
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.data?.message === "token is not found") {
            // Token is invalid or expired, clear it from localStorage
            localStorage.removeItem('token');
            // Redirect to login page
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;