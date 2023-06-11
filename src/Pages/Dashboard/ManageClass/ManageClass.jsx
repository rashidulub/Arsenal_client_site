import React, { useContext } from 'react';
import useMenu from '../../../hooks/UseMenu/useMenu';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';


const ManageClass = () => {
    const [menu] = useMenu();
    console.log('menuuuu', menu);
    const { user } = useContext(AuthContext)
    console.log('userrrr', user);
    return (
        <div>
            <div className='w-full mt-14 '>

                <div className="w-full">

                    <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                        <h3 className="text-3xl uppercase my   border-b-4 border-indigo-500 py-4">Manage Class</h3>



                    </div>
                    <div className="overflow-x-auto mt-10 w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='font-bold'>
                                <tr >

                                    <th >Image</th>
                                    <th>Class Name</th>
                                    <th>Available Seats
                                    </th>


                                    <th>Price</th>


                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((menus, index) => <tr key={menus._id}

                                    >


                                        <td>
                                            <div className="avatar">

                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={menus.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' text-sm font-bold'>
                                            {menus.name}
                                        </td>
                                        <td className='text-xl font-bold'>
                                            {menus.seats}
                                        </td>

                                        <td className='text-xl font-bold'>
                                            ${menus.price}
                                        </td>

                                        <td>
                                            <div >
                                                <Link to='/dashboard'>
                                                    <button className=" h-5 w-28 bg-green-600  text-white">Approved</button></Link>
                                            </div>
                                            <div className='my-2'>
                                                <Link to='/dashboard'>
                                                    <button className=" h-5 w-28 bg-red-700  text-white">Deney</button></Link>
                                            </div>
                                            <div>
                                                <Link to='/dashboard'>
                                                    <button className=" h-5 w-28 bg-blue-700  text-white">FeedBack</button></Link>
                                            </div>
                                        </td>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;