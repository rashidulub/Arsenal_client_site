import React, { useEffect, useState } from 'react';
import ClassesCard from './ClassesCard/ClassesCard';

const Classes = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-school-server-kappa.vercel.app/menu')
        .then(res=>res.json())
        .then(data=> {
            const PopularClass =data.filter(item=>item.category ==='popular_class');
            setMenu(PopularClass)
        })
     }, [])
    return (
        <div>
            <div className="mx-auto text-center my-7 md:w-4/12 ">
                
                <h3 className="text-3xl uppercase text-white font-bold  border-b-4 border-indigo-500 py-4">Classes</h3>
                
            </div>
            <div  className='grid md:grid-cols-2 p-10  gap-16 px-10'>
                {
                menu.map(item=> <ClassesCard
                    key={item._id}
                    item={item}
                ></ClassesCard>)
            }
                </div>
        </div>
    );
};

export default Classes;