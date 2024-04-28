import { axiosapiconnector } from "../apiconnector";
import {user} from "../apis";

export const sendotp=async(data)=>{
    try {
        let res=await axiosapiconnector("POST",user.AUTH_API_SENDOTP,data);
        return res.data
    } catch (error) {
        let data={
            success:false,
            message:"eror in fetch listing data form backend",
            data:error,
        }
        return data
    }
}

export const login=async(data)=>{
    // console.log(data);
    try {
        let res=await axiosapiconnector("POST",user.AUTH_API_LOGIN,data);
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in fetch listing data form backend",
            data:error,
        }
        return data;
    }
}

export const signup=async(data)=>{
    try {
        let res=await axiosapiconnector("POST",user.AUTH_API_SIGNUP,data);
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in fetch listing data form backend",
            data:error,
        }
        return data
    }
}