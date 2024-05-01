import {toast} from "react-toastify";
import React, { useEffect, useState } from 'react'
import {getallReview} from "../../../Services/operations/Review";
import RatingAnimation from "react-animation-rating";
import 'react-animation-rating/dist/style.css';
import {useSelector} from "react-redux";
import {delrev} from "../../../Services/operations/Review";
const ViewReviews = ({ listingId }) => {
  let [loading, setLoading] = useState(false);
  let [allreviews,setallreviewws]=useState(null);
  const {token}=useSelector((state)=>state.auth);

  // fxn
  async function fetchallrev(){
    setLoading(true);
    let res=await getallReview(listingId);
    if(res.success){
      setallreviewws(res.data);
    }
    if(!res.success){
      toast.error(res.message);
    }
    setLoading(false);
  }

  // fxn
  async function revdelbtn(id){
    let res=await  delrev(id,listingId,token);
    if(res.success){
      toast.success(res.message);
      fetchallrev();
    }
    if(!res.success){
      toast.error(res.message);
    }
  }

  // fxn
  useEffect(()=>{
    fetchallrev();
  },[])
  return (
    <div className='min-h-44 w-[60%] flex flex-col  my-3 p-4 bg-gray-200'>
      <p className="text-2xl font-semibold">All Reviews: </p>
      {
        loading ? <div className="flex items-center justify-center"> <div className='loader'></div></div> : (
          <>
          {
            allreviews!==null && <div>
              {
                allreviews.length ===0 && <div className="text-3xl font-semibold flex justify-center items-center text-red-800">
                  No Reviews! Be the first one
                  </div>
              }
              {
                allreviews.length >0 && <div className="flex gap-4 flex-wrap p-2"> 
                  {
                    allreviews.map((rev,index)=>{
                      return <div key={index} className="min-w-4/12  flex flex-col gap-2 border-black border-2 p-2  rounded-md cursor-default">
                        <div className="flex items-center gap-2">
                          <img src={rev.createdBy.image} alt="" className="rounded-full h-14 w-14"  />
                        <p>{rev.createdBy.firstName} {rev.createdBy.lastName}</p>
                        </div>
                        <p>{rev.review.slice(0,30)}...</p>
                        <RatingAnimation disabled={true} value={rev.rating}  />
                        <button onClick={()=>revdelbtn(rev._id)} className="p-2 bg-black text-white">Delete</button>
                      </div>
                    })
                  }
                </div>
              }
            </div>
          }
          </>
        )
      }
    </div>
  )
}

export default ViewReviews
