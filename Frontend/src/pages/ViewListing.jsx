import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { viewlisting } from "../Services/operations/Listings";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { setLoading } from "../Redux/Slices/authSlice";
import Footer from "../Components/Common/Footer";
import { deletelisting } from "../Services/operations/Listings";
import Reviewmodal from '../Components/Core/ViewListing/Reviewmodal';
import ViewReviews from '../Components/Core/ViewListing/ViewReviews';
const ViewListing = () => {
    const navigate = useNavigate();
    const { loading, userinfo, token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { state } = useLocation();
    let [currlistinginfo, setcurrlistinginfo] = useState(null);

    // fxn
    let fetchlistinginfo = async (id) => {
        dispatch(setLoading(true));
        let data = await viewlisting(id);
        if (data.success) {
            setcurrlistinginfo(data.data);
        }
        if (!data.success) {
            toast.error(data.message);
        }
        dispatch(setLoading(false));
        // console.log(data);
    }

    // del fxn
    async function delbtn(id) {
        let res = await deletelisting(id, token);
        if (res.success) {
            toast.success(res.message);
            navigate("/");
        }
        if (!res.success) {
            toast.error(res.message);
        }
    }
    useEffect(() => {
        fetchlistinginfo(state);
    }, [])
    return (
        <div className='w-full   pt-32 md:pt-24 '>
            {
                loading ? <div className='flex justify-center  items-center h-[calc(100vh-9.9rem)]'>  <div className='loader'></div></div> : (
                    <div className='min-h-[calc(100vh-9.9rem)] flex justify-center'>
                        {
                            currlistinginfo !== null && <div className='flex flex-col w-full items-center'>
                                < div className='w-full md:w-[60%] flex  bg-gray-200 flex-col gap-4  my-2  p-8  '>
                                    <p className='font-semibold text-3xl'>{currlistinginfo.title}</p>
                                    <div className=''>
                                        <img src={currlistinginfo.image} alt="img" className='w-full md:max-h-60 md:w-2/3' />
                                    </div>
                                    <p>Owned BY:{currlistinginfo.owner.firstName} {currlistinginfo.owner.lastName}</p>
                                    <p>{currlistinginfo.description}</p>
                                    <p>{currlistinginfo.price}</p>
                                    <p>{currlistinginfo.location} ,{currlistinginfo.country}</p>

                                    {
                                        userinfo !== null && userinfo.email === currlistinginfo.owner.email && (
                                            <div className='flex gap-3 mt-5'>
                                                {/* <button className='p-2 bg-green-600 rounded-md text-black'>Edit</button> */}
                                                <button onClick={() => delbtn(currlistinginfo._id)} className='p-2 bg-black rounded-md text-white'>Delete</button>
                                            </div>
                                        )
                                    }
                                </div>
                                <Reviewmodal  listingId={currlistinginfo._id}/>
                                <ViewReviews listingId={currlistinginfo._id}/>
                            </div>
                        }
                    </div>
                )
            }
            <Footer />
        </div >
    )
}

export default ViewListing
