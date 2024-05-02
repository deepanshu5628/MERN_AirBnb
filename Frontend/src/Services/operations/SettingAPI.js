import {toast} from "react-toastify";
import {profileapi,user} from "./../apis";
import {axiosapiconnector,apiconnector} from "../apiconnector";
import {setToken,setLoading,setUserinfo} from "../../Redux/Slices/authSlice"

// ------------------------------------Update Dp---------------------------------------------------
export const updateDisplayPicture=(file,token,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true))        
        let res;
        try {
            res=await axiosapiconnector("POST",profileapi.PROFILE_API_UPDATEDP,{image:file},{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"multipart/form-data",
            })
        } catch (error) {
            toast.error("error error while sending requrest to backend");
            return console.log(error); 
        }
        if(res.data.success){
            toast.success(res.data.message);
            dispatch(setUserinfo(res.data.data))
            localStorage.setItem("userinfo",JSON.stringify(res.data.data));
            navigate("/dashboard/my-profile")
        }
        if(!res.data.success){
            toast.error(res.data.message);
        }

        dispatch(setLoading(false));
    }
}

// ----------------------------------Update Profile -------------------------------------------

export const updateprofile=(data,token,navigate)=>{
    return async(dispatch)=>{
        let res;
        dispatch(setLoading(true));
        try {
            res=await axiosapiconnector("POST",profileapi.PROFILE_API_UPDATEPROFILE,data,{
                "Authorization":`Bearer ${token}`,
                "Content-Type":"application/json"
            });
            console.log(res);
        } catch (error) {
            toast.error("error occuerd while sending requrest to backedn");
            return console.log(error);
        }
        if(res.data.success){
            toast.success(res.data.message);
            dispatch(setUserinfo(res.data.data))
            localStorage.setItem("userinfo",JSON.stringify(res.data.data));
            navigate("/dashboard/my-profile");
        }
        if(!res.data.success){
            toast.error(res.data.message);
        }
        dispatch(setLoading(false));
    }
}



// change pass 
export const changepassword=(data,token,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoading(true));
        let res;
        try {
            res=await apiconnector("POST",user.AUTH_API_CHANGEPASSWORD,data,{
                "Content-Type":"application/json",
                "authorization":`Bearer ${token}`
            });
            // console.log(res);

        } catch (error) {
            toast.error("error error while sending requrest to backend");
            return  console.log(error);
        }
        if(res.success){
            toast.success(res.message);
            navigate("/dashboard/setting");
        }
        if(!res.success){
            toast.error(res.message);
        }
        dispatch(setLoading(false));
    }
}