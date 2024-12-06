import { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    

    if(loading){
        return <div className="w-56 mx-auto"><progress className="progress bg-blue-500"></progress></div> ;
       
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location?.pathname}   to="/login" replace></Navigate>
   
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}