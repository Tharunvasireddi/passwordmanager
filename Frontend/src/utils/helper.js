import axiosInstance from "../api/axiosInstance";

const registerUser = async({username,email,password})=>{
    try{
        const {data} = await axiosInstance.post("/PasswordManager/register",{username,email,password});
        return data;
    }catch(error){
        console.log(error);
    }
}


export {registerUser}