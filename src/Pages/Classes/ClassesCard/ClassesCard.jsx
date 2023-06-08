import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ClassesCard = ({item}) => {

    const {name,image,instructor,enroll,price ,sit, _id} =item
    const {user} = useContext(AuthContext)

    const handleAddClass = item =>{
        console.log(item);
        if(user){
            fetch('')
        }
    }

    
    return (
        <div className="card w-full   shadow-xl bg-teal-100">
        <figure><img className='p-2 w-full rounded h-72' src={image} alt="Shoes" /></figure>
        
        <div className="card-body flex flex-col ">
            <h3 className="card-title text-3xl">Class Name:<span className='text-red-700 font-bold'> {name}</span></h3>
            <h2 className="card-title">Instructor Name:<span className='text-green-700 font-bold'> {instructor}</span></h2>
            <p className='font-bold'>Available seats: <span className='text-xl font-bold text-orange-700'>{sit}</span></p>
            <p className='font-bold'>Price: <span className='text-xl font-bold text-orange-700'>${price}</span></p>
            <div className="card-actions flex-col flex items-center justify-end">
                <button onClick={handleAddClass}  className="btn btn-outline bg-orange-500 border-0 border-b-4 border-b-purple-950 mt-4">Select Class</button>
            </div>
        </div>
    </div>
    );
};

export default ClassesCard;