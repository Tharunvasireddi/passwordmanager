import axios from "axios";

const axiosInstance = axios.create({
    baseURL : import.meta.env.NODE_ENV === "production" ? "https://passwordmanager-y7dm.onrender.com" : "http://localhost:3000",
    withCredentials : true,
})

export default axiosInstance;