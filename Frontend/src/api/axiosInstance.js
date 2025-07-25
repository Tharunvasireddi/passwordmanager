import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "localhost:3000",
    withCredentials : "true",
})

export default axiosInstance
