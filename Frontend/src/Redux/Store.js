import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./Slices/authSlice";
import listingSlice from "./Slices/listingSlice";
export const store=configureStore({
    reducer:{
        auth:authSlice,
        lists:listingSlice,
    }
})