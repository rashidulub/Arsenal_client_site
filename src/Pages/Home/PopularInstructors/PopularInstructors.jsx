import React, { useEffect, useState } from 'react';
import InstructorsItem from '../InstructorsItem/InstructorsItem';

const PopularInstructors = () => {
    const [menu, setMenu] = useState([]);
     useEffect(()=>{
        fetch('https://summer-camp-school-server-kappa.vercel.app/menu')
        .then(res=>res.json())
        .then(data=> {
            const Instructor =data.filter(item=>item.category ==='popular_class');
            setMenu(Instructor)
        })
     }, [])
    return (
        <div>
             <div className="mx-auto text-center mt-5 lg:my-20 md:w-4/12 ">
                <p className="text-orange-400 font-bold mb-2">---Visit Instructors Section---</p>
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Popular Instructors</h3>
            </div>
            <div className="grid grid-cols-1 lg:px-10 lg:gap-5 lg:grid-cols-3 my-20 ">
           {
                menu.map(item=> <InstructorsItem
                    key={item._id}
                    item={item}
                ></InstructorsItem>)
            }
           </div>
        </div>
    );
};

export default PopularInstructors;