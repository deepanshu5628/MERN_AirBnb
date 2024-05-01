import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";
function Footer() {
    const navigate=useNavigate();
    return (
        // <div className="absolute top-[84.3%] w-full flex flex-col items-center text-xl bg-slate-200 py-2 cursor-default ">
        <div className=" w-full flex flex-col items-center text-xl gap-2  bg-slate-200 pt-4 pb-2 cursor-default ">
            <div className="flex w-8/12 justify-center  gap-3 text-blue-950 ">
                 <FaGithub onClick={()=>window.location.href="https://github.com/deepanshu5628/MERN_AirBnb"} className="cursor-pointer text-2xl text-blue-800"/>
                <FaInstagram onClick={()=>window.location.href="https://www.instagram.com/depansu_ydv/"} className="cursor-pointer text-2xl text-blue-800" />
                <IoLogoLinkedin onClick={()=>window.location.href="https://www.linkedin.com/in/deepanshuyaadav/"} className="cursor-pointer text-2xl text-blue-800" />
            </div>
            <div className="w-8/12  flex justify-center">
                <p className="flex items-center"> <FaRegCopyright />WanderLust Private Limited </p>
            </div>
            <div className="w-8/12 flex justify-center ">
                <p>Privacy Terms</p>
            </div>
        </div>
    )
}

export default Footer;