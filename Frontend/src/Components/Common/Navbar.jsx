import { FaSearch } from "react-icons/fa";
import { IoCompassOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken ,ressetSlice} from "../../Redux/Slices/authSlice";
function Navbar() {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {token,userinfo} = useSelector((state) => state.auth);
    function logoutbtn(){
        dispatch(ressetSlice());
        navigate("/");   
    }
    return (
        <div className="h-16  bg-slate-200 w-full text-black 
        flex justify-between items-center px-5 cursor-default border-b-black border-b-2">
            <div className="flex gap-3 items-center">
                <IoCompassOutline onClick={() => navigate("/")} className="text-5xl text-pink-500" />
                <button onClick={() => navigate("/")} className="text-xl">Explore</button>
            </div>
            <div className="flex gap-3">
                <input type="text"
                    className="rounded-2xl w-60 px-4 bg-slate-200"
                    placeholder="Search Destination..."
                />
                <button className="p-3 bg-pink-500 rounded-2xl
                 flex items-center gap-3 text-white">Search <FaSearch /></button>
            </div>
            <div className="flex justify-between gap-3">
                <button onClick={() => navigate("/new")} > AirBnb your home</button>
                {
                    token === null ? (<>
                        <button onClick={() => navigate("/signup")} className="font-semibold">SignUp</button>
                        <button onClick={() => navigate("/login")} className="font-semibold">Login</button>
                    </>) :(<>
                    <button><img src={userinfo.image} className="rounded-full h-3/4"  alt="" /></button>
                <button onClick={logoutbtn} className="font-semibold">Logout</button>
                    </>)
                }

            </div>
        </div>
    )
}

export default Navbar;