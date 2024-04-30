import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Common/Footer";
import {createlisting} from "../Services/operations/Listings";
import {setLoading} from "../Redux/Slices/authSlice";
import { useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
function Createlisting() {
    const navigate=useNavigate();
    let { loading,token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [img, setimage] = useState(null);

    async function handleformdata(data) {
        let formdata = new FormData();
        formdata.append("title", data.title);
        formdata.append("description", data.description);
        formdata.append("price", data.price);
        formdata.append("location", data.location);
        formdata.append("country", data.country);
        formdata.append("category", data.category);
        formdata.append("image", img);
        
        dispatch(setLoading(true));
        let response=await createlisting(formdata,token);
        if(response.success){
            toast.success(response.message);
            dispatch(setLoading(false));
            navigate("/");
        }
        if(!response.success){
            toast.error(response.message);
            dispatch(setLoading(false));
        }
        dispatch(setLoading(false));
    }

    function imagehandler(e) {
        let inputimg = e.target.files[0];
        setimage(inputimg);
    }
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center max-h-lvh">
            <div className="w-[50%] bg-gray-200 flex-col my-3  p-10 ">
                {
                    loading ? <div className="flex justify-center items-center   h-[calc(100vh-16.5rem)]" > <div className="loader"></div></div> : <>
                        <p className="text-3xl cursor-default">Create New Listing</p>
                        <form onSubmit={handleSubmit((data) => handleformdata(data))} >
                            {/* title */}
                            <label htmlFor="title">Title</label>
                            <br />
                            <input type="text"
                                id="title"
                                className="w-full"
                                placeholder="Enter Title"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <div className="text-red-800">Title is required</div>}
                            {/* descriptino */}
                            <label htmlFor="description">Description</label>
                            <br />
                            <input type="text"
                                id="description"
                                className="w-full"
                                placeholder="Enter Description"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <div className="text-red-800">Description is required</div>}
                            {/* image */}
                            <label htmlFor="image">Image</label>
                            <br />
                            <input type="file"
                                id="image"
                                className="w-full"
                                placeholder="Enter Description"
                                accept="image/*"
                                onChange={imagehandler}
                            />
                            <span className="text-red-500 text-sm">Image Size should be less then 1mb</span>

                            {/* price and country */}
                            <div className="w-full flex justify-between">
                                <div className="w-[45%]">
                                    <label htmlFor="price">Price</label>
                                    <br />
                                    <input
                                        type="number"
                                        id="price"
                                        className="w-full"
                                        {...register("price", { required: true })}
                                    />
                                    {errors.price && <div className="text-red-800">Price is Required</div>}
                                </div>
                                <div className="w-[45%]">
                                    <label htmlFor="country">Country</label>
                                    <br />
                                    <input
                                        type="text"
                                        id="country"
                                        className="w-full"
                                        {...register("country", { required: true })}
                                    />
                                    {errors.country && <div className="text-red-800">Country is Required</div>}
                                </div>
                            </div>
                            {/* Category */}
                            <label htmlFor="category">Category</label>
                            <br />
                            <select name="Category"
                                id="category"
                                required
                                {...register("category", { required: true })}
                                className="w-full"
                            >
                                <option value="" disabled selected>Choose A Category </option>
                                <option value="Farms">Farms</option>
                                <option value="Iconic Bulidings">Iconic_Bulidings</option>
                                <option value="Beach">Beach</option>
                                <option value="Trams">Trams</option>
                                <option value="Castle">Castle</option>
                                <option value="Wine">Wine</option>
                                <option value="Monestrys">Monestrys</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Villa">Villa</option>
                                <option value="Farm House">Farm_House</option>
                            </select>
                            {errors.category && <span>Category is Requried</span>}
                            {/* loactiona */}
                            <label htmlFor="location">Location</label>
                            <br />
                            <input type="text"
                                id="location"
                                className="w-full"
                                placeholder="Enter Location"
                                {...register("location", { required: true })}
                            />
                            {errors.location && <div className="text-red-800">Location is Required</div>}
                            <button className="p-2 bg-red-500 text-white rounded-lg my-4">Add</button>
                        </form>
                    </>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Createlisting;