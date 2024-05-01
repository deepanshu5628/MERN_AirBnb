import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Listings({data}) {
    const navigate=useNavigate();
    let {loading}=useSelector((state)=>state.auth);

    function viewairbnb(id){
        navigate("/view",{state:id})
    }
    return (
        <div className="min-h-[calc(100vh-14rem)] p-8 px-20 flex gap-6 flex-wrap">
            {
               loading ? <div className="loader ml-[45%] mr-[45%] "></div>:  data.map((list,index)=>{
                return <div key={index} onClick={()=>viewairbnb(list._id)} className="flex flex-col rounded-lg cursor-default">
                    <img src={list.image} alt="img"  className=" w-64 h-60 rounded-md cursor-pointer"/>
                    <p  className="font-semibold">{list.title}</p>
                    <p className="flex items-center"> <FaRupeeSign/> {list.price}/night</p>
                </div>
            })
            }
        </div>
    )
}
export default Listings;