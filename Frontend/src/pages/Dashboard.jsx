import { useLocation } from "react-router-dom";
import Sidebar from "../Components/Core/Dashboard/Sidebar";
import Myprofile from "../Components/Core/Dashboard/Myprofile";
import Setting from "../Components/Core/Dashboard/Setting/Setting";
import { useSelector } from "react-redux";
function Dashboard() {
  const { loading: authloading } = useSelector((state) => state.auth);
  const location = useLocation();
  const currpath = location.pathname;
  return (
    <div className=" h-[calc(100vh-10rem)]">
      {authloading ? (
        <div className="loader"></div>
      ) : (
        <div className=" flex cursor-default  h-[calc(100vh-4rem)] w-[100%]  overflow-auto  ">
          <div className="w-[13%]">
          <Sidebar />
          </div>
          <div className="flex w-11/12 h-fit">
          {currpath === "/dashboard/my-profile" ? <Myprofile /> : null}
          {currpath === "/dashboard/setting" ? <Setting /> : null}
          {currpath === "/dashboard/enrolled-courses" ? <Myprofile /> : null}
          {currpath === "/dashboard/cart" ? <Setting/> : null}
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
