import axiosInstance from "../api/axiosInstance";

const registerUser = async({name,email,password})=>{
    try{
        const {data} = axiosInstance.post("/PasswordManager/register",{name,email,password});
        return data;
    }catch(error){
        console.log(error);
    }
}


export {registerUser}