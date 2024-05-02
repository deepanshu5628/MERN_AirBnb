import { useState } from "react";
import Footer from "../Components/Common/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendotp, signup } from "../Services/operations/Authorization";
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate=useNavigate();
    let [visible, setvisible] = useState(false);
    let [visible1, setvisible1] = useState(false);
    let [isotpsended, setisotpsended] = useState(false);
    let [formdata, setformdata] = useState({
        email: "",
        password: "",
        otp: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
    })

    function inputhandler(e) {
        setformdata((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    async function sendotpbtn() {
        let res = await sendotp({ email: formdata.email })
        if (res.success) {
            toast.success(res.message);
        }
        if (!res.success) {
            toast.error(res.message);
        }
    }

    async function formsubmitehandelr(e) {
        e.preventDefault();
        let data = await signup(formdata);
        console.log(data);
        if(data.success){
            toast.success(data.otp);
            navigate("/login");
        }
        if(!data.success){
            toast.error(data.message);
        }
    }

    function watchpass() {
        setvisible(!visible);
    }
    function watchpass1() {
        setvisible1(!visible1);
    }
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center max-h-lvh">
            <div className="min-h-[calc(100vh-10rem)]">
                <div className="w-full  bg-gray-200 flex-col text-sm  p-10 border-black ">
                    <p className="text-5xl cursor-default">Sign Up on WanderLust</p>
                    <form className="my-3">
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <label htmlFor="firstname">FirstName:</label>
                                <br />
                                <input type="text" id="firstname" className="w-full border-black" name="firstName" onChange={inputhandler} />
                            </div>
                            <div className="w-[45%]">
                                <label htmlFor="lastname">LastName:</label>
                                <br />
                                <input type="text" id="lastname" className="w-full border-black" name="lastName" onChange={inputhandler} />
                            </div>
                        </div>
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="text" id="email" className="w-full border-black" name="email" onChange={inputhandler} />
                        <br />
                        <label htmlFor="otp">OTP</label>
                        <br />
                        <div className="flex items-center justify-between">
                            <input type="number" id="otp" className="w-[80%]" name="otp" onChange={inputhandler} />
                            <button
                                type="button"
                                onClick={sendotpbtn}

                                className="p-1 bg-green-700 text-white rounded-lg">Send OTP</button>
                        </div>
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input type={visible ? "text" : "password"} id="password" name="password" onChange={inputhandler} className="w-full" />
                        <span className=" flex justify-end  px-4">
                            {
                                visible ? <FaEye onClick={watchpass} className="cursor-pointer relative bottom-4" /> : <FaEyeSlash onClick={watchpass} className="cursor-pointer relative bottom-4" />
                            }
                        </span>
                        <label htmlFor="conpass">Confirm Password:</label>
                        <br />
                        <input type={visible1 ? "text" : "password"} id="conpass" name="confirmPassword" onChange={inputhandler} className="w-full" />
                        <span className=" flex justify-end  px-4">
                            {
                                visible1 ? <FaEye onClick={watchpass1} className="cursor-pointer relative bottom-4" /> : <FaEyeSlash onClick={watchpass1} className="cursor-pointer relative bottom-4" />
                            }
                        </span>
                        <button onClick={formsubmitehandelr}
                            className="p-2 bg-green-700 rounded-md my-3 text-white">SignUp</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup;