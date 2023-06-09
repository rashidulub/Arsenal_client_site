import React, { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaTrashAlt,FaWallet } from 'react-icons/fa';

const Myclass = () => {
    const { user } = useContext(AuthContext)
    const [classes, SetClasses] = useState([])
    const url = `http://localhost:5000/classes?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => SetClasses(data))
    }, [])
    return (
        <div className='w-full '>
             
            <div className="w-full">
                
                <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                    <h3 className="text-3xl">Total Classes: {classes.length}</h3>
                    
                    
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='font-bold'>
                            <tr >
                                <th>#</th>
                                <th >Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Available Site</th>
                                <th>Delete</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                classes.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-bold'>
                                        {item.name}
                                    </td>
                                    <td className="font-bold">${item.price}</td>
                                    <td className="font-bold text-2xl">{item.sit}</td>
                                    <td>
                                        <button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                    <td>
                                        <button  className="btn btn-ghost bg-blue-700  text-white"><FaWallet></FaWallet></button>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Myclass;