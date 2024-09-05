import { useSelector } from "react-redux";

import Photoupload from "./Photoupload";
import Profileinfo from "./Profileinfo";
import Changepassword from "./Changepassword";
function Setting() {
  const { userinfo} = useSelector((state) => state.auth);
  return (
    <div className="bg-slate-100 flex flex-col text-richblack-5 items-center  gap-6 w-[100%]">
      <h1 className="text-4xl  mt-5 font-semibold text-richblack-25">
        Setting
      </h1>

      {/* section 1  phtoo upload*/}
      <Photoupload/>

      {/* section 2  name and addit info*/}
      <Profileinfo/>
      {/* section 3   password changle*/}
      <Changepassword/>

    </div>
  );
}

export default Setting;
