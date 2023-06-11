import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/addClass');
            return res.json();
        }
    })

    return [menu, refetch]
}

export default useMenu;