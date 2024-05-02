import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { updateprofile } from "../../../../Services/operations/SettingAPI";
function Profileinfo() {
  const { userinfo,token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formsubmithandler(data) {
    dispatch(updateprofile(data, token, navigate));
  }
  return (
    <>
      <section className="bg-gray-200 h-auto py-6 px-8 rounded-md w-[70%] ">
        <h1 className="text-2xl font-semibold">Profile Information</h1>
        <div>
          <form onSubmit={handleSubmit(formsubmithandler)}>
            {/* first and last name  */}
            <div className="flex justify-between min-w-full my-2 ">
              <label htmlFor="firstname" className="w-full">
                First Name
                <br />
                <input
                  type="text"
                  id="firstname"
                  name="firstName"
                  defaultValue={userinfo.firstName}
                  className="bg-richblack-700 mt-2 py-3 rounded-lg px-3 w-[90%] text-black"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-yellow-50">Required</span>
                )}
              </label>
              <label htmlFor="lastname" className="w-full">
                Last Name
                <br />
                <input
                  type="text"
                  id="lastname"
                  defaultValue={userinfo.lastName}
                  name="lastName"
                  className="bg-richblack-700 mt-2 w-[90%] rounded-lg py-3 px-3  text-black"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-yellow-50">Required</span>
                )}
              </label>
            </div>
            {/* dob and gender */}
            <div className="flex justify-between min-w-full my-2">
              <label htmlFor="firstname" className="w-full">
                DOB
                <br />
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  defaultValue={
                    userinfo.additionalInformation === null
                      ? null
                      : userinfo.additionalInformation.dob
                  }
                  className="bg-richblack-700 mt-2 py-3 rounded-lg px-3 w-[90%] text-black"
                  {...register("dob", { required: true })}
                />
                {errors.dob && <span className="text-yellow-50">Required</span>}
              </label>
              <label htmlFor="gender" className="w-full">
                Gender
                <br />
                <select
                  className="bg-richblack-700 mt-2 py-3 rounded-lg px-3 w-[90%] text-black"
                  name="gender"
                  defaultValue={
                    userinfo.additionalInformation === null
                      ? null
                      : userinfo.additionalInformation.gender
                  }
                  {...register("gender", { required: true })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </label>
            </div>
            {/* contactno and about  */}
            <div className="flex justify-between w-full my-2">
              <label htmlFor="contactNo" className="w-full">
                Contact Number
                <br />
                <input
                  type="number"
                  id="contactNo"
                  maxLength={10}
                  placeholder="Enter Contact Number"
                  name="contactNo"
                  defaultValue={
                    userinfo.additionalInformation === null
                      ? null
                      : userinfo.additionalInformation.contactNo
                  }
                  className="bg-richblack-700 py-3 mt-2 rounded-lg px-3 w-[90%] text-black"
                  {...register("contactNo", {
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors.contactNo && (
                  <span className="text-yellow-50">Required</span>
                )}
              </label>
              <label htmlFor="about" className="w-full ">
                About
                <br />
                <input
                  type="text"
                  id="about"
                  name="about"
                  defaultValue={
                    userinfo.additionalInformation === null
                      ? null
                      : userinfo.additionalInformation.about
                  }
                  placeholder="Enter Bio Details"
                  className="bg-richblack-700 py-3 mt-2 rounded-lg px-3 w-[90%] text-black"
                  {...register("about", { required: true })}
                />
                {errors.about && (
                  <span className="text-yellow-50">Required</span>
                )}
              </label>
            </div>
            <div className="flex justify-end mt-6 mr-9 gap-3">
              {/* <CTAButton children={"Cancel"} linkto="/dashboard/my-profile" active- /> */}
              <button
                type="button"
                onClick={()=>navigate("/dashboard/my-profile")}
                className="text-center text-[13px] px-6 py-3 rounded-md 
             font-bold text-white bg-black hover:scale-95 transition-all 
             duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-center text-[13px] px-6 py-3 rounded-md 
             font-bold text-black bg-green-600 hover:scale-95 transition-all 
             duration-200"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Profileinfo;
