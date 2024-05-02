import {axiosapiconnector} from "../apiconnector";
import {listing} from "../apis";


// ---------------------------------FETCH ALL LISTINGS---------------------------------------
export const fetchalllistings=async()=>{
    try {
        let data= await axiosapiconnector("GET",listing.LISTING_API_GETALL);
        return data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in fetch listing data form backend",
            data:error,
        }
        return data;
    }
}


// ------------------------FETCH  LISTINGS OF A SPECIFIC CATEGORY -----------------------------

export const fetchcatlistings=async(name)=>{
    try {
        let data= await axiosapiconnector("POST",listing.LISTING_API_LISTCAT,{category:name});
        return data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in fetching cat  listing data form backend",
            data:error,
        }
        return data;
    }
}


// --------------------------------CREATE A LISTING ----------------- -----------------------------

export const createlisting=async(data,token)=>{
    try {
        let res=await axiosapiconnector("POST",listing.LISTING_API_CREATE,data,{
            "Content-Type":"multipart/form-data",
            "Authorization":`Bearer ${token}`
        })
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in cereating a   listing data form backend",
            data:error,
        }
        return data;
    }
}

// --------------------------------VIEW A LISTING ----------------- -----------------------------
export const viewlisting=async(id)=>{
    try {
        let res=await axiosapiconnector("POST",listing.LISTING_API_VIEW,{id})
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in Viewing a   listing data form backend",
            data:error,
        }
        return data;
    }
}

// -------------------------------DELETE A LISTING ----------------- -----------------------------
export const deletelisting=async(id,token)=>{
    try {
        let res=await axiosapiconnector("DELETE",listing.LISTING_API_DELETE,{listingId:id},{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        })
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in Viewing a   listing data form backend",
            data:error,
        }
        return data;
    }
}


// -------------------------------SEARCH  LISTINGS ----------------- -----------------------------
export const searchlisting=async(data)=>{
    try {
        let res=await axiosapiconnector("POST",listing.LISTING_API_SEARCH,{query:data})
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in searching listing data form backend",
            data:error,
        }
        return data;
    }
}