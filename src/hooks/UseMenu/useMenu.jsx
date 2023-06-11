import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
    
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://summer-camp-school-server-kappa.vercel.app/addClass');
            return res.json();
        }
    })

    return [menu, refetch]
}

export default useMenu;