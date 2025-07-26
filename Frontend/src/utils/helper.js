import axiosInstance from "../api/axiosInstance";

const registerUser = async({username,email,password})=>{
    try{
        const {data} = await axiosInstance.post("/PasswordManager/register",{username,email,password});
        return data;
    }catch(error){
        console.log(error);
    }
}

const loginUser = async({username,password})=>{
    try{
        const {data} = await axiosInstance.post("/PasswordManager/login",{username,password});
        return data;
    }catch(error){
        console.log(error);
    }
}

const createPassword = async({appname,password})=>{
    try{
        const {data} = await axiosInstance.post("/PasswordManager/addpassword",{appname,password});
        return data;
    }catch(error){
        console.log(error);
    }
}
export {registerUser,loginUser,createPassword}