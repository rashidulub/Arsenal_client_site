import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import useAdmin from "../hooks/UseAdmin/UseAdmin";



const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;