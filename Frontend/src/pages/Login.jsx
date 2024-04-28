import { useState } from "react";
import Footer from "../Components/Common/Footer";
import { login } from "../Services/operations/Authorization";
import { toast } from "react-toastify";
import {setToken,setUserinfo} from "../Redux/Slices/authSlice";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    let [formdata,setformdata]=useState({
        email:"",
        password:"",
    });
    function inputhandler(e){
        setformdata((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
    
    async function loginbtn(e){
        e.preventDefault();
        let data=await login(formdata);
        if(data.success){
            console.log(data);  
            dispatch(setToken(data.token));
            dispatch(setUserinfo(data.userinfo))
            localStorage.setItem("token",data.token);
            localStorage.setItem("userinfo",data.userinfo);
            toast.success(data.message);
            navigate("/");
        } 
        if(!data.success){
            toast.error(data.message);
        }
    }
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center mi">
            <div className=" min-h-[calc(100vh-10rem)]">
                <div className="w-[100%] bg-gray-200 flex-col my-2 mt-14  p-10  ">
                    <p className="text-5xl cursor-default">Login On WanderLust</p>
                    <form className="my-3">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="text" id="email" className="w-full border-black px-1" name="email"  onChange={inputhandler} />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input type="password" id="password" className="w-full px-1" name="password" onChange={inputhandler} />
                        <button
                        onClick={loginbtn}
                         className="p-2 bg-green-700 text-white rounded-md my-3">Login</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login;