import { FaSearch } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken,setLoading ,ressetSlice} from "../../Redux/Slices/authSlice";
import { useState } from "react";
import {toast} from "react-toastify";
import {searchlisting} from "../../Services/operations/Listings";
import {setshowndata} from "../../Redux/Slices/listingSlice";
import { LuLogOut } from "react-icons/lu";
import { useEffect } from "react";
import { fetchalllistings } from "../../Services/operations/Listings";
function Navbar() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const [searchinputdebounce,setsearchinputdebounce]=useState("");
    const {token,userinfo,loading} = useSelector((state) => state.auth);
    
    // fxn
    function logoutbtn(){
        dispatch(ressetSlice());
        navigate("/");  
        toast.success("Loged Out");
    }


     // fxn of Seacch with debouncing
     async function serchbtnwithdobouncting(){
        if(searchinputdebounce.length ===0){
            return ;
        }
        dispatch(setLoading(true));
        let data=await searchlisting(searchinputdebounce);
        console.log("api is made to the database with debounctng");
        if(data.success){
            dispatch(setshowndata(data.data));
        }
        if(!data.success){
            toast.error("errro in search command");
        }
        dispatch(setLoading(false));
    }

    //user effect to check for debouncing 
    useEffect(() => {
                if(searchinputdebounce.length==0){
                    console.log("show all the data");
                     const fetchalllisting=async()=>{
                            dispatch(setLoading(true));
                            let data =await  fetchalllistings();
                            dispatch(setshowndata(data.data.data));
                            localStorage.setItem("showndata",JSON.stringify(data.data.data));
                            dispatch(setLoading(false));
                        }
                        fetchalllisting();
                    return ;
                }
                console.log("contorl outside the fxn ");
                const delayDebounce = setTimeout(() => {
                    if (searchinputdebounce.length > 0) {
                        serchbtnwithdobouncting();
                    }
                }, 500); // debounce delay (500ms)
                return () => clearTimeout(delayDebounce); // cleanup previous timeout
            }, [searchinputdebounce]); // runs when searchinput changes
    return (
        <div className="min-h-16 max-h-fit fixed min-w-fit max-w-[100%] bg-slate-200 w-[100%] text-black py-2  
        flex justify-evenly md:justify-between items-center px-2 md:px-5 cursor-default border-b-black border-b-2">
            <div className="flex gap-3 items-center">
                <IoCompassOutline onClick={() => navigate("/")} className="text-3xl md:text-5xl text-pink-500" />
                <button onClick={() => navigate("/")} className="text-xl hidden md:block">Explore</button>
            </div>
            <div className="flex justify-between gap-3">
            <input type="text"
                    className={token? "rounded-2xl w-24 border-2 border-black md:w-60 px-4 bg-slate-200":"rounded-2xl w-32 md:w-60 px-4 bg-slate-200"}
                    placeholder={token? "Search...":"Search Destination..."}
                    value={searchinputdebounce}
                    onChange={(e)=>{
                        setsearchinputdebounce(e.target.value);
                    }}
                />
                {/* <button 
                onClick={serchbtn}
                className="p-3  bg-pink-500 rounded-2xl
                 md:flex items-center gap-3 text-white hidden md:visible">Search <FaSearch /></button>
                <button 
                onClick={serchbtn}
                className="md:hidden p-2 bg-pink-500 rounded-2xl
                 flex items-center gap-1 text-white"><FaSearch /></button> */}
            </div>
            <div className="flex justify-between gap-3">
                {
                    token !==null &&   <button className="hidden md:block " onClick={() => navigate("/new")} > AirBnb your home</button>
                }
                {
                    token !==null &&   <button className=" md:hidden" onClick={() => navigate("/new")} >New</button>
                }
              
                {
                    token === null ? (<>
                        <button onClick={() => navigate("/signup")} className="font-semibold text-xs md:text-base">SignUp</button>
                        <button onClick={() => navigate("/login")} className="font-semibold text-xs md:text-base">Login</button>
                    </>) :(<>
                    <button onClick={()=>navigate("/dashboard/my-profile")}><img src={userinfo.image} className="rounded-full w-12 h-12 max-h-20 max-w-20"  alt="" /></button>
                <button onClick={logoutbtn} className="hidden md:block font-semibold">Logout</button>
                <button onClick={logoutbtn} className="md:hidden font-semibold"><LuLogOut/></button>
                    </>)
                }

            </div>
        </div>
    )
}

export default Navbar;



// import { FaSearch } from "react-icons/fa";
// import { IoCompassOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setToken,setLoading ,ressetSlice} from "../../Redux/Slices/authSlice";
// import { useState } from "react";
// import {toast} from "react-toastify";
// import {searchlisting} from "../../Services/operations/Listings";
// import {setshowndata} from "../../Redux/Slices/listingSlice";
// import { LuLogOut } from "react-icons/lu";
// import { useEffect } from "react";
// function Navbar() {
//     const navigate = useNavigate();
//     const dispatch=useDispatch();
//     const [searchinput,setsearchinput]=useState("");
//     const [searchinputdebounce,setsearchinputdebounce]=useState("");
//     const {token,userinfo,loading} = useSelector((state) => state.auth);
    
//     // fxn
//     function logoutbtn(){
//         dispatch(ressetSlice());
//         navigate("/");  
//         toast.success("Loged Out");
//     }

//     // fxn of Seacch
//     async function serchbtn(){
//         if(searchinput.length ===0){
//             return ;
//         }
//         dispatch(setLoading(true));
//         let data=await searchlisting(searchinput);
//         console.log("api is made to the database ");
//         // setsearchinput("");
//         if(data.success){
//             dispatch(setshowndata(data.data));
//         }
//         if(!data.success){
//             toast.error("errro in search command");
//         }
//         dispatch(setLoading(false));
//     }
//     // fxn of Seacch with debouncing
//     async function serchbtnwithdobouncting(){
//         if(searchinputdebounce.length ===0){
//             return ;
//         }
//         dispatch(setLoading(true));
//         let data=await searchlisting(searchinputdebounce);
//         console.log("api is made to the database with debounctng");
//         if(data.success){
//             dispatch(setshowndata(data.data));
//         }
//         if(!data.success){
//             toast.error("errro in search command");
//         }
//         dispatch(setLoading(false));
//     }

//     useEffect(() => {
//         const delayDebounce = setTimeout(() => {
//             if (searchinputdebounce.length > 0) {
//                 serchbtnwithdobouncting();
//             }
//         }, 500); // debounce delay (500ms)
//         return () => clearTimeout(delayDebounce); // cleanup previous timeout
//     }, [searchinputdebounce]); // runs when searchinput changes
//     return (
//         <div className="min-h-16 max-h-fit fixed min-w-fit max-w-[100%] bg-slate-200 w-[100%] text-black py-2  
//         flex justify-evenly md:justify-between items-center px-2 md:px-5 cursor-default border-b-black border-b-2">
//             <div className="flex gap-3 items-center">
//                 <IoCompassOutline onClick={() => navigate("/")} className="text-3xl md:text-5xl text-pink-500" />
//                 <button onClick={() => navigate("/")} className="text-xl hidden md:block">Explore</button>
//             </div>
//             <div className="flex justify-between gap-3">
//                 <input type="text"
//                     className={token? "rounded-2xl w-24 border-2 border-black md:w-60 px-4 bg-slate-200":"rounded-2xl w-32 md:w-60 px-4 bg-slate-200"}
//                     placeholder={token? "Search...":"Search Destination..."}
//                     value={searchinput}
//                     onChange={(e)=>{
//                         setsearchinput(e.target.value)
//                          serchbtn();
//                     }}
//                 />
//                 <input type="text"
//                     className={token? "rounded-2xl w-24 border-2 border-black md:w-60 px-4 bg-slate-200":"rounded-2xl w-32 md:w-60 px-4 bg-slate-200"}
//                     placeholder={token? "Search...":"Search Destination..."}
//                     value={searchinputdebounce}
//                     onChange={(e)=>{
//                         setsearchinputdebounce(e.target.value);
//                     }}
//                 />
//                 {/* <button 
//                 onClick={serchbtn}
//                 className="p-3  bg-pink-500 rounded-2xl
//                  md:flex items-center gap-3 text-white hidden md:visible">Search <FaSearch /></button>
//                . */}
//                 {/* <button 
//                 onClick={serchbtn}
//                 className="md:hidden p-2 bg-pink-500 rounded-2xl
//                  flex items-center gap-1 text-white"><FaSearch /></button> */}
//             </div>
//             <div className="flex justify-between gap-3">
//                 {
//                     token !==null &&   <button className="hidden md:block " onClick={() => navigate("/new")} > AirBnb your home</button>
//                 }
//                 {
//                     token !==null &&   <button className=" md:hidden" onClick={() => navigate("/new")} >New</button>
//                 }
              
//                 {
//                     token === null ? (<>
//                         <button onClick={() => navigate("/signup")} className="font-semibold text-xs md:text-base">SignUp</button>
//                         <button onClick={() => navigate("/login")} className="font-semibold text-xs md:text-base">Login</button>
//                     </>) :(<>
//                     <button onClick={()=>navigate("/dashboard/my-profile")}><img src={userinfo.image} className="rounded-full w-12 h-12 max-h-20 max-w-20"  alt="" /></button>
//                 <button onClick={logoutbtn} className="hidden md:block font-semibold">Logout</button>
//                 <button onClick={logoutbtn} className="md:hidden font-semibold"><LuLogOut/></button>
//                     </>)
//                 }

//             </div>
//         </div>
//     )
// }

// export default Navbar;