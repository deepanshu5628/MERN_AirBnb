import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Listings({ data }) {
    const navigate = useNavigate();
    let { loading } = useSelector((state) => state.auth);

    function viewairbnb(id) {
        navigate("/view", { state: id })
    }
    return (
        <div className="min-h-[calc(100vh-15.5rem)] p-8 px-20 flex justify-center">
            {
                loading ?<div className="flex  items-center "> <div className="loader  "></div></div> : <div className="flex gap-6 flex-wrap ">
                    {data.length < 1 ? <div className="flex justify-center items-center text-6xl text-red-600 w-full "><p> No Place to show</p></div> :
                        data.map((list, index) => {
                            return <div key={index} onClick={() => viewairbnb(list._id)} className="flex flex-col rounded-lg cursor-default">
                                <img src={list.image} alt="img" className=" w-64 h-60 rounded-md cursor-pointer" />
                                <p className="font-semibold">{list.title}</p>
                                <p className="flex items-center"> <FaRupeeSign /> {list.price}/night</p>
                            </div>
                        })
                    }
                </div>
            }
        </div>
    )
}
export default Listings;