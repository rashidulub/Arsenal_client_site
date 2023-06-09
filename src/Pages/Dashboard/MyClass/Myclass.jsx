import React, { useContext, useEffect, useState, } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

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
        <div className='w-full'>
            <div className="w-full">
                
                <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                    <h3 className="text-3xl">Total Items: {classes.length}</h3>
                    
                    <Link to="/dashboard/payment">
                        <button className="btn btn-warning btn-sm">PAY</button>
                    </Link>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
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
                                    <td>
                                        {item.name}
                                    </td>
                                    <td className="text-end">${item.price}</td>
                                    <td>
                                        <button  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
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