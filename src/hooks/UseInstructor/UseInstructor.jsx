import { useQuery } from "@tanstack/react-query";

// import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isisInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isisInstructorLoading]
}
export default useInstructor;