import { createSlice } from "@reduxjs/toolkit";

const getStoredData = () => {
    const data = localStorage.getItem("showndata");
    try {
        return data ? JSON.parse(data) : [];  // Handle null and parse error
    } catch (error) {
        // console.error("Error parsing JSON from localStorage:", error);
        return [];
    }
};


const listingSlice=createSlice({
    name:"lists",
    initialState:{
        showndata:getStoredData(),
    },
    reducers:{
        setshowndata:(state,actions)=>{
            state.showndata=actions.payload;
        }
    }
})

export const {setshowndata}=listingSlice.actions
export default listingSlice.reducer;