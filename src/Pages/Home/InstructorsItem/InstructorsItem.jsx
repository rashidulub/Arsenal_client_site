import React from 'react';

const InstructorsItem = ({item}) => {
    const {name,imageIns,instructor,enroll , _id} =item

    return (
        <div className="card card-compact w-96 bg-green-200 mb-10 shadow-xl">
        <figure><img className='p-2 rounded h-72  ' src={imageIns} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl text-black">Instructor Name: <span className='font-bold text-xl text-red-700'>{instructor}</span></h2>
            <p className="text-start  text-xl text-black">Enroll Class: <span className='font-bold text-xl text-red-700'>{enroll}</span> Students</p>
            <p className="text-start mb-6 font-bold text-base text-black">Instructor Category: <span className='font-bold text-xl text-red-700'>{name}</span></p>
            
            
            
        </div>
    </div>
    );
};

export default InstructorsItem;