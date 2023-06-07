import React, { useEffect, useState } from 'react';
import InstructorCard from '../InstructorCard/InstructorCard';
const Instructor = () => {
  const [menu, setMenu] = useState([]);
  useEffect(()=>{
     fetch('menu.json')
     .then(res=>res.json())
     .then(data=> {
         const PopularInstructor =data.filter(item=>item.category ==='popular_class');
         setMenu(PopularInstructor)
     })
  }, [])
    return (
        <div>
          <div className="mx-auto text-center  my-6 mb-10 md:w-4/12 ">
                
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Instructors</h3>
            </div>
          <div className='grid grid-cols-1 lg:px-60 lg:gap-3 '>
         {
          menu.map(item=> <InstructorCard
          key={item._id}
          item={item}
          ></InstructorCard>)
         }
        </div>
        </div>
    );
};

export default Instructor;