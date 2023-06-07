import React, { useEffect, useState } from 'react';
import ClassItem from './shared/ClassItem/ClassItem';

const PopularClass = () => {
    const [menu, setMenu] = useState([]);
     useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=> {
            const PopularClass =data.filter(item=>item.category ==='popular_class');
            setMenu(PopularClass)
        })
     }, [])

    return (
        <div>
            <div className="mx-auto text-center mt-5 lg:my-20 md:w-4/12 ">
                <p className="text-orange-400 font-bold mb-2">---Visit This Section---</p>
                <h3 className="text-3xl uppercase text-white  
                border-b-4 border-indigo-500 py-4">Popular Classes</h3>
            </div>
           <div className="grid grid-cols-1 lg:px-10 lg:gap-5 lg:grid-cols-3 my-20 ">
           {
                menu.map(item=> <ClassItem
                key={item._id}
                item={item}
                ></ClassItem>)
            }
           </div>
        </div>
    );  
};

export default PopularClass;