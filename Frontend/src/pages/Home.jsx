import Categorycom from "../Components/Core/Homepage/Categorycom";
import Footer from "../Components/Common/Footer";
import Listings from "../Components/Core/Homepage/Listings";
function Home(){
    return (
        <div>
            <Categorycom/>
            <Listings/>
            <Footer/>
        </div>
    )
}

export default Home;