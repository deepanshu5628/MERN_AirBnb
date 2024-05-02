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
import { setshowndata } from "../../../Redux/Slices/listingSlice";
function Categorycom({fxnall}) {
    const dispatch=useDispatch();
    let {loading}=useSelector((state)=>state.auth);
    let currclicked=0;
    let category = [
        {
            id:1,
            icon: <FaFire />,
            heading: "Trending",
            name: "all",
            state:false,
        },
        {
            icon: <GiFarmTractor />,
            heading: "Farms",
            name: "Farms",
            state:false,
            id:2,
        },
        {
            icon: <FaBuilding />,
            heading: "Iconic Bulidings",
            name: "Iconic_Bulidings",
            state:false,
            id:3,
        },
        {
            icon: <FaUmbrellaBeach/>,
            heading: "Beach",
            name: "Beach",
            state:false,
            id:4,
        },
        {
            icon: <LiaTramSolid />,
            heading: "Trams",
            name: "Trams",
            state:false,
            id:5,
        },
        {
            icon: <GiElvenCastle  />,
            heading: "Castle",
            name: "Castle",
            state:false,
            id:6,
        },
        {
            icon: <GiWineBottle  />,
            heading: "Wine",
            name: "Wine",
            state:false,
            id:7,
        },
        {
            icon: <FaBed />,
            heading: "Monestrys",
            name: "Monestrys",
            state:false,
            id:8,
        },
        {
            icon: <FaHotel/>,
            heading: "Hotel",
            name: "Hotel",
            state:false,
            id:9,
        },
        {
            icon: <GiVillage/>,
            heading: "Villa",
            name: "Villa",
            state:false,
            id:10,
        },
        {
            icon: <PiWarehouseBold/>,
            heading: "Farm House",
            name: "Farm_House",
            state:false,
            id:11,
        },
    ]

    async function fetchcatlistdetails(name){
        dispatch(setLoading(true));
        let data=await fetchcatlistings(name);
        // console.log(data.data.data);
        dispatch(setshowndata(data.data.data));
        dispatch(setLoading(false));
    }

    function categorybtn(name,index){
        currclicked=index;
        console.log(index,currclicked);
        // category[id-1].state=true;
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
                    return <div key={index}  onClick={()=>categorybtn(cat.name,index)} className={currclicked ===index ? "bg-blue-400 items-center flex flex-col cursor-pointer py-1 rounded-md":"items-center flex flex-col cursor-pointer"  }>
                        {cat.icon}
                        {cat.heading}
                    </div>
                })
            }
        </div>
    )
}

export default Categorycom;