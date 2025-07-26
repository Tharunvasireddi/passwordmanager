import axiosInstance from "../api/axiosInstance";

const registerUser = async({username,email,password})=>{
    try{
        const {data} = await axiosInstance.post("/passwordManager/register",{username,email,password});
        return data;
    }catch(error){
        console.error("Registration error:", error);
        throw error.response?.data || error;
    }
}

const loginUser = async({username,password})=>{
    try{
        const {data} = await axiosInstance.post("/passwordManager/login",{username,password});
        return data;
    }catch(error){
        console.error("Login error:", error);
        throw error.response?.data || error;
    }
}

const createPassword = async({appname,password})=>{
    try{
        const {data} = await axiosInstance.post("/passwordManager/addpassword",{appname,password});
        return data;
    }catch(error){
        console.error("Create password error:", error);
        throw error.response?.data || error;
    }
}
export {registerUser,loginUser,createPassword}