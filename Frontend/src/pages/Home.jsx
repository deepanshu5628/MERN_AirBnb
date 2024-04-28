import Categorycom from "../Components/Core/Homepage/Categorycom";
import Footer from "../Components/Common/Footer";
import Listings from "../Components/Core/Homepage/Listings";
import { useState ,useEffect} from "react";
import {fetchalllistings} from "../Services/operations/Listings";
import {useDispatch,useSelector} from "react-redux"
function Home() {
    let [showndata, setshowndata] = useState([]);
    let [loading,setloading]=useState(null);
    const fetchalllisting=async()=>{
        setloading(true);
        let data =await  fetchalllistings();
        setshowndata(data.data.data);
        setloading(false);
    }
    useEffect(() => {
        fetchalllisting();
    }, [])

    let {token}=useSelector((state)=>state.auth);
    console.log("token si ",token);
    return (
        <div>
            <Categorycom fxncat={setshowndata} fxnall={fetchalllisting}/>
            <Listings data={showndata} loading={loading}  />
            <Footer />
        </div>
    )
}

export default Home;