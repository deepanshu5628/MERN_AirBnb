import Footer from "../Components/Common/Footer"
function Login() {
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center mi">
            <div className=" min-h-[calc(100vh-10rem)]">
                <div className="w-[100%] bg-gray-200 flex-col my-2 mt-14  p-10  ">
                    <p className="text-5xl cursor-default">Login On WanderLust</p>
                    <form className="my-3">
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input type="text" id="email" className="w-full border-black" />
                        <br />
                        <label htmlFor="otp">Password:</label>
                        <br />
                        <input type="password" id="otp" className="w-full" />
                        <button className="p-2 bg-green-700 text-white rounded-md my-3">Login</button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login;