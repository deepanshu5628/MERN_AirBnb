import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
function Public({children}){
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    if(token ===null){
        return children;
    }else{
     return    <Navigate to="/" />
    }
}

export default Public;