
import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
// import { AuthContext } from "../Pages/Provider/AuthProvider";

import useInstructor from "../../hooks/UseInstructor/UseInstructor";
import { AuthContext } from "../../Pages/Provider/AuthProvider";


const InstructorRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isisInstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isisInstructorLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>

};

export default InstructorRoute;