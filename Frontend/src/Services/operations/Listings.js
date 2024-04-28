import {axiosapiconnector} from "../apiconnector";
import {listing} from "../apis";
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