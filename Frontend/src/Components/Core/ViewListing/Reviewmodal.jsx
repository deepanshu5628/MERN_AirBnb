import { useState } from 'react';
import RatingAnimation from "react-animation-rating";
import 'react-animation-rating/dist/style.css';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import{toast} from "react-toastify";
import {createReview} from "../../../Services/operations/Review";
import { setLoading } from '../../../Redux/Slices/authSlice';
const Reviewmodal = ({listingId}) => {
    const { token } = useSelector((state) => state.auth);
    const [value, setValue] = useState(1);
    const navigate=useNavigate();
    let [loading,setLoading]=useState(false);
    let [review, setreveiw] = useState("");
    function reviewhandler(e) {
        setreveiw(e.target.value);
    }


    async function formhandler(e) {
        e.preventDefault();
        if(review.length===0){
            toast.error("Comments can't be empty")
            return 
        }
        if(token===null){
            toast.error("login first");
            navigate("/login");
            return ;
        }
        setLoading(true); 
        let respoce=await createReview(value,review,listingId,token);
        if(respoce.success){
            toast.success(respoce.message);
            setLoading(false);
            setreveiw("");
            setValue(1);
            navigate("/");
            
        }
        if(!respoce.success){
            toast.error(respoce.message);
        }
        setLoading(false); 
        
    }

    return (
        < div className='min-h-44 w-full md:w-[60%] flex justify-center items-center my-3 bg-gray-200'>
            {
                loading ? <div> <div className='loader'></div></div> : (
                    <div className='w-full flex bg-gray-200 flex-col gap-4  my-2  p-8  '>
                        <p className='font-semibold text-2xl'>Leave a Review:</p>
                        <form className='flex flex-col gap-3' >
                            <p className='text-xl'>Rating:</p>
                            <RatingAnimation value={value} onChange={setValue} />
                            <p className='text-xl'>Comments:</p>
                            <textarea name="reveiw" id="reveiw" cols="20" rows="4" required onChange={reviewhandler}></textarea>
                            {/* <span> */}
                            <button type='submit' onClick={formhandler} className=' p-2 bg-green-800 text-black rounded-md'>Submit</button>
                            {/* </span> */}
                        </form>
                    </div>
                )
            }

        </div>
    )
}

export default Reviewmodal
