import { createSlice } from "@reduxjs/toolkit";

const listingSlice=createSlice({
    name:"lists",
    initialState:{
        showndata:localStorage.getItem("showndata")? JSON.parse(localStorage.getItem("showndata")):[],
    },
    reducers:{
        setshowndata:(state,actions)=>{
            state.showndata=actions.payload;
        }
    }
})

export const {setshowndata}=listingSlice.actions
export default listingSlice.reducer;