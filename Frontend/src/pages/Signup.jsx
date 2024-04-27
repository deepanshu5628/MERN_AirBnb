import Footer from "../Components/Common/Footer";
function Signup() {
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center max-h-lvh">
            <div className="min-h-[calc(100vh-10rem)]">
            <div className="w-full  bg-gray-200 flex-col my-2  p-10 border-black ">
                <p className="text-5xl cursor-default">Sign Up on WanderLust</p>
                <form  className="my-3">
                    <label htmlFor="email">Email:</label>
                    <br />
                    <input type="text" id="email" className="w-full border-black" />
                    <br />
                    <label htmlFor="otp">OTP</label>
                    <br />
                    <input type="password" id="otp" className="w-full" />
                    <label htmlFor="otp">Password:</label>
                    <br />
                    <input type="text" id="otp" className="w-full" />
                    <br />
                    <label htmlFor="otp">Confirm Password:</label>
                    <br />
                    <input type="password" id="otp" className="w-full" />
                    <button className="p-2 bg-green-700 rounded-md my-3 text-white">SignUp</button>
                </form>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Signup;