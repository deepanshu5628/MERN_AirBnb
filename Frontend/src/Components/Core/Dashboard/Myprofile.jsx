import { useSelector } from "react-redux";
import CTAButton from "../../Common/CTAButton";
import { MdModeEdit } from "react-icons/md";

function Myprofile() {
  const { userinfo } = useSelector((state) => state.auth);

  return (
    <div className="bg-yellow-100 flex flex-col text-black justify-center items-center pb-8  gap-6 w-[100%]">
      <h1 className="text-4xl mt-5 font-semibold text-richblack-25">My Profile</h1>

      {/* first section */}
      <section className="bg-gray-200 h-auto py-6 rounded-md px-8 md:w-[70%] flex justify-between items-center">
        <div className="flex gap-3">
          {/* image div  */}
          <div>
            <img className="rounded-full w-20 h-20 " src={userinfo.image} alt="" />
          </div>
          {/* name email div */}
          <div>
            <p className="text-black font-bold text-lg">
              {userinfo.firstName} {userinfo.lastName}
            </p>
            <p className="text-richblack-100">{userinfo.email}</p>
          </div>
        </div>
        <div>
          <CTAButton
            active={true}
            linkto="/dashboard/setting"
            children={
              <div className="flex items-center gap-2">
                <p>Edit</p>
                <MdModeEdit />
              </div>
            }
          />
        </div>
      </section>

      {/* second section about div */}
      <section className="bg-gray-200 h-auto py-6 rounded-md px-8 w-full md:w-[70%] flex-col  justify-between items-center">
        {/* first div  */}
        <div className="flex mb-4 justify-between w-full">
          <div>
            <p className="text-2xl font-semibold">About:</p>
          </div>
          <CTAButton
            active={true}
            linkto="/dashboard/setting"
            children={
              <div className="flex items-center gap-2">
                <p>Edit</p>
                <MdModeEdit />
              </div>
            }
          />
        </div>
        {/* second div */}
        <div className="text-richblack-100">
          {userinfo.additionalInformation ? (
            <p>{userinfo.additionalInformation.about}</p>
          ) : (
            "Write something about yourself...."
          )}
        </div>
      </section>

      {/* third section */}
      <section className="bg-gray-200 h-auto py-6 px-8 rounded-md w-full md:w-[70%] flex-col justify-between items-center ">
        <div className="flex  justify-between w-full">
          <div>
            <p className="text-2xl font-bold">Personal Details</p>
          </div>
          <CTAButton
            linkto="/dashboard/setting"
            active={true}
            children={
              <div className="flex items-center gap-2">
                <p>Edit</p>
                <MdModeEdit />
              </div>
            }
          />
        </div>
        <div className="w-full flex-col ">
          {/* first and last name  */}
          <div className="flex flex-col md:flex-row md:justify-start p-4">
            <div className="w-full">
              <p className="text-richblack-300  mb-1">First Name</p>
              <p>{userinfo.firstName}</p>
            </div>
            <div className="w-full">
              <p className="text-richblack-300 mb-1">Last Name</p>
              <p>{userinfo.lastName}</p>
            </div>
          </div>

          {/* email and phone no  */}
          <div className="flex flex-col md:flex-row md:justify-start p-4">
            <div className="w-full">
              <p className="text-richblack-300 mb-1">Email</p>
              <p>{userinfo.email}</p>
            </div>
            <div className="w-full">
              <p className="text-richblack-300 mb-1"> Phone Number</p>
              <p>{userinfo.additionalInformation ? userinfo.additionalInformation.contactNo : "Add Contact No"}</p>
            </div>
          </div>
          {/* gender and DOB */}
          <div className="flex flex-col md:flex-row md:justify-start p-4 ">
            <div className="w-full">
              <p className="text-richblack-300 mb-1">Gender</p>
              <p>{userinfo.additionalInformation ? userinfo.additionalInformation.gender : "Add Gender"}</p>
            </div>
            <div className="w-full">
              <p className="text-richblack-300 mb-1">DOB</p>
              <p>{userinfo.additionalInformation ? userinfo.additionalInformation.dob : "Add Dob"}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Myprofile;
