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

const getAllPasswords = async()=>{
    try{
        console.log("fetching the passwords")
        const {data} = await axiosInstance.get("/passwordManager/fetch");
        console.log("Passwords fetched successfully:", data);
        return data;
    }catch(error){
        console.error("Get all passwords error:", error);
        console.error("Error response:", error.response?.data);
        console.error("Error status:", error.response?.status);
        throw error.response?.data || error;
    }
}
const deletePassword = async(id)=>{
    try{
        const {data} = await axiosInstance.delete(`/passwordManager/delete/${id}`);
        return data;
    }catch(error){
        console.error("Delete password error:", error);
        throw error.response?.data || error;
    }
}   
export {registerUser,loginUser,createPassword,getAllPasswords,deletePassword}   