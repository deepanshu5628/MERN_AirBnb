import { FaFire } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaUmbrellaBeach, FaHotel } from "react-icons/fa";
import { GiFarmTractor, GiWineBottle } from "react-icons/gi";
import { LiaTramSolid } from "react-icons/lia";
import { GiElvenCastle, GiVillage } from "react-icons/gi";
import { FaBed } from "react-icons/fa";
import { PiWarehouseBold } from "react-icons/pi";
import {fetchcatlistings} from "../../../Services/operations/Listings";
import { setLoading } from "../../../Redux/Slices/authSlice";
import {useDispatch, useSelector} from "react-redux";
function Categorycom({fxncat,fxnall}) {
    const dispatch=useDispatch();
    let {loading}=useSelector((state)=>state.auth);
    let category = [
        {
            icon: <FaFire />,
            heading: "Trending",
            name: "all",
        },
        {
            icon: <GiFarmTractor />,
            heading: "Farms",
            name: "Farms",
        },
        {
            icon: <FaBuilding />,
            heading: "Iconic Bulidings",
            name: "Iconic_Bulidings",
        },
        {
            icon: <FaUmbrellaBeach/>,
            heading: "Beach",
            name: "Beach",
        },
        {
            icon: <LiaTramSolid />,
            heading: "Trams",
            name: "Trams",
        },
        {
            icon: <GiElvenCastle  />,
            heading: "Castle",
            name: "Castle",
        },
        {
            icon: <GiWineBottle  />,
            heading: "Wine",
            name: "Wine",
        },
        {
            icon: <FaBed />,
            heading: "Monestrys",
            name: "Monestrys",
        },
        {
            icon: <FaHotel/>,
            heading: "Hotel",
            name: "Hotel",
        },
        {
            icon: <GiVillage/>,
            heading: "Villa",
            name: "Villa",
        },
        {
            icon: <PiWarehouseBold/>,
            heading: "Farm House",
            name: "Farm_House",
        },
    ]

    async function fetchcatlistdetails(name){
        dispatch(setLoading(true));
        let data=await fetchcatlistings(name);
        // console.log(data.data.data);
        fxncat(data.data.data);
        dispatch(setLoading(false));
    }

    function categorybtn(name){
        if(name==="all"){
            fxnall();
        }else{
            fetchcatlistdetails(name);
        }
    }

    return (
        <div className="h-auto bg-slate-100 flex flex-wrap py-3 px-1 gap-8 justify-center cursor-default ">
            {
                category.map((cat,index)=>{
                    return <div key={index} onClick={()=>categorybtn(cat.name)} className="items-center flex flex-col cursor-pointer">
                        {cat.icon}
                        {cat.heading}
                    </div>
                })
            }
        </div>
    )
}

export default Categorycom;