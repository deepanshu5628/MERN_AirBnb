import Categorycom from "../Components/Core/Homepage/Categorycom";
import Footer from "../Components/Common/Footer";
import Listings from "../Components/Core/Homepage/Listings";
import { useState ,useEffect} from "react";
import {fetchalllistings} from "../Services/operations/Listings";
import {useDispatch,useSelector} from "react-redux";
import {setLoading} from "../Redux/Slices/authSlice";
import {setshowndata} from "../Redux/Slices/listingSlice";
function Home() {
    const dispatch=useDispatch();
    let {showndata}=useSelector((state)=>state.lists);
    // let [showndata, setshowndata] = useState([]);
    let {loading}=useSelector((state)=>state.auth);
    // let [loading,setloading]=useState(null);
    const fetchalllisting=async()=>{
        dispatch(setLoading(true));
        let data =await  fetchalllistings();
        dispatch(setshowndata(data.data.data));
        localStorage.setItem("showndata",JSON.stringify(data.data.data));
        dispatch(setLoading(false));
    }
    useEffect(() => {
        fetchalllisting();
    }, [])

    let {token}=useSelector((state)=>state.auth);
    return (
        <div className="pt-7">
            <Categorycom  fxnall={fetchalllisting}/>
            <Listings data={showndata}   />
            <Footer />
        </div>
    )
}

export default Home;