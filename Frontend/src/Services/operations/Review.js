import {reviewapi} from "../apis";
import { axiosapiconnector } from "../apiconnector";
export const createReview=async(rating,review,listingId,token)=>{
    try {
        let res=await axiosapiconnector("POST",reviewapi.REVIEW_API_CREATE,{rating,review,listingId},{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        })
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in creating a revewi  form backend",
            data:error,
        }
        return data;   
    }
}
export const getallReview=async(listingId)=>{
    try {
        let res=await axiosapiconnector("POST",reviewapi.REVIEW_API_LISTINGREV,{listingId})
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in geting all review of listing data form backend",
            data:error,
        }
        return data;   
    }
}

export const delrev=async(revid,listinid,token)=>{
    try {
        let res=await axiosapiconnector("DELETE",reviewapi.REVIEW_API_DELETE,{reviewId:revid,listingId:listinid},{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        })
        return res.data;
    } catch (error) {
        let data={
            success:false,
            message:"eror in Deleting review of listing data form backend",
            data:error,
        }
        return data;      
    }
}