import Categorycom from "../Components/Core/Homepage/Categorycom";
import Footer from "../Components/Common/Footer";
import Listings from "../Components/Core/Homepage/Listings";
import { useState ,useEffect} from "react";
import {fetchalllistings} from "../Services/operations/Listings";
import {useDispatch,useSelector} from "react-redux";
import {setLoading} from "../Redux/Slices/authSlice";
function Home() {
    const dispatch=useDispatch();
    let [showndata, setshowndata] = useState([]);
    let {loading}=useSelector((state)=>state.auth);
    // let [loading,setloading]=useState(null);
    const fetchalllisting=async()=>{
        dispatch(setLoading(true));
        let data =await  fetchalllistings();
        setshowndata(data.data.data);
        dispatch(setLoading(false));
    }
    useEffect(() => {
        fetchalllisting();
    }, [])

    let {token}=useSelector((state)=>state.auth);
    return (
        <div>
            <Categorycom fxncat={setshowndata} fxnall={fetchalllisting}/>
            <Listings data={showndata}   />
            <Footer />
        </div>
    )
}

export default Home;