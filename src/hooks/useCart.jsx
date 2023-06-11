import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure/useAxiosSecure';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [cart, refetch]

}
export default useCart;





// import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react';
// import { AuthContext } from '../Pages/Provider/AuthProvider';


// const useCart = ()=>{
//     const {user} = useContext(AuthContext);
//     const { refetch, data: classes = [] } = useQuery({
//         queryKey: ['classes', user.email],
        
//         queryFn: async () => {
//             const res = await fetch(`https://summer-camp-school-server-kappa.vercel.app/classes?email=${user?.email}`)
            
//             return res.data;
//         },
//     })

//     return [classes, refetch]


//     }


// export default useCart;