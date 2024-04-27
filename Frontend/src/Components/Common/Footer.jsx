import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";
function Footer() {
    const navigate=useNavigate();
    return (
        // <div className="absolute top-[84.3%] w-full flex flex-col items-center text-xl bg-slate-200 py-2 cursor-default ">
        <div className=" w-full flex flex-col items-center text-xl bg-slate-200 py-2 cursor-default ">
            <div className="flex w-8/12 justify-center  gap-3 text-blue-950 ">
                 <FaGithub className="cursor-pointer text-xl"/>
                <FaInstagram className="cursor-pointer" />
                <IoLogoLinkedin className="cursor-pointer" />
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