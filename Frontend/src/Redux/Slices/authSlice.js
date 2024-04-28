import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:localStorage.getItem("token")? JSON.parse( localStorage.getItem("token")) :null,
        loading:false,
        userinfo:localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")) :null,
    },
    reducers:{
        setToken:(state,actions)=>{
            state.token=actions.payload;
        },
        setLoading:(state,actions)=>{
            state.loading=actions.payload;
        },
        setUserinfo:(state,actions)=>{
            state.userinfo=actions.payload;
        },
        ressetSlice:(state)=>{
            localStorage.clear();
            state.token=null;
            state.userinfo=null;
            state.loading=false;
        }
    }
})

export const {setLoading,setToken,setUserinfo,ressetSlice}=authSlice.actions;
export default authSlice.reducer;