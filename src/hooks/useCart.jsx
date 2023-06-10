import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthProvider';


const useCart = ()=>{
    const {user} = useContext(AuthContext);
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user.email],
        
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            
            return res.data;
        },
    })

    return [classes, refetch]


    }


export default useCart;